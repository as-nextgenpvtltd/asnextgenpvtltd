import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AS NEXTGEN Pvt Ltd handles information on this website.",
};

const updated = "October 2026";

export default function PrivacyPage() {
  const { email } = company.contact;

  return (
    <section className="pt-40 pb-24 px-6">
      <article className="max-w-3xl mx-auto text-slate leading-relaxed [&_h2]:font-display [&_h2]:text-foam [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1.5">
        <h1 className="font-display font-bold text-4xl text-foam mb-2">Privacy Policy</h1>
        <p className="text-slate-dim text-sm mb-10">Last updated: {updated}</p>

        <p>
          This policy explains how {company.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          information in connection with this website.
        </p>

        <h2>Information we collect</h2>
        <p>
          This website does not have user accounts or forms, and we do not intentionally collect
          personal information through it. Like most websites, our hosting provider may
          automatically process technical data such as IP addresses, browser type and request
          logs for security and reliability purposes.
        </p>

        <h2>Information you send us</h2>
        <p>
          If you contact us by email, phone or WhatsApp, or apply for a role or internship, we
          receive the information you choose to send (for example your name, contact details and
          CV). We use it only to respond to you and to evaluate your enquiry or application, and
          we do not sell it.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site links to third-party services such as Instagram, X and WhatsApp. Those
          services have their own privacy practices, which we do not control.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live (including the EU/EEA and India) you may have the right to
          access, correct or delete personal information we hold about you. To exercise these
          rights, contact us at the address below.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a className="text-gold hover:text-gold-light" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
