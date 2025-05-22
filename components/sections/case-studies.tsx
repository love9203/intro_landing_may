import { Gallery4, Gallery4Props } from "../ui/gallery4";

const demoData: Gallery4Props = {
  title: "Kundberättelser",
  description:
    "Över 700 företag och 1000+ användare nyttjar Intro till att hitta, kontakta och anställa toppkandidater. Se varför de litar på oss.",
  items: [
    {
      id: "shadcn-ui",
      title: "Östgötatrafiken",
      description:
        "Upptäck hur Östgötatrafiken använder Intro för att hitta och attrahera specialister inom embedded systems och AI.",
      href: "/articles/ostgotatrafiken",
      image: "/images/case_studies/ostgotatrafiken_sliced.png",
    },
    {
      id: "tailwind",
      title: "byBrick",
      description:
        "Hur byBrick fick bättre träffsäkerhet på kandidater och högre svarsfrekvens jämfört med LinkedIn med hjälp av Intros rekryteringsplattform.",
      href: "/articles/bybrick",
      image: "/images/case_studies/bybrick.svg",
    },
    {
      id: "astro",
      title: "Handelshögskolan (HHS)",
      description:
        "Se hur Handelshögskolan i Stockholm (HHS) effektiviserade sin tech-rekrytering med hjälp av Intro.",
      href: "/articles/sse",
      image: "/images/case_studies/hhs.svg",
    },
    {
      id: "react",
      title: "Werlabs",
      description:
        "Upptäck hur Werlabs effektiviserade sin rekryteringsprocess och kunde fokusera på att intervjua kandidater istället för att leta efter dom.",
      href: "/articles/werlabs",
      image: "/images/case_studies/werlabs.svg",
    },
    {
      id: "nextjs",
      title: "Ninetech",
      description:
        "Hur Ninetech fick fler svar av kandidater och utökade sitt kandidatnätverk med Intro.",
      href: "/articles/ninetech",
      image: "/images/case_studies/ninetech_new.svg",
    },
  ],
};

export function CaseStudies() {
  return (
    <div id="case-studies">
      <Gallery4 {...demoData} />
    </div>
  );
}
