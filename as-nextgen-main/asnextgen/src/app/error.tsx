"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
      <div className="text-center max-w-md">
        <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">
          Something went wrong
        </div>
        <h1 className="font-display font-bold text-4xl text-foam mb-4">
          We hit an unexpected error
        </h1>
        <p className="text-slate mb-8">Please try again, or head back to the home page.</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-gold-gradient text-void font-semibold px-6 py-3 text-sm hover:brightness-110 transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/10 text-foam px-6 py-3 text-sm hover:bg-ink-2 transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
