import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSections />

      <footer className="border-t border-gray-100 bg-white px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="font-medium text-ink">Axel Daniel</a>
          <p>Independent creator for ambitious tech brands.</p>
          <a href="mailto:hello@axeldaniel.com" className="inline-flex items-center gap-2 text-ink transition hover:text-blue-600">
            Get in touch <ArrowRight size={15} />
          </a>
        </div>
      </footer>
      <a href="#top" className="sr-only focus:not-sr-only">Back to top</a>
    </main>
  );
}
