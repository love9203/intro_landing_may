import { Users, Building2, Map, BookOpen, BarChart2, Search, Database, LineChart } from "lucide-react"
import { UseCaseFeature } from "@/components/ui/use-case-feature"

const demoData = {
  badge: "Use Cases",
  heading: "Välj den lösning som passar dig bäst",
  description: "Vi erbjuder olika lösningar för olika behov",
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
            name: "Trip to Japan in april",
            description: "Manus integrates comprehensive travel information to create personalized itineraries and produces a custom travel handbook tailored specifically for your Japanese adventure.",
            features: [
              "Sök i 36+ källor",
              "Smart matchning",
              "Realtidsdata",
              "20+ filter",
              "Specialist support",
            ],
            cta: "Börja nu",
            icon: <Map className="h-5 w-5 text-gray-600" />,
            image: "/images/japan_trip.jpg"
          },
          {
            id: "sourcing-plus",
            name: "Interactive course on the momentum theorem",
            description: "Manus develops engaging video presentations for middle school educators, clearly explaining the momentum theorem through accessible and educational content.",
            features: [
              "Uppstart inom 24 timmar",
              "Intresserade kandidater inom några dagar",
              "Anställning inom några veckor",
            ],
            cta: "Uppgradera",
            icon: <BookOpen className="h-5 w-5 text-gray-600" />,
            image: "/images/momentum_course.jpg"
          },
          {
            id: "talent-pool-plus",
            name: "Comparative analysis of insurance policies",
            description: "Looking to compare insurance options? Manus generates clear, structured comparison tables highlighting key policy information with optimal recommendations.",
            features: [
              "Allt i Talent Pool",
              "Team samarbete",
              "Workflow automation",
              "Custom branding",
              "Priority support",
            ],
            cta: "Uppgradera",
            icon: <BarChart2 className="h-5 w-5 text-gray-600" />,
            image: "/images/insurance_analysis.jpg"
          },
          {
            id: "enterprise",
            name: "B2B supplier sourcing",
            description: "Manus conducts comprehensive research across extensive networks to identify the most suitable suppliers for your specific requirements. As your dedicated agent, Manus works exclusively in your best interest.",
            features: [
              "Allt i Talent Pool+",
              "Dedikerad specialist",
              "API integration",
              "Custom rapporter",
              "SLA support",
            ],
            cta: "Kontakta oss",
            icon: <Database className="h-5 w-5 text-gray-600" />,
            image: "/images/supplier_sourcing.jpg"
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
            name: "Research on AI products for the clothing industry",
            description: "Manus conducts comprehensive research on AI search products in the clothing industry, with comprehensive product analysis and competitive positioning.",
            features: [
              "Innehållsstrategi",
              "Automatisk publicering",
              "Engagemangsanalys",
              "A/B testning",
              "ROI mätning",
            ],
            cta: "Börja posta",
            icon: <Search className="h-5 w-5 text-gray-600" />,
            image: "/images/ai_research.jpg"
          },
          {
            id: "campaigns",
            name: "List of YC companies",
            description: "Manus expertly navigated the YC W25 database to identify all qualifying B2B companies, meticulously compiling this valuable information into a structured table.",
            features: [
              "Campaign strategy",
              "Creative production",
              "Multi-platform reach",
              "Advanced analytics",
              "ROI optimization",
            ],
            cta: "Starta kampanj",
            icon: <Database className="h-5 w-5 text-gray-600" />,
            image: "/images/yc_companies.jpg"
          },
          {
            id: "job-ads",
            name: "Online store operation analysis",
            description: "Upload your Amazon store sales data and Manus delivers actionable insights, detailed visualizations, and customized strategies designed to increase your sales performance.",
            features: [
              "Multi-channel posting",
              "Smart targeting",
              "Performance tracking",
              "A/B testing",
              "Budget optimization",
            ],
            cta: "Börja annonsera",
            icon: <LineChart className="h-5 w-5 text-gray-600" />,
            image: "/images/store_analysis.jpg"
          },
          {
            id: "enterprise-brand",
            name: "Campaign explanation maps",
            description: "Custom-designed visualization maps that bring historical events like the Battle of Lexington to life, enhancing student understanding through intuitive visual storytelling.",
            features: [
              "Allt i Campaigns",
              "Brand strategy",
              "Custom integration",
              "Dedicated support",
              "Custom reporting",
            ],
            cta: "Kontakta oss",
            icon: <Map className="h-5 w-5 text-gray-600" />,
            image: "/images/campaign_maps.jpg"
          },
        ],
      }
    }
  ]
};

export function UseCaseSectionDemo() {
  return <UseCaseFeature {...demoData} />;
}
