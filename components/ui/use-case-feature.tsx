"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
  image?: string;
  icon?: React.ReactNode;
}

interface TabContent {
  badge?: string;
  title?: string;
  description?: string;
  tiers: PricingTier[];
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface UseCaseFeatureProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  exploreMoreLink?: string;
}

// Extract TierCard as a separate component for better maintainability
function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <article 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-primary"
      role="group" 
      aria-labelledby={`tier-${tier.id}-title`}
    >
      <div className="p-3 sm:p-4 md:p-5">
        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full mb-2 sm:mb-3">
          {tier.icon || (
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" aria-hidden="true" />
          )}
        </div>
        
        <h3 id={`tier-${tier.id}-title`} className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
          {tier.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
          {tier.description}
        </p>
        
        {tier.image ? (
          <div className="mt-2 mb-2 sm:mt-3 sm:mb-3 relative w-full aspect-video overflow-hidden rounded-md">
            <Image 
              src={tier.image} 
              alt=""  // Decorative image, described by the heading and description
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
              sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 300px"
            />
          </div>
        ) : (
          <div className="mt-2 mb-2 sm:mt-3 sm:mb-3 relative w-full aspect-video bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-xs sm:text-sm text-gray-400">No image available</span>
          </div>
        )}
      </div>
    </article>
  );
}

export function UseCaseFeature({
  badge = "Use Cases",
  heading = "Välj den lösning som passar dig bäst",
  description = "Vi erbjuder olika lösningar för olika behov",
  tabs = [],
  exploreMoreLink = "#"
}: UseCaseFeatureProps) {
  return (
    <section className="pt-16 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0]?.value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                  {tab.content.tiers.map((tier) => (
                    <TierCard key={tier.id} tier={tier} />
                  ))}
                </div>
                
                <div className="flex justify-center mt-10">
                  <Link 
                    href={exploreMoreLink} 
                    passHref
                  >
                    <Button 
                      variant="outline" 
                      className="rounded-full px-6 group"
                    >
                      Explore more use cases from our official collection
                      <svg 
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}