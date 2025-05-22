"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Vad våra kunder säger",
  description = "Nöjda användare från hundratals olika företag i alla storlekar.",
  maxDisplayed = 6
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-4xl font-medium">{title}</h2>
          <p className="text-center text-muted-foreground">
            {description.split("<br />").map((line, i) =>
            <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 grid-flow-row auto-rows-auto items-start",
            !showAll &&
            testimonials.length > maxDisplayed &&
            "max-h-[720px] overflow-hidden"
          )}>

          {testimonials
          .slice(0, showAll ? undefined : maxDisplayed)
          .sort((a, b) => {
            // Sort by text length to group similar sized testimonials together
            return b.text.length - a.text.length;
          })
          .map((testimonial, index) =>
          <Card
            key={index}
            className="p-3 sm:p-5 relative bg-card border-border self-start h-auto">

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mb-3 sm:mb-0" />

                  <div className="flex flex-col sm:pl-4">
                    <span className="font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                </div>
                {testimonial.social &&
            <button
              onClick={() => openInNewTab(testimonial.social!)}
              className="absolute top-4 right-4 hover:opacity-80 transition-opacity">

                    <Icons.twitter className="h-4 w-4" aria-hidden="true" />
                  </button>
            }
              </Card>
          )}
        </div>

        {testimonials.length > maxDisplayed && !showAll &&
        <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          </>
        }
      </div>
    </div>);

}