"use client";

import { Navbar1, Navbar1Props } from "../ui/navbar1";
import { Book, Sunset, Trees, Zap } from "lucide-react";

const demoData: Navbar1Props = {
  logo: {
    url: "/",
    src: "/images/intro_logo.svg",
    alt: "Your Company",
    title: "Your Company",
  },
  menu: [
    {
      title: "Produkter",
      url: "#",
      items: [
        {
          title: "Intro Email",
          description: "3x konvertering jämfört med Linkedin",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/#product-features?tab=email",
          mobileUrl: "/product-features?tab=email",
          onClick: async (e: React.MouseEvent) => {
            e.preventDefault();
            const currentPath = window.location.pathname;
            if (currentPath !== '/') {
              window.location.href = '/#product-features?tab=email';
              return;
            }
            window.location.hash = '#product-features?tab=email';
            document.getElementById('product-features')?.scrollIntoView({ behavior: 'smooth' });
          },
          mobileOnClick: (e: React.MouseEvent) => {
            // For mobile, navigate directly to the product-features page
            window.location.href = '/product-features?tab=email';
          },
        },
        {
          title: "Intro Annonsering",
          description: "Annonsering med laserprecision, slipp inflöde av okvalificerade kandidater",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/#product-features?tab=annonsering",
          mobileUrl: "/product-features?tab=annonsering",
          onClick: async (e: React.MouseEvent) => {
            e.preventDefault();
            const currentPath = window.location.pathname;
            if (currentPath !== '/') {
              window.location.href = '/#product-features?tab=annonsering';
              return;
            }
            window.location.hash = '#product-features?tab=annonsering';
            document.getElementById('product-features')?.scrollIntoView({ behavior: 'smooth' });
          },
          mobileOnClick: (e: React.MouseEvent) => {
            // For mobile, navigate directly to the product-features page
            window.location.href = '/product-features?tab=annonsering';
          },
        },
        {
          title: "Go-To-Talent",
          description: "Din heltäckande lösning för att rekrytera seniora kandidater",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/#product-features?tab=kartlaggning",
          mobileUrl: "/product-features?tab=kartlaggning",
          onClick: async (e: React.MouseEvent) => {
            e.preventDefault();
            const currentPath = window.location.pathname;
            if (currentPath !== '/') {
              window.location.href = '/#product-features?tab=kartlaggning';
              return;
            }
            window.location.hash = '#product-features?tab=kartlaggning';
            document.getElementById('product-features')?.scrollIntoView({ behavior: 'smooth' });
          },
          mobileOnClick: (e: React.MouseEvent) => {
            // For mobile, navigate directly to the product-features page
            window.location.href = '/product-features?tab=kartlaggning';
          },
        },
      ],
    },
    {
      title: "Support",
      url: "#",
      items: [
        {
          title: "Help Center & FAQ",
          description: "Få alla svar du behöver här",
          icon: <Zap className="size-5 shrink-0" />,
          url: "https://intro-svenska.bubbleapps.io/helpcenter",
        },
        {
          title: "Kontakta oss",
          description: "Vi finns här för att hjälpa dig med alla frågor du har",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/book-demo",
        },
        {
          title: "För kandidater",
          description: "Kontrollera aktuell status för våra tjänster",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/opt_out",
        },
        {
          title: "Terms of Service",
          description: "Våra villkor för användning av våra tjänster",
          icon: <Book className="size-5 shrink-0" />,
          url: "/terms",
        },
      ],
    },
    {
      title: "Priser",
      url: "/pricing",
    },
    {
      title: "Kundberättelser",
      url: "/#case-studies",
      mobileUrl: "/case-studies",
      onClick: async (e: React.MouseEvent) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (currentPath !== '/') {
          window.location.href = '/#case-studies';
        } else {
          document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
      mobileOnClick: (e: React.MouseEvent) => {
        // For mobile, navigate directly to the case-studies page
        window.location.href = '/case-studies';
      }
    },
  ],
  auth: {
    login: { text: "Logga in", url: "https://app.intro.io/" },
    signup: { text: "Boka demo", url: "/book-demo" }
  }
};

export function MainNavigation() {
  return <Navbar1 {...demoData} />;
}
