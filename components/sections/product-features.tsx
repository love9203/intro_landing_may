"use client";

import { Target, Phone, Star, Mail, Check, Search } from "lucide-react";
import { Feature108 } from "../ui/feature-108";
import { useEffect, useState, useCallback } from "react";

const demoData = {
  badge: "Features",
  heading: "Intro Go-To-Talent är drivet av männsikor med AI.",
  description: "Hitta kandidater du tidigare inte upptäckt.",
  tabs: [
    {
      value: "tab-1",
      icon: <Check className="h-auto w-4 shrink-0" />,
      label: "Fullständig kartläggning",
      content: {
        badge: "Go-To-Talent",
        title: "Kartlägg din kandidatpool.",
        description:
          "Tack vare vår sökmotor kan vi kartlägga alla kandidater som är rätt för en specifik roll, det enda som behövs är en tydlig kravprofil.",
        features: [
          "36 olika källor online söks av i realtid efter att ett sök initieras",
          "Smart analys för att hitta dolda kandidater som andra inte hittar",
          "Hitta enbart kandidater som passar din roll",
          "20+ filter för att träffa rätt",
          "Uppbackning från specialist för att fånga in nyanserna av din kravprofil",
          "Spara 10 timmar per månad"
        ],
        buttonText: "Se Demo",
        imageSrc:
          "/images/platform_images/search_params.png",
        imageAlt: "Search parameters interface",
      },
    },
    {
      value: "tab-2",
      icon: <Search className="h-auto w-4 shrink-0" />,
      label: "Dolda kandidater",
      content: {
        badge: "Smart matchning",
        title: "Hitta dolda kandidater.",
        description:
          "Genom smart bearbetning av indikationer online kan vi hitta kandidater du tidigare inte upptäckt.",
        features: [
          "Identifiera kandidater med rätt kompetens och erfarenhet",
          "Få en fullständing kartläggning - kom bort ifrån enbart keyword-sök",
          "Hitta kandidater som inte är aktiva på LinkedIn",
          "Upptäck talanger innan andra rekryterare"
        ],
        buttonText: "See Tools",
        imageSrc:
          "/images/platform_images/Slice_20.png",
        imageAlt: "Team collaboration meeting",
      },
    },
    {
      value: "tab-3",
      icon: <Mail className="h-auto w-4 shrink-0" />,
      label: "Email",
      content: {
        badge: "Nå igenom bruset",
        title: "Email",
        description:
          "När du kontaktar kandidater via Intro gör du det med hjälp av smarta emailsekvenser. Den första kontakten sker med ett vanligt email, och om kandidaten inte svarar följer Intro automatiskt upp med påminnelser. Du har full kontroll och kan själv bestämma hur många uppföljningsmail som ska skickas innan vi avslutar försöken.",
        features: [
          "Open rate på över 90%",
          "Slipp manuellt uppföljningsarbete.",
          "A/B Testa olika budskap",
          "Vi har hjälpt våra kunder att skicka över 100 000 email till kandidater genom åren, och vi vet vilka meddelanden som bäst konverterar till intervjuer – den expertisen får du på köpet när du väljer Intro.",
        ],
        buttonText: "Se Demo",
        images: [
          {
            src: "/images/platform_images/email_1.jpeg",
            alt: "Email template editor",
            description: "Flexibla sekvensverktyg"
          },
          {
            src: "/images/platform_images/email_2.jpeg",
            alt: "Email sequence stats",
            description: "A/B Testa flera sekvenser parallellt för att se vad som konverterar"
          }
        ],
      },
    },
    {
      value: "tab-4",
      icon: <Target className="h-auto w-4 shrink-0" />,
      label: "Riktad annonsering",
      content: {
        badge: "Annonsering med laserprecision",
        title: "Riktade annonser",
        description:
          "En superriktad annonskampanj startas mot kandidaterna i din målgrupp. Annonskampanjer via Intro genererar i snitt 10 gånger så många klick jämfört med vanliga sociala medier kampanjer.",
        features: [
          "Annonsera enbart mot relevanta kandidater - bättre ROI på ad spend",
          "Upp till 12 gånger mer kandidater klickar jämfört med vanlig annonsering",
          "Detaljerad statistik och insikter",
          "A/B-testning av annonsinnehåll",
          "Spara tid och få inga irrelevanta ansökningar som måste behandlas",
        ],
        buttonText: "Läs Mer",
        imageSrc:
          "/images/platform_images/ads_werlabs.gif",
        imageAlt: "AI matchning system",
      },
    },
    {
      value: "tab-5",
      icon: <Star className="h-auto w-4 shrink-0" />,
      label: "Dedikerad specialist",
      content: {
        badge: "Kontinuerlig support för maximal effekt",
        title: "Dedikerad specialist.",
        description:
          "Full uppbackning av en dedikerad specialist som hjälper dig få full utväxling av Intro under varje steg av processen.",
        features: [
          "Personlig specialist som stöttar dig genom hela processen",
          "Hjälp med att formulera kravprofil och sökstrategi",
          "Löpande uppföljning och optimering av sökresultat",
          "Första screening samtal vid behov",
          "Hjälp att hantera inkommande svar från kandidater vid behov",
          "Tillgänglig via telefon och mail när du behöver hjälp"
        ],
        buttonText: "Se Statistik",
        imageSrc:
          "/images/platform_images/photo_team.jpeg",
        imageAlt: "Precisionsrekrytering dashboard",
      },
    },
    {
      value: "tab-6",
      icon: <Phone className="h-auto w-4 shrink-0" />,
      label: "Telefonnummer",
      content: {
        badge: "Omnichannel",
        title: "Telefonnummer",
        description:
          "Hitta mobilnummer till kandidater.",
        features: [
          "Kvalitetssäkrade telefonnummer",
          "Direktkontakt med potentiella kandidater",
          "Ring eller SMSa kandidater",
        ],
        buttonText: "Utforska",
        imageSrc:
          "/images/platform_images/chatting.png",
        imageAlt: "Tillväxt diagram",
      },
    },
  ],
};

function ProductFeatures() {
  // State to control which tab is selected
  const [selectedTab, setSelectedTab] = useState("tab-1");

  // Function to handle hash changes and tab selection
  const handleHashChange = useCallback(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('#product-features')) {
      console.log("Hash changed, checking tab parameter");
      const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
      const tabParam = urlParams.get('tab');
      console.log("Tab parameter:", tabParam);
      
      if (tabParam === 'email') {
        console.log("Setting Email tab (tab-3)");
        setSelectedTab("tab-3");
      } else if (tabParam === 'annonsering') {
        console.log("Setting Riktad annonsering tab (tab-4)");
        setSelectedTab("tab-4");
      } else if (tabParam === 'kartlaggning') {
        console.log("Setting Fullständig kartläggning tab (tab-1)");
        setSelectedTab("tab-1");
      }
      
      // Scroll to the section
      setTimeout(() => {
        console.log("Scrolling to product-features section");
        document.getElementById('product-features')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);
  
  // Handle direct linking to tabs when the page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log("Initial check for tab parameter");
      
      // Add event listener for hash changes (for when already on the landing page)
      window.addEventListener('hashchange', handleHashChange);
      
      // Initial check for hash parameters
      handleHashChange();
      
      // Check if we need to scroll to this section (coming from another page)
      const shouldScroll = sessionStorage.getItem('scrollToProductFeatures') === 'true';
      if (shouldScroll) {
        // Clear the flag
        sessionStorage.removeItem('scrollToProductFeatures');
        
        // Use a slightly longer timeout to ensure the page is fully loaded
        setTimeout(() => {
          console.log("Scrolling to product-features section from session storage flag");
          document.getElementById('product-features')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
      
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [handleHashChange]);
  
  return (
    <div id="product-features">
      <Feature108 
        {...demoData} 
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </div>
  );
}

export { ProductFeatures };
