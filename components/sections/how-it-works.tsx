"use client"

import { FeatureSteps } from "../ui/feature-steps";
import { AnimatedSearchForm } from "@/components/ui/AnimatedSearchForm"
import { TargetGroupMapping } from "@/components/ui/target-group-mapping"
import Inbox from "@/components/ui/inbox"
import Image from "next/image"

const mockInboxData = [
  {
    id: "1",
    name: "Erik Andersson",
    subject: ".NET Fullstack",
    preview: "Det låter intressant eftersom jag i min nästa roll förmodligen vill hitta tillbaka mer mot fullstack...",
    sentAt: "2025-05-07T15:15:00+02:00",
    starred: false,
    read: false,
  },
  {
    id: "2",
    name: "Anna Lindström",
    subject: "Ekonomitjänsten",
    preview: "Hej! Kul att höra från er! Det låter verkligen intressant! Vi kan boka ett samtal om ni vill.",
    sentAt: "2025-05-07T15:19:00+02:00",
    read: false,
  },
  {
    id: "3",
    name: "Sofia Bergström",
    subject: "Backend Lead",
    preview: "Jag ska gå på föräldraledighet på torsdag, för de kommande 12 månaderna, så det är inget som är...",
    sentAt: "2025-05-07T15:23:00+02:00",
    starred: false,
    read: false,
  },
  {
    id: "4",
    name: "David Nilsson",
    subject: "DevOps",
    preview: "Hej! Tack för ditt mail! Låter spännande. Jag skulle gärna vilja höra lite mer om er och hur...",
    sentAt: "2025-05-07T15:27:00+02:00",
    read: false,
  },
  {
    id: "5",
    name: "Gustav Eklund",
    subject: "Sv: Full Stack-tjänsten?",
    preview: "Hej, det låter jättebra! Vi kan ta ett videomöte, jag är tillgänglig: - Måndag 12 februari kl 15, alt. -...",
    sentAt: "2025-05-07T15:31:00+02:00",
    read: false,
  },
]

const features = [
  { 
    step: 'Step 1', 
    title: 'Ange dina sökkriterier',
    content: 'Ladda upp eller länka din jobbannons, alternativt mata in dina krav i Intro.', 
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-16 sm:py-20 px-6 sm:px-8 overflow-visible">
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]">
          <AnimatedSearchForm triggerAnimation={true} />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 2',
    title: 'Intro kartlägger din kandidatpool',
    content: 'Vi aggregerar data från 36+ relevanta källor. Vi hittar även dolda kandidater.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-14 sm:py-16 px-3 sm:px-4">
        <div className="w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] pt-8">
          <TargetGroupMapping />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 3',
    title: 'Annonsering & riktad outreach',
    content: 'Din kartlagda målgrupp bearbetas på ett strukturerat sätt genom annonsering i sociala medier och genom email-kampanjer till deras personliga email.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-[84%]">
          <Image src="/images/platform_images/steg3.png" alt="Step 3" width={800} height={450} className="w-full h-auto" />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 4',
    title: 'Svaren direkt till din inbox',
    content: 'Kandidater som är intresserade av din roll kommer direkt till din inbox.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
          <Inbox messages={mockInboxData} />
        </div>
      </div>
    )
  },
]

export function HowItWorks() {
  return (
    <FeatureSteps 
      features={features}
      title="Go-To-Talent med Intro"
      imageHeight="h-[500px]"
    />
  )
}
