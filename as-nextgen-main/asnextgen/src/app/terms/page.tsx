import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the AS NEXTGEN Pvt Ltd website.",
};

const updated = "October 2026";

export default function TermsPage() {
  const { email } = company.contact;

  return (
    <section className="pt-40 pb-24 px-6">
      <article className="max-w-3xl mx-auto text-slate leading-relaxed [&_h2]:font-display [&_h2]:text-foam [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4">
        <h1 className="font-display font-bold text-4xl text-foam mb-2">Terms of Service</h1>
        <p className="text-slate-dim text-sm mb-10">Last updated: {updated}</p>

        <p>
          By using this website you agree to these terms. If you do not agree, please do not use
          the site.
        </p>

        <h2>Use of the site</h2>
        <p>
          The content on this site is provided for general information about {company.name} and
          its services. You may browse and share links to it, but you may not misuse the site,
          attempt to disrupt it, or copy our content or branding for commercial purposes without
          permission.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The {company.shortName} name, logo, text, design and code on this site belong to{" "}
          {company.name} or its licensors unless stated otherwise.
        </p>

        <h2>No warranty</h2>
        <p>
          The site is provided &ldquo;as is&rdquo;. We try to keep information accurate and
          current, including project status and open roles, but we make no guarantees, and
          listings on the site are not offers of employment or contract.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, we are not liable for losses arising from your use of
          this site or from third-party sites linked from it.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms from time to time; the date above shows the latest revision.</p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a className="text-gold hover:text-gold-light" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
