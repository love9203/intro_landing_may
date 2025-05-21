"use client";

import * as React from "react";
import { Book, Trees, Sunset, Zap, Menu, X, Mail } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn, navigateToTab } from "@/lib/utils";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CustomSheetContent } from "@/components/ui/custom-sheet";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
  onClick?: (e: React.MouseEvent) => void;
}

export interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=100",
    alt: "logo",
    title: "Shadcnblocks.com"
  },
  menu = [
  {
    title: "Products",
    url: "#",
    items: [
    {
      title: "Intro Email",
      description: "Nå igenom bruset med smarta emailsekvenser",
      icon: <Mail className="size-5 shrink-0" />,
      url: "/#product-features?tab=email",
      onClick: (e) => {
        e.preventDefault();
        navigateToTab('product-features', '[data-tab="email"]');
      }
    },
    {
      title: "Blog",
      description: "The latest industry news, updates, and info",
      icon: <Book className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Company",
      description: "Our mission is to innovate and empower the world",
      icon: <Trees className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Careers",
      description: "Browse job listing and discover our workspace",
      icon: <Sunset className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Support",
      description:
      "Get in touch with our support team or visit our community forums",
      icon: <Zap className="size-5 shrink-0" />,
      url: "#"
    }]

  },
  {
    title: "Resources",
    url: "#",
    items: [
    {
      title: "Help Center",
      description: "Get all the answers you need right here",
      icon: <Zap className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Contact Us",
      description: "We are here to help you with any questions you have",
      icon: <Sunset className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Status",
      description: "Check the current status of our services and APIs",
      icon: <Trees className="size-5 shrink-0" />,
      url: "#"
    },
    {
      title: "Terms of Service",
      description: "Our terms and conditions for using our services",
      icon: <Book className="size-5 shrink-0" />,
      url: "#"
    }]

  },
  {
    title: "Pricing",
    url: "#"
  },
  {
    title: "Blog",
    url: "#"
  }],

  mobileExtraLinks = [
  { name: "Press", url: "#" },
  { name: "Contact", url: "#" },
  { name: "Imprint", url: "#" },
  { name: "Sitemap", url: "#" }],

  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" }
  }
}: Navbar1Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [pendingHash, setPendingHash] = React.useState<string | null>(null);
  
  // Effect to handle scrolling when the menu closes
  React.useEffect(() => {
    if (!isOpen && pendingHash) {
      console.log("[Nav] Menu closed, scrolling to:", pendingHash);
      
      // Wait a small delay to ensure the menu is fully closed
      setTimeout(() => {
        const el = document.getElementById(pendingHash);
        if (el) {
          console.log("[Nav] Running scrollIntoView for:", pendingHash);
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${pendingHash}`);
          console.log("[Nav] Updated history.pushState");
        } else {
          console.log("[Nav] Element not found:", pendingHash);
        }
        
        // Clear the pending hash
        setPendingHash(null);
      }, 100); // Small delay to ensure the menu is fully closed
    }
  }, [isOpen, pendingHash]);
  
  const SCROLL_DELAY = 400; // ms
  
  return (
    <section className="py-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-8 h-10">
            <Link href={logo.url}>
              <Image src={logo.src} width={96} height={40} className="w-24 h-10" alt={logo.alt} />
            </Link>
            <div className="flex items-center h-full">
              <NavigationMenu className="my-auto">
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={auth.login.url}>{auth.login.text}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.text}</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url}>
              <Image src={logo.src} width={96} height={40} className="w-24 h-10" alt={logo.alt} />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <CustomSheetContent hideCloseButton={true} className="overflow-y-auto px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                  <Link href={logo.url}>
                    <Image src={logo.src} width={96} height={40} className="w-24 h-10" alt={logo.alt} />
                  </Link>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
                <div className="flex flex-col gap-8">
                  <Accordion
                    type="multiple"
                    className="flex w-full flex-col gap-6">

                    {menu.map((item) => renderMobileMenuItem(item, () => setIsOpen(false), setPendingHash))}
                  </Accordion>

                  <div className="flex flex-col gap-4 mt-2 border-t pt-6">
                    <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                      <Link href={auth.login.url}>{auth.login.text}</Link>
                    </Button>
                    <Button asChild onClick={() => setIsOpen(false)}>
                      <Link href={auth.signup.url}>{auth.signup.text}</Link>
                    </Button>
                  </div>
                </div>
              </CustomSheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>);

};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            {item.items.map((subItem) =>
            <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                  className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                  href={subItem.url}
                  onClick={subItem.onClick}>

                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description &&
                    <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                    }
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            )}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>);

  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground my-auto"
      href={item.url}
      onClick={item.onClick}>

      {item.title}
    </Link>);

};

// Helper function to extract hash from URL
function extractHash(url: string): string | null {
  const idx = url.indexOf("#");
  if (idx === -1) return null;
  // "product-features?tab=email" → "product-features"
  return url.slice(idx + 1).split("?")[0];
}

const renderMobileMenuItem = (item: MenuItem, closeMenu?: () => void, setPendingHash?: (hash: string | null) => void): React.ReactElement => {
  const handleLinkClick = (
    e: React.MouseEvent,
    url: string,
    originalOnClick?: (e: React.MouseEvent) => void
  ) => {
    console.log("[Nav] clicked:", url);
    const hash = extractHash(url);
    
    // If it has a custom onClick handler, run it first
    if (originalOnClick) {
      console.log("[Nav] calling originalOnClick");
      e.preventDefault();
      originalOnClick(e);
      
      // Close the menu after a delay to allow custom navigation to start
      if (closeMenu) {
        setTimeout(() => {
          console.log("[Nav] closing menu after custom onClick");
          closeMenu();
        }, 100);
      }
      return; // Exit early since the custom handler takes precedence
    }
    
    if (hash) {
      console.log("[Nav] hash link, will scroll to:", hash);
      e.preventDefault();
      
      // Store the hash in the parent component's state
      if (typeof setPendingHash === 'function') {
        setPendingHash(hash);
      }
      
      // Close the menu
      closeMenu?.();
    } else {
      console.log("[Nav] normal link, closing immediately");
      closeMenu?.();
    }
  };

  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-2 px-1 font-semibold hover:no-underline text-base">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 pl-2">
          {item.items.map((subItem) =>
          <Link
            key={subItem.title}
            className="flex select-none gap-4 rounded-md p-3 my-1 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
            href={subItem.url}
            onClick={(e) => handleLinkClick(e, subItem.url, subItem.onClick)}
          >
            {subItem.icon}
            <div>
              <div className="text-sm font-semibold">{subItem.title}</div>
              {subItem.description &&
                <p className="text-sm leading-snug text-muted-foreground">
                  {subItem.description}
                </p>
              }
            </div>
          </Link>
          )}
        </AccordionContent>
      </AccordionItem>
    );
  }

  // simple top-level link
  return (
    <Link
      key={item.title}
      href={item.url}
      className="font-semibold py-2 px-1 block text-base"
      onClick={(e) => handleLinkClick(e, item.url, item.onClick)}
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };