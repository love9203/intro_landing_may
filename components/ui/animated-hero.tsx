'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Fullstack", "Embedded", "Machine Learning", "Devops"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full pt-8">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 mb-2">
              Läs vår artikel om Go-To-Talent <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-2 flex-col mt-2 px-4">
            <h1 className="text-[42px] sm:text-[46px] md:text-[68px] max-w-2xl tracking-tighter text-center font-regular leading-[1.1]">
              <span className="text-spektr-cyan-50">Din heltäckande lösning för att växa ditt konsultbolag inom</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-0">
                &nbsp;
                {titles.map((title, index) =>
                <motion.span
                  key={index}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                  titleNumber === index ?
                  {
                    y: 0,
                    opacity: 1
                  } :
                  {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0
                  }
                  }>

                    {title}
                  </motion.span>
                )}
              </span>
            </h1>

            <p className="!text-[16px] !md:text-xl leading-tight tracking-tight text-muted-foreground max-w-2xl text-center mt-1 mb-2" style={{fontSize: '16px'}}>
              Att rekrytera seniora kandidater är tufft. Intro förenklar detta genom att göra en komplett kartläggning av din kandidatpool. Enbart relevanta kandidater.
              3x konvertering jämfört med traditionella metoder.
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-2">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="https://search.intro.io/" target="_blank" rel="noopener noreferrer">
                Testa ett sök <Search className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <Link href="/book-demo">
                Boka demo <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>);

}

export { Hero };