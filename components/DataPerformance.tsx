import { ArrowUpRight } from "lucide-react";

const metrics = [
  { number: "1.1M+", label: "Organic views generated for brands" },
  { number: "15+", label: "Brands brought to life" },
  { number: "87.8%", label: "Audience retention" },
  { number: "70.6%", label: "Stayed to watch" },
  { number: "25s", label: "Average view duration" },
];

const performanceRows = [
  {
    src: "/peformance_data/row1_right_to_left.webp",
    alt: "Performance chart collage, row one",
    direction: "performance-marquee-right",
  },
  {
    src: "/peformance_data/row2_left_to_right.webp",
    alt: "Performance chart collage, row two",
    direction: "performance-marquee-left",
  },
];

export default function DataPerformance() {
  return (
    <section id="results" className="overflow-hidden border-y border-gray-100 bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between md:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">The work, in numbers</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-ink md:text-5xl">Creative with a signal.</h2>
          </div>
          <a href="#case-study" className="inline-flex items-center gap-2 pb-1 text-sm font-medium text-muted transition hover:text-blue-600">
            See the Airlearn story <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mx-6 grid gap-px overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:mx-12 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="bg-white px-5 py-7 md:px-6 md:py-8">
              <p className={`font-serif text-4xl leading-none tracking-[-0.05em] md:text-[2.75rem] ${index === 0 ? "text-blue-600" : "text-ink"}`}>
                {metric.number}
              </p>
              <p className="mt-3 max-w-[12rem] text-sm leading-5 text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 space-y-5 sm:mt-16 sm:space-y-7">
        {performanceRows.map((row) => (
          <div key={row.src} className="performance-marquee-viewport" aria-label={row.alt}>
            <div className={`performance-marquee-track ${row.direction}`}>
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="performance-marquee-group"
                  aria-hidden={copy === 1}
                >
                  <img
                    src={row.src}
                    alt={copy === 0 ? row.alt : ""}
                    width="5500"
                    height="900"
                    className="performance-marquee-image"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-7xl px-6 text-xs text-gray-400 md:px-12">Selected campaign and channel results. Performance varies by brief, audience, and platform.</p>
    </section>
  );
}
