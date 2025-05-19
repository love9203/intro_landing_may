import Image from "next/image";

interface CaseStudyHeaderProps {
  company: string;
  title: string;
  description: string;
  logo: string;
}

export function CaseStudyHeader({ company, title, description, logo }: CaseStudyHeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={logo} alt={`${company} logo`} width={48} height={48} className="h-12 w-auto" />
        <h1 className="text-3xl font-bold">{company}</h1>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-600">{description}</p>
    </header>
  );
}
