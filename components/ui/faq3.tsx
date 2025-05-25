import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
{
  id: "faq-1",
  question: "What is the return policy?",
  answer:
  "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition."
},
{
  id: "faq-2",
  question: "How do I track my order?",
  answer:
  "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order."
},
{
  id: "faq-3",
  question: "Do you offer international shipping?",
  answer:
  "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination."
},
{
  id: "faq-4",
  question: "Can I change my order after it has been placed?",
  answer:
  "You can change your order within 24 hours of placing it by contacting our customer service team."
},
{
  id: "faq-5",
  question: "What payment methods do you accept?",
  answer: "We accept all major credit cards, PayPal, and Apple Pay."
},
{
  id: "faq-6",
  question: "How can I contact customer support?",
  answer:
  "You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567."
},
{
  id: "faq-7",
  question: "Are there any discounts for bulk purchases?",
  answer:
  "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information."
}];


const Faq3 = ({
  heading = "FAQ",
  description = "Allt du behöver veta om våra tjänster. Hittar du inte svaret du letar efter? Tveka inte att kontakta vårt supportteam.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com"
}: Faq3Props) => {
  return (
    <section className="pt-8 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl">

          {items.map((item) =>
          <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 text-sm sm:text-base">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground text-sm sm:text-base">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/images/intro_avatars/isabelle_intro.avif" />
              <AvatarFallback>IS</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/images/intro_avatars/simon_intro.avif" />
              <AvatarFallback>SI</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="/images/intro_avatars/viktor_intro.avif" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export { Faq3 };