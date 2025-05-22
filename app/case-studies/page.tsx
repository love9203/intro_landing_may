import { Gallery4, Gallery4Props } from "../../components/ui/gallery4";

const caseStudiesData: Gallery4Props = {
  title: "Kundberättelser",
  description:
    "Över 700 företag och 1000+ användare nyttjar Intro till att hitta, kontakta och anställa toppkandidater. Se varför de litar på oss.",
  items: [
    {
      id: "ostgotatrafiken",
      title: "Östgötatrafiken",
      description:
        "Upptäck hur Östgötatrafiken använder Intro för att hitta och attrahera specialister inom embedded systems och AI.",
      href: "/case-studies/ostgotatrafiken",
      image: "/images/case_studies/ostgotatrafiken_sliced.png",
    },
    {
      id: "bybrick",
      title: "byBrick",
      description:
        "Hur byBrick fick bättre träffsäkerhet på kandidater och högre svarsfrekvens jämfört med LinkedIn med hjälp av Intros rekryteringsplattform.",
      href: "/case-studies/bybrick",
      image: "/images/case_studies/bybrick.svg",
    },
    {
      id: "hhs",
      title: "Handelshögskolan (HHS)",
      description:
        "Se hur Handelshögskolan i Stockholm (HHS) effektiviserade sin tech-rekrytering med hjälp av Intro.",
      href: "/case-studies/sse",
      image: "/images/case_studies/hhs.svg",
    },
    {
      id: "werlabs",
      title: "Werlabs",
      description:
        "Upptäck hur Werlabs effektiviserade sin rekryteringsprocess och kunde fokusera på att intervjua kandidater istället för att leta efter dom.",
      href: "/case-studies/werlabs",
      image: "/images/case_studies/werlabs.svg",
    }
  ],
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-8">
      <Gallery4 {...caseStudiesData} />
    </div>
  );
}
