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
  mobileUrl?: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
  onClick?: (e: React.MouseEvent) => void;
  mobileOnClick?: (e: React.MouseEvent) => void;
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
    url: "/",
    src: "/images/intro_logo.svg",
    alt: "Intro",
    title: "Intro"
  },
  menu = [],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Logga in", url: "#" },
    signup: { text: "Boka demo", url: "#" }
  }
}: Navbar1Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [pendingHash, setPendingHash] = React.useState<string | null>(null);
  
  // Effect to handle scrolling when the menu closes
  React.useEffect(() => {
    if (!isOpen && pendingHash) {
      // Use requestAnimationFrame to ensure DOM updates have completed
      requestAnimationFrame(() => {
        const element = document.getElementById(pendingHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update URL hash without triggering a scroll
          window.history.pushState(null, "", `#${pendingHash}`);
          // Clear the pending hash
          setPendingHash(null);
        }
      });
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
              <CustomSheetContent hideCloseButton={true} disableScrollLock={true} className="overflow-y-auto px-6 py-8" title="Menu" description="Navigation menu">
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
                    {menu.map((item) => (
                      <Button asChild variant="outline" onClick={() => setIsOpen(false)} key={item.title}>
                        <Link href={item.mobileUrl || item.url} onClick={item.mobileOnClick || item.onClick}>{item.title}</Link>
                      </Button>
                    ))}
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
                  href={subItem.mobileUrl || subItem.url}
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
      href={item.mobileUrl || item.url}
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
    const hash = extractHash(url);
    
    // If it has a custom onClick handler, run it first
    if (originalOnClick) {
      e.preventDefault();
      originalOnClick(e);
      
      // Still queue the hash if this link also has a hash
      if (hash) {
        if (typeof setPendingHash === 'function') {
          setPendingHash(hash);
        }
      }
      
      // Close the menu with a slight delay to ensure the onClick completes
      setTimeout(() => closeMenu?.(), 150);
      return;
    }
    
    if (hash) {
      e.preventDefault();
      
      // Store the hash in the parent component's state
      if (typeof setPendingHash === 'function') {
        setPendingHash(hash);
      }
      
      // Close the menu
      closeMenu?.();
    } else {
      // Regular link, just close the menu
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
            href={subItem.mobileUrl || subItem.url}
            scroll={false}
            onClick={(e) => handleLinkClick(e, subItem.mobileUrl || subItem.url, subItem.mobileOnClick || subItem.onClick)}
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
      href={item.mobileUrl || item.url}
      scroll={false}
      className="font-semibold py-2 px-1 block text-base"
      onClick={(e) => handleLinkClick(e, item.mobileUrl || item.url, item.mobileOnClick || item.onClick)}
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };