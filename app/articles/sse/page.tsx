import { CaseStudyResults } from "@/components/case-study/case-study-results";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stockholm School of Economics Case Study | Strategic Recruitment Success",
  description: "Discover how Stockholm School of Economics transformed their recruitment challenges into strategic successes with Intro's platform"
};

export default function SSECaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Hur Handelshögskolan stärker sitt employer brand och får kontakt med fler talanger med hjälp av Intro.
        </h1>
        <p className="text-md text-gray-600">
          Lästid: 4 minuter
        </p>
      </div>

      {/* Key points section */}
      <div className="grid gap-6 mt-12">
        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Ort</h3>
            <p className="mt-2 text-gray-600">
              Stockholm
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Urval av roller</h3>
            <p className="mt-2 text-gray-600">
              Network Specialist, Security Coordinator, IT Service Owner 
            </p>
          </div>
        </div>



      </div>

      {/* Company intro section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Handelshögskolan i Stockholm – Ledande i Norden och Baltikum</h2>
        <div className="space-y-6 text-gray-600">
          <br />
          <p>
          Som Nordens och Baltikums ledande handelshögskola är Handelshögskolan i Stockholm (HHS) känd för att locka till sig studenter och forskare i världsklass. Men när det kom till att attrahera lika kvalificerade medarbetare bakom kulisserna – särskilt inom nischade IT-roller – stötte HR-teamet på en allt tuffare arbetsmarknad.
          </p>
          <p>
            Vi har pratat med Linda Ackered som jobbar som HR Business Partner på Handelshögskolan och stödjer både den administrativa personalen och fakulteten i deras rekrytering.
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Specialiserade krav – en av de största utmaningarna var att hitta rätt kandidater till deras olika tjänster. Med många specialiserade områden inom verksamheten var det svårt att vara expert på alla områden vilket ofta krävs för att hitta rätt kandidater.</li>
            <li>Begränsad budget – Utrymmet för dyra headhunting-lösningar var minimalt.</li>
            <li>Tidsbrist – HR-teamet behövde ett sätt att kombinera personlig kandidatkontakt med effektivitet.</li>
          </ol>
        </div>
      </div>

      {/* Solution section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Varför SSE valde Intro</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Trots budgetbegränsningar kvarstod behovet att nå ut till eftertraktade kandidater med specialiserad kompetens, framför allt inom IT. Det var då Intro introducerades som ett komplement till deras befintliga rekryteringsstrategi.
          </p>
          
          <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            &quot;Intro hjälpte oss att spara tid och samtidigt behålla en personlig kontakt med kandidaterna – något som är viktigt för oss.&quot;
            <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <img
                  src="/images/avatars/linda_sse.jpg"
                  alt="Linda Ackered"
                  className="w-full h-full object-cover" />
              </div>
              – Linda Ackered, HR Business Partner
            </footer>
          </blockquote>
          
          <p>
            Intros lösning kombinerar automatisering med ett personligt tilltal via e-post, vilket inte bara gör processen mer effektiv – utan också förbättrar svarsfrekvensen från kvalificerade kandidater. Dessutom ger plattformen en samlad överblick, vilket förenklar rekryteringsarbetet ytterligare.
          </p>
        </div>
      </div>

      {/* Implementation section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Snabb implementering och trygg support</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Införandet av Intro gick snabbt och smidigt, med endast minimala insatser från IT-avdelningen. Linda framhåller särskilt den personliga supporten från sin kontaktperson Viktor som en avgörande faktor för en lyckad start.
          </p>
          
          <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            &quot;Superbra kontaktperson – Viktor har varit fantastisk. Han följde upp hela tiden, gav feedback på våra mejl och såg till att vi kom igång ordentligt. Han har verkligen varit en klippa.&quot;
            <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <img
                  src="/images/avatars/linda_sse.jpg"
                  alt="Linda Ackered"
                  className="w-full h-full object-cover" />
              </div>
              – Linda Ackered, HR Business Partner
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Resultat: Flera kontakter och stärkt employer brand</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Samarbetet med Intro har redan gett resultat. Handelshögskolan har lyckats anställa flertalet kandidater inom helt olika områden. Dessutom har de breddat sitt nätverk och samtidigt stärkt sitt employer brand – varje kontakt har bidragit med värde.
          </p>
          
          <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            &quot;Med Intro har vi nått kandidater vi annars inte skulle ha fått kontakt med.&quot;
            <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <img
                  src="/images/avatars/linda_sse.jpg"
                  alt="Linda Ackered"
                  className="w-full h-full object-cover" />
              </div>
              – Linda Ackered, HR Business Partner
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Summary section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Sammanfattning</h2>
        <div className="space-y-4 text-gray-600 mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Utmaning:</strong> Begränsad budget och behov av nischad kompetens</li>
            <li><strong>Lösning:</strong> Introduktion av Intro för att effektivisera outreach och spara tid</li>
            <li><strong>Resultat:</strong> Flera lyckade rekryteringar, breddat nätverk, stärkt arbetsgivarvarumärke</li>
          </ul>
        </div>
      </div>

    </div>);

}