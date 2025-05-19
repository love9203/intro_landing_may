"use client";

import * as React from "react";
import { BadgeCheck, ArrowRight } from "lucide-react";
import NumberFlow from "@number-flow/react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface UseCaseTier {
  name: string;
  price: Record<string, number | string>;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
}

interface UseCaseCardProps {
  tier: UseCaseTier;
  paymentFrequency: string;
}

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/90 -z-10" />
);

const PopularBackground = () => (
  <div className="absolute -top-1 -right-1 h-16 w-16 overflow-hidden">
    <div className="absolute top-0 right-0 h-2 w-2 bg-primary-foreground" />
    <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary-foreground" />
    <div className="absolute top-0 right-0 h-8 w-8 translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
  </div>
);

export function UseCaseCard({ tier, paymentFrequency }: UseCaseCardProps) {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <Card
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden p-6",
        isHighlighted ?
        "bg-foreground text-background" :
        "bg-background text-foreground",
        isPopular && "ring-2 ring-primary"
      )}>

      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular &&
        <Badge variant="secondary" className="mt-1 z-10">
            🔥 Most Popular
          </Badge>
        }
      </h2>

      <div className="relative h-12">
        {typeof price === "number" ?
        <>
            <NumberFlow
            format={{
              style: "currency",
              currency: "USD",
              trailingZeroDisplay: "stripIfInteger"
            }}
            value={price}
            className="text-4xl font-medium" />

            <p className="-mt-2 text-xs text-muted-foreground">
              Per month/user
            </p>
          </> :

        <h1 className="text-4xl font-medium">{price}</h1>
        }
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) =>
          <li
            key={index}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              isHighlighted ? "text-background" : "text-muted-foreground"
            )}>

              <BadgeCheck className="h-4 w-4" />
              {feature}
            </li>
          )}
        </ul>
      </div>

      <Button
        variant={isHighlighted ? "secondary" : "default"}
        className="w-full">

        {tier.cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>);

}