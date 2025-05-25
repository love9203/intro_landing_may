import { Faq3 } from "@/components/ui/faq3"
import Link from "next/link"

const demoData = {
  heading: "Vanliga frågor",
  description:
    "Allt du behöver veta om våra tjänster. Hittar du inte svaret du letar efter? Tveka inte att kontakta vårt supportteam.",
  items: [
    {
      id: "faq-1",
      question: "Vilka roller kan Intro hjälpa till med?",
      answer:
        "Vi jobbar framförallt med tech (Utvecklare, DevOps, Data, AI, etc.) men många kunder använder oss också för helt andra typer av roller, tex. Läkare, Sjuksköterska, CFO, Ekonom, Jurist, Tekniker, Account Managers etc.",
    },
    {
      id: "faq-2",
      question: "Är Intro GDPR- och CCPA-anpassad?",
      answer:
        "Ja, vi följer strikt både GDPR och CCPA. All data hanteras enligt gällande integritetslagar och föreskrifter.",
    },
    {
      id: "faq-3",
      question: "Integrerar Intro med mitt ATS?",
      answer:
        "Vi erbjuder integrationer med de flesta populära ATS-system inklusive Jobylon, Teamtailor, Lever och Greenhouse.",
    },
    {
      id: "faq-4",
      question: "Hur lång tid tar det att fylla en roll?",
      answer:
        "Många av våra kunder bokar in sina första intervjuer redan inom några dagar från startad kampanj – hur lång tid det tar till anställning beror sedan helt på hur er rekryteringsprocess ser ut, vi har kunder som anställt redan efter 2 veckor.",
    },
    {
      id: "faq-5",
      question: "Erbjuder ni löpande support?",
      answer:
        "Ja, vi erbjuder omfattande support och underhåll för att säkerställa att din rekryteringsprocess fungerar optimalt. Du kommer att tilldelas en egen Customer Success Specialist vars enda mål är att du ska få maximal effekt av Intro.",
    },
    {
      id: "faq-6",
      question: "Var kommer Intros data ifrån?",
      answer:
        "Vi samlar data från över 36 olika källor för att ge dig den mest kompletta bilden av din kandidatmarknad.",
    },
    {
      id: "faq-7",
      question: "Kommer det funka för min roll?",
      answer: (
        <>
          Gör en{" "}
          <Link
            href="https://search.intro.io/"
            target="_blank"
            className="text-primary hover:underline"
          >
            Search Request
          </Link>{" "}
          utifrån din roll så återkommer vi med en kostnadsfri kartläggning av din specifika pool - vi vet då bättre om det finns förutsättningar för ett lyckat projekt.
        </>
      ),
    },
  ],
  supportHeading: "Har du fler frågor?",
  supportDescription:
    "Hittar du inte det du söker? Vårt team finns här för att hjälpa dig med alla frågor om våra tjänster.",
  supportButtonText: "Kontakta oss",
  supportButtonUrl: "/book-demo",
};

function Faq3Demo() {
  return <Faq3 {...demoData} />;
}

export { Faq3Demo };
