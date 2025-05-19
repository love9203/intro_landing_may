import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Boka en Demo | Intro",
  description: "Boka en demo med vårt team för att lära dig mer om vår produkt",
};

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Boka en Demo</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Boka en tid med vårt team för att se hur Intro kan användas i din rekryteringsprocess och få svar på alla dina frågor.
        </p>
        
        {/* HubSpot Calendar Embed Container */}
        <div className="meetings-iframe-container rounded-lg shadow-lg overflow-hidden" 
             data-src="https://meetings.hubspot.com/introdemo/demo-introio?embed=true">
        </div>
      </div>
      
      {/* HubSpot Meetings Embed Script */}
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
