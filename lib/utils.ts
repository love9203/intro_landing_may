import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Navigates to a specific tab within a section using a more robust approach
 * with MutationObserver to handle dynamic content loading
 * 
 * @param sectionId - The ID of the section to scroll to
 * @param tabSelector - The selector for the tab to activate (data attribute preferred)
 * @param scrollBehavior - Optional scroll behavior, defaults to 'smooth'
 */
export function navigateToTab(
  sectionId: string, 
  tabSelector: string, 
  scrollBehavior: ScrollBehavior = 'smooth'
): void {
  // First scroll to the section
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: scrollBehavior });
    
    // Use MutationObserver instead of setTimeout for more reliable tab selection
    const observer = new MutationObserver(() => {
      const tabElement = document.querySelector(tabSelector) as HTMLElement;
      if (tabElement) {
        tabElement.click();
        observer.disconnect();
      }
    });
    
    // Start observing the section for changes with a configuration to detect tab rendering
    observer.observe(section, {
      childList: true,
      subtree: true
    });
    
    // Fallback: If tabs are already rendered, try to click immediately
    const tabElement = document.querySelector(tabSelector) as HTMLElement;
    if (tabElement) {
      tabElement.click();
    }
    
    // Safety: Disconnect observer after a reasonable timeout to prevent memory leaks
    setTimeout(() => observer.disconnect(), 3000);
  }
}
