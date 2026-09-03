import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-soft px-6 text-center">
      <div>
        <p className="eyebrow">404 / Page not found</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-ink">This page doesn&apos;t exist.</h1>
        <p className="mt-4 text-lg text-muted">The link may be outdated, or the page may have moved.</p>
        <Link className="button button-primary mt-8" href="/">Return home</Link>
      </div>
    </main>
  );
}
