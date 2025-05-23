"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Platform {
  name: string;
  icon: string;
  color: string;
}

const platforms: Platform[] = [
{ name: "LinkedIn", icon: "/images/logos/linkedin.webp", color: "#0A66C2" },
{ name: "GitHub", icon: "/images/logos/github.svg", color: "#24292F" },
{ name: "StackOverflow", icon: "/images/logos/stackoverflow.png", color: "#F48024" },
{ name: "Y Comb.", icon: "/images/logos/ycombinator.png", color: "#FF6600" },
{ name: "Quora", icon: "/images/logos/quora.png", color: "#B92B27" },
{ name: "AngelList", icon: "/images/logos/angellist.png", color: "#000000" },
{ name: "X/Twitter", icon: "/images/logos/x.png", color: "#000000" },
{ name: "Meetup", icon: "/images/logos/meetup.png", color: "#ED1C40" },
{ name: "Reddit", icon: "/images/logos/reddit.png", color: "#FF4500" }];


interface TargetGroupMappingProps {
  className?: string;
}

export function TargetGroupMapping({ className }: TargetGroupMappingProps) {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const duration = 7000; // 7 seconds
    const logoInterval = duration / platforms.length; // Time between each logo highlight
    let currentStep = 0;

    const timer = setInterval(() => {
      const elapsed = currentStep * 50; // 50ms intervals
      const progress = elapsed / duration * 100;
      setProgress(Math.min(progress, 100));

      // Calculate which logo should be highlighted based on elapsed time
      const logoIndex = Math.floor(elapsed / logoInterval);
      if (logoIndex < platforms.length && logoIndex !== activeIndex) {
        setActiveIndex(logoIndex);
      }

      currentStep++;

      if (elapsed >= duration) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4 sm:px-6", className)}>
      <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10">
        {platforms.map((platform, index) =>
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="flex flex-col items-center">

            <motion.div
              className={cn(
                "relative rounded-full bg-background/50 backdrop-blur-sm",
                "shadow-lg hover:shadow-xl",
                "flex items-center justify-center",
                "transition-all duration-300",
                "border border-border/50",
                "w-10 h-10 sm:w-12 sm:h-12 md:w-[4.5rem] md:h-[4.5rem]",
                index === activeIndex && "ring-2 ring-blue-500 ring-offset-2 ring-offset-background scale-110"
              )}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}>

              <Image
                src={platform.icon}
                alt={platform.name}
                width={40}
                height={40}
                className={cn(
                  "object-contain",
                  "w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9"
                )} />

            </motion.div>
            <span className="mt-2 text-xs sm:text-sm md:text-base font-medium text-muted-foreground">
              {platform.name}
            </span>
          </motion.div>
        )}
      </div>

      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "linear" }} />

      </div>
    </div>);

}