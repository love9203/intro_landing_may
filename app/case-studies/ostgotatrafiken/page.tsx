import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Östgötatrafiken Case Study | Finding Tech Specialists with Intro",
  description: "Learn how Östgötatrafiken successfully recruited tech specialists and improved their recruitment process using Intro's platform"
};

export default function ScaniaCaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Hur Östgatatrafiken fick ett mer kvalitativt inflöde av kandidater till positioner som tidigare varit svåra att tillsätta.
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
              Linköping
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
              Systemadministratörer, IT-Specialister
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
            - Hitta specialister inom IT och Systemadministration
            <br />
            - Minska beroende av externa rekryteringsbolag
            <br />
            - Bygga en pipeline av framtida tech-talanger i Östergötland
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        &quot;Att ha Intro som partner ger en avslappnande känsla - för att jag vet att vi kommer i mål med rekryteringen.&quot;
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img
              src="/images/avatars/zeraldin_ostgotatrafiken.jpeg"
              alt="Anders Nilsson"
              className="w-full h-full object-cover" />

          </div>
          - Zeraldin Hajdarevic, Technical & IT-Infrastructure Manager, Östgatatrafiken
        </footer>
      </blockquote>

      {/* Results section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Östgötatrafiken ansvarar för kollektivtrafiken i Östergötland.</h2>
        <div className="space-y-6 text-gray-600">
          <br />
          <p>
          Östgötatrafiken planerar linjer och tidtabeller med buss, tåg och spårvagn med målet att ge sina kunder en enkel, trygg och bekväm resa och ett bra och pålitligt alternativ till bilen.
          </p>
          <p>
          De arbetar bland annat för att öka kollektivtrafikens marknadsandel och ha nöjda kunder. Utformningen av deras resor och tjänster ska också bidra till ett klimatpositivt samhälle.
          </p>
          <p>
          Vi har pratat med Zeraldin Hajdarevic, Technical & IT-infrastructure Manager på Östgötatrafiken. 
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
          Zeraldin upplever att det har varit svårt att rekrytera IT-kompetens de senaste 7-8 åren. Han berättar att de tidigare har jobbat mer efter ett traditionellt recept genom rekryteringsbolag och annonser.
          </p>
          <p>
          Han beskriver hur det har varit ett jätteproblem att de partners som anlitats har misslyckats. Så när de hörde talas om Intros metod att sätta kunden i kontakt med kandidater direkt och inte via en mellanhand blev han genast nyfiken.
          </p>
          <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            &quot;Efter ha testat flera olika traditionella rekryteringsföretag och annonsering utan resultat så hoppade vi på Intro. Vi var skeptiska i början, de vore inte det första företaget inom rekryteringsbranschen som lovar mycket.&quot;
            <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <img
                  src="/images/avatars/zeraldin_ostgotatrafiken.jpeg"
                  alt="Zeraldin Hajdarevic"
                  className="w-full h-full object-cover" />
              </div>
              - Zeraldin Hajdarevic, Technical & IT-Infrastructure Manager, Östgötatrafiken
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Resultatet</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Genom att implementera Intro kunde Östgötatrafiken se betydande resultat:
            <br />
            <br />
            • Lyckade tillsättningar på alla planerade roller 
            <br />
            • Helt annat inflöde av kvalitativa kandidater jämfört med tidigare metoder
            <br />
            • Kontakt med kandidater som normalt inte nåddes via andra kanaler
            <br />
            • Möjlighet att konkurrensutsätta kandidaterna i processen, vilket har varit en lyxsituation
            <br />
            <br />
            Zeraldin berättar att en särskilt framgångsrik del i arbetet med Intro har varit volymen av kvalitativa kandidater han fått möjlighet att prata med. Han beskriver hur Intro ger han väldigt mycket att göra, vilket är precis det han vill uppnå i en rekryteringsprocess. Han har alltför många gånger upplevt det motsatta - att inte ha tillräckligt med bra kandidater i process. Nu kan han välja och vraka bland kvalitativa kandidater.
          </p>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Skulle du rekommendera Intro?</h2>
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
          &quot;Definitivt! Intro är en möjliggörare. Intro är receptet för hur du ska lyckas med dina rekryteringar idag, traditionella rekryteringslösningar är passé. Att det är vi från Östgötatrafiken som hör av oss till kandidater och inte en mellanhand är en game-changer.&quot;
          <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                src="/images/avatars/zeraldin_ostgotatrafiken.jpeg"
                alt="Zeraldin Hajdarevic"
                className="w-full h-full object-cover" />

            </div>
            - Zeraldin Hajdarevic, Technical & IT-Infrastructure Manager, Östgötatrafiken
          </footer>
        </blockquote>
      </div>
    </div>);

}