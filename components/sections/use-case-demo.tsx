import { Users, Building2, Map, BookOpen, BarChart2, Search, Database, LineChart, Briefcase, Brain } from "lucide-react"
import { UseCaseFeature } from "@/components/ui/use-case-feature"

const demoData = {
  badge: "Användningsområden",
  heading: "Intro anpassar sig efter ditt behov",
  description: "Utforska hur våra tusentals användare nyttjar Intro för att få maximal effekt i sin rekrytering och employer branding.",
  exploreMoreLink: "/use-cases",
  tabs: [
    {
      value: "rekrytering",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Rekrytering",
      content: {
        tiers: [
          {
            id: "sourcing",
            name: "Golang",
            location: "Stockholm",
            description: "Fintech-startup använde Intro för att strukturerat bearbeta begränsad pool med Golang-utvecklare i Stockholm. Resultat: 5 hires på 8 månader.",
            features: [
              "Sök i 36+ källor",
              "Smart matchning",
              "Realtidsdata",
              "20+ filter",
              "Specialist support",
            ],
            cta: "Börja nu",
            icon: <img src="/images/platform_images/golang.png" className="h-6 w-6" />,
          },
          {
            id: "sourcing-plus",
            name: "Python/Django",
            location: "Göteborg",
            description: "Startup i Göteborg rekryterade en Senior Fullstack-utvecklare med erfarenhet av Python/Django. Tid från inttierad kampanj till startdatum, 3 månader.",
            features: [
              "Uppstart inom 24 timmar",
              "Intresserade kandidater inom några dagar",
              "Anställning inom några veckor",
            ],
            cta: "Uppgradera",
            icon: <img src="/images/platform_images/django.png" className="h-6 w-6" />,
          },
          {
            id: "talent-pool-plus",
            name: "Fullstack Java",
            location: "Helsinki",
            description: "Finskt IT-konsultbolag rekryterade 7 Fullstack Java-utvecklare på 12 månader. Erfarenhetsnivå mellan 5-10 år.",
            features: [
              "Allt i Talent Pool",
              "Team samarbete",
              "Workflow automation",
              "Custom branding",
              "Priority support",
            ],
            cta: "Uppgradera",
            icon: <img src="/images/platform_images/java.png" className="h-6 w-6" />,
          },
          {
            id: "enterprise",
            name: ".NET Fullstack",
            location: "Göteborg",
            description: "Konsultbolag med nystartat kontor i Göteborg rekryterade 5 .NET Fullstack-utvecklare på 6 månader. Erfarenhetsnivå mellan 8-15 år. Tidigare konsulterfarenhet.",
            features: [
              "Allt i Talent Pool+",
              "Dedikerad specialist",
              "API integration",
              "Custom rapporter",
              "SLA support",
            ],
            cta: "Kontakta oss",
            icon: <img src="/images/platform_images/dotnet.png" className="h-6 w-6" />,
          },
          {
            id: "react-developers",
            name: "C-Level - Headhunting",
            location: "Stockholm",
            description: "Bolag i Stockholm rekryterade en CFO med erfarnhet från börsnoterade bolag. Roll som tidigare inte tillsatts via traditionellt headinghunting-företag.",
            features: [
              "Specialiserad talangpool",
              "Målgruppsanalys",
              "Kandidatengagemang",
              "Intervjuschemaläggning",
              "Onboarding-stöd",
            ],
            cta: "Börja nu",
            icon: <Briefcase className="h-6 w-6 text-gray-600" />,
          },
          {
            id: "data-science",
            name: "Data Scientists",
            location: "Stockholm",
            description: "AI-startup i Stockholm rekryterade 4 Data Scientists med erfarenhet av machine learning och Python. Tid från kampanjstart till full bemanning: 6 månader.",
            features: [
              "Specialiserad sökning",
              "Kompetensbaserad matchning",
              "Teknisk screening",
              "Kandidatuppföljning",
              "Datadriven rekrytering",
            ],
            cta: "Uppgradera",
            icon: <Brain className="h-6 w-6 text-gray-600" />,
          },
          {
            id: "devops-engineers",
            name: "DevOps Engineers",
            location: "Remote",
            description: "SaaS-företag rekryterade 3 DevOps-ingenjörer för helt remote arbete. Fokus på Kubernetes, Docker och CI/CD. Samtliga positioner tillsatta inom 5 månader.",
            features: [
              "Remote-fokuserad sökning",
              "Teknisk kompetensmatchning",
              "Kulturell passform",
              "Virtuell onboarding",
              "Distributed team support",
            ],
            cta: "Uppgradera",
            icon: <img src="/images/platform_images/kubernetes.png" className="h-6 w-6" />,
          },
          {
            id: "mobile-developers",
            name: "Ersättningsrekrytering",
            location: "Stockholm",
            description: "Produktbolag i Stockholm behövde snabbt ersätta Senior Utvecklare med erfarenhet av primärt Node.js och React. Tid från initierad kampanj till första intervju: 2 dagar. Tid från initierad kampanj till anställd kandidat: 2 veckor.",
            features: [
              "Specialiserad talangpool",
              "Teamrekrytering",
              "Kompetenskartläggning",
              "Intervjukoordinering",
              "Långsiktig talangstrategi",
            ],
            cta: "Kontakta oss",
            icon: <img src="/images/platform_images/nodejs.png" className="h-6 w-6" />,
          },
        ],
      }
    },
    {
      value: "employer-branding-annonsering",
      icon: <Building2 className="h-auto w-4 shrink-0" />,
      label: "Employer Branding / Annonsering",
      content: {
        tiers: [
          {
            id: "social",
            name: "Hemvändarkampanj",
            location: "Luleå",
            description: "Konsultbolag i Luleå riktade en annonseringskampnj mot kandidater med rötterna från Norrbotten. Resultat: 1 kandidat som bodde i Stockholm tog besult att nappa på erbjudandet och flytta hem till Luleå",
            features: [
              "Innehållsstrategi",
              "Automatisk publicering",
              "Engagemangsanalys",
              "A/B testning",
              "ROI mätning",
            ],
            cta: "Börja posta",
            icon: <Search className="h-5 w-5 text-gray-600" />,
            image: "/images/platform_images/lulea.jpeg"
          },
          {
            id: "campaigns",
            name: "5x inflöde av kvalificerade kandidater",
            location: "Stockholm",
            description: "Konsultbolag i Stockholm nyttjade Intros riktade annonser mot Seniora .NET-utvecklare. Resulat, 5x inflöde av kvalifiserade kandidater jämfört med tidigare alternativ och flera anställningar.",
            features: [
              "Campaign strategy",
              "Creative production",
              "Multi-platform reach",
              "Advanced analytics",
              "ROI optimization",
            ],
            cta: "Starta kampanj",
            icon: <Database className="h-5 w-5 text-gray-600" />,
          },
          {
            id: "job-ads",
            name: "Riktad employer branding mot studenter",
            location: "Stockholm",
            description: "Konsultbolag utvecklade sin exponering mot ingenjörsstudenter från Industriell Ekonomi och Teknisk Fysik från KTH, Chalmers, Lund och LiU.",
            features: [
              "Multi-channel posting",
              "Smart targeting",
              "Performance tracking",
              "A/B testing",
              "Budget optimization",
            ],
            cta: "Börja annonsera",
            icon: <LineChart className="h-5 w-5 text-gray-600" />,
            image: "/images/platform_images/kth.webp"
          },
          {
            id: "enterprise-brand",
            name: "Seniora Konstruktörer inom Mekanik",
            location: "Göteborg",
            description: "Konsultbolag boostade sitt flöde av Seniora Mekanikkonstruktörer med en riktad annonseringskampanj.",
            features: [
              "Allt i Campaigns",
              "Brand strategy",
              "Custom integration",
              "Dedicated support",
              "Custom reporting",
            ],
            cta: "Kontakta oss",
            icon: <Map className="h-5 w-5 text-gray-600" />,
          },
        ],
      }
    }
  ]
};

export function UseCaseSectionDemo() {
  return <UseCaseFeature {...demoData} />;
}
