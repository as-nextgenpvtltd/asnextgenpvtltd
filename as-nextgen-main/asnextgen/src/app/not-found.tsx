import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
      <div className="text-center max-w-md">
        <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">
          Error 404
        </div>
        <h1 className="font-display font-bold text-5xl text-foam mb-4">Page not found</h1>
        <p className="text-slate mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gold-gradient text-void font-semibold px-6 py-3 text-sm hover:brightness-110 transition-all"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
