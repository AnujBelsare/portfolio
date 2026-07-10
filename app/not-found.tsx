import Link from "next/link";
import { Home } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center space-y-6 py-8 md:space-y-8">
      {/* Hero */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#FFEA59]/15 bg-[#FFEA59]/6 sm:h-23 sm:w-23 md:h-34.25 md:w-34.25">
          <span className="font-serif text-3xl italic text-[#FFEA59] sm:text-4xl md:text-5xl">
            404
          </span>
        </div>
        <div>
          <h1 className="section-title">
            Well, this is awkward 👀
            <br />
            This page doesn&apos;t <em>exist</em>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-xl">
        <p className="text-base font-light leading-relaxed tracking-[-0.02em] text-neutral-400 md:text-lg">
          The route you&apos;re looking for got refactored out of existence,
          redirected into the void, or never made it past the planning
          stage. Either way, there&apos;s nothing to render here.
        </p>
      </div>

      {/* Terminal */}
      <div className="max-w-md rounded-lg border border-white/10 bg-white/3 p-4 font-mono text-xs sm:text-sm">
        <p className="text-neutral-500">
          $ curl -I anujbelsare.online/this-page
        </p>
        <p className="mt-1 text-white">HTTP/1.1 404 Not Found</p>
        <p className="mt-1 text-[#ffdf2aae]">// this page ghosted you</p>
      </div>

      {/* Actions */}
      <div className="flex flex-row items-center justify-between gap-4 sm:flex-wrap">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFEA59] px-4 py-2 font-medium text-[#161616] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fce130]"
        >
          <Home size={18} />
          Take Me Home
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/AnujBelsare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            <SiGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/anuj-belsare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            <LinkedInIcon size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}