import type { Metadata } from "next";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stats } from "@/components/sections/Stats";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "AS NEXTGEN Pvt Ltd is a digital engineering company with offices in Hungary and India, building web, mobile and enterprise software and mentoring student engineers.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="About us"
            title={company.tagline}
            description={company.description}
          />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-ink-2 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
              Mission
            </div>
            <p className="font-display text-2xl text-foam">{company.mission}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-ink-2 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
              Vision
            </div>
            <p className="font-display text-2xl text-foam">{company.vision}</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="What we stand for" title="Our Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {company.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/8 bg-ink-2 p-7"
              >
                <h3 className="font-display font-semibold text-xl text-foam mb-3">
                  {v.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <GlobalPresence />
      <ContactCTA />
    </>
  );
}
