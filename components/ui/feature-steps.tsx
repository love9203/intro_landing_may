"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image?: string;
  customContent?: React.ReactNode;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  imageHeight = "h-[500px]"
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleStepClick = (index: number) => {
    setCurrentFeature(index);
  };

  return (
    <div className={cn("px-8 pt-16 pb-16 md:px-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl text-center mx-auto mb-10">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 md:items-start">
          <div className="order-2 md:order-1 space-y-10">
            {features.map((feature, index) =>
            <motion.div
              key={index}
              className="flex items-start gap-6 md:gap-8 cursor-pointer relative z-10 p-2 hover:bg-gray-50/50 rounded-md transition-colors"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleStepClick(index)}>

                <motion.div
                className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 flex-shrink-0 -mt-0.5",
                  index === currentFeature ?
                  "bg-primary border-primary text-primary-foreground scale-110" :
                  "bg-muted border-muted-foreground"
                )}>

                  {index <= currentFeature ?
                <span className="text-lg font-bold">✓</span> :

                <span className="text-lg font-semibold">{index + 1}</span>
                }
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className={cn(
              `order-1 md:order-2 relative h-[350px] md:h-[450px] lg:${imageHeight} overflow-hidden rounded-lg md:self-center z-0`
            )}>

            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                index === currentFeature &&
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -100, opacity: 0, rotateX: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}>

                      {feature.customContent ?
                  feature.customContent :
                  feature.image ?
                  <>
                          <Image
                      src={feature.image}
                      alt={feature.step}
                      className="w-full h-full object-cover transition-transform transform"
                      width={1000}
                      height={500} />

                          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        </> :
                  null}
                    </motion.div>

              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>);

}