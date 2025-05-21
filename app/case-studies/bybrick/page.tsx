import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "byBrick Case Study | Hur Intro förbättrade deras tekniska rekrytering",
  description: "Upptäck hur byBrick fick bättre träffsäkerhet på kandidater och högre svarsfrekvens jämfört med LinkedIn med hjälp av Intros rekryteringsplattform"
};

export default function ByBrickCaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Hur byBrick fick bättre hitrate på rätt typer av kandidater, fler svar än på LinkedIn och bättre första intervjuer med kandidater med hjälp av Intro.
        </h1>
        <p className="text-md text-gray-600">
          Lästid: 3 minuter
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
              Systemutvecklare inom olika områden: Java, .NET, Frontend
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Mål med Intro:</h3>
            <p className="mt-2 text-gray-600">
              - Hitta rätt typer av utvecklare med högre träffsäkerhet 
              <br />
              - Få fler svar från kandidater än via LinkedIn
              <br />
              - Effektivisera rekryteringsprocessen
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        &quot;Intro ger mig mycket bättre hitrate på rätt kandidater samt att jag får fler svar än vad jag får på LinkedIn. Det har dessutom varit mycket bättre första intervjuer med kandidater som har kommit fram via Intro&quot;
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img
              src="/images/avatars/tobias-bybrick.jpeg"
              alt="Tobias Carlsson"
              className="w-full h-full object-cover" />
          </div>
          - Tobias Carlsson, Group Recruitment Manager, byBrick
        </footer>
      </blockquote>

      {/* About section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Om byBrick</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            ByBrick består av fem olika specialistföretag med olika tekniska kompetenser för att kunna hjälpa sina kunder att super-effektivisera sin utveckling och affär.
          </p>
          <p>
            Vi har pratat med Tobias Carlsson, Group Recruitment Manager, om hur han upplever samarbetet med Intro.
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            "Jag har använt LinkedIn Recruiter i alla år och LinkedIn har alltid haft problemet att träffa helt rätt. Söker du efter en specifik roll hamnar du ganska snabbt i ett läge där det blir felmatchningar i deras sökverktyg.
          </p>
          <p>
            Sedan ville jag också kontakta kandidaterna på ett annat sätt än via meddelanden på LinkedIn för att se om jag får fler svar."
          </p>
        </div>
      </div>

      {/* Solution section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Lösningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            ByBrick fick möjligheten att testa Intro parallellt med LinkedIn för att jämföra om resultatet är bättre.
          </p>
          <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            &quot;Att säga upp LinkedIn är inte något jag trodde jag skulle göra någonsin, då när all min konversationshistorik försvinner och likaså all data jag har sparat med kandidater. Därför var det bra att vi kunde implementera och testa Intro medan vi fortfarande hade LinkedIn för att se om våra sök träffade bättre kandidater och vi fick svar från fler än man får på LinkedIn.&quot;
            <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <img
                  src="/images/avatars/tobias-bybrick.jpeg"
                  alt="Tobias Carlsson"
                  className="w-full h-full object-cover" />
              </div>
              - Tobias Carlsson, Group Recruitment Manager, byBrick
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Resultatet</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Genom att implementera Intro kunde byBrick se betydande resultat:
            <br />
            <br />
            • Intro gav bättre träffsäkerhet och hittade fler kandidater som matchar deras kriterier än LinkedIn
            <br />
            • Fler kandidater svarade via email än vad de gör på LinkedIn
            <br />
            • Första intervjuer var av högre kvalité med kandidater från Intro
            <br />
            <br />
            Tobias berättar att plattformen har andra bra funktioner som smarta emailsekvenser, sammanfattande statistik på hur bra projekten går samt att Intro taggar upp svaren automatiskt och hjälper honom att prioritera.
          </p>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Skulle du rekommendera Intro?</h2>
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
          &quot;Ja det gör jag, testa! Intro är bättre än vad LinkedIn är och de har potential att utveckla produkten vidare till att bli ännu bättre. Men jag rekommenderar också Intro teamet, du får inte bättre support och expertis om search någon annanstans. På LinkedIn så kan du ta del av någon webbkurs, medan på Intro får du sitta med en expert och bolla dina sökningar och meddelanden.&quot;
          <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                src="/images/avatars/tobias-bybrick.jpeg"
                alt="Tobias Carlsson"
                className="w-full h-full object-cover" />
            </div>
            - Tobias Carlsson, Group Recruitment Manager, byBrick
          </footer>
        </blockquote>
      </div>
    </div>);

}