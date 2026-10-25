import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AS NEXTGEN Pvt Ltd — project enquiries, careers and student internship applications. Offices in Hungary and India.",
};

const offices = [company.contact.hungary, company.contact.india];

export default function ContactPage() {
  const { email } = company.contact;

  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Get in touch"
            title="Let&apos;s Talk About<br/>Your Next Project"
            description="Project enquiry, role application or internship question — email or message us and we'll reply to every message."
          />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {/* Primary channels */}
          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${email}`}
              className="group rounded-2xl border border-white/8 bg-ink-2 p-7 hover:border-gold/30 hover:shadow-gold-sm transition-all"
            >
              <Mail size={20} className="text-gold mb-4" />
              <div className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-2">
                Email
              </div>
              <div className="text-foam break-all group-hover:text-gold-light transition-colors">
                {email}
              </div>
            </a>

            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/8 bg-ink-2 p-7 hover:border-gold/30 hover:shadow-gold-sm transition-all"
            >
              <MessageCircle size={20} className="text-gold mb-4" />
              <div className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-2">
                WhatsApp
              </div>
              <div className="text-foam group-hover:text-gold-light transition-colors">
                Message us on WhatsApp
              </div>
            </a>
          </div>

          {/* Offices */}
          {offices.map((office) => (
            <div
              key={office.label}
              className="rounded-2xl border border-white/8 bg-ink-2 p-7"
            >
              <h2 className="font-display font-semibold text-xl text-foam mb-5">
                {office.label}
              </h2>
              <ul className="flex flex-col gap-4 text-sm text-slate">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
                  <span>{office.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 hover:text-foam transition-colors"
                  >
                    <Phone size={16} className="mt-0.5 text-gold flex-shrink-0" />
                    <span>{office.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-gold flex-shrink-0" />
                  <span>{office.hours}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
