import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";
import Divider from "./components/Divider";

function Page() {
  return (
    <section>
      <Navbar />

      <section className="mt-12 md:mt-20 space-y-6 md:space-y-8">
        {/* Hero */}
        <div className="flex gap-5 items-center sm:gap-8">
          <div className="relative h-23 w-23 overflow-hidden rounded-xl md:h-34.25 md:w-34.25">
            <Image
              src="/giphy.gif"
              alt="Anuj Belsare"
              fill
              priority
              className="object-cover"
              sizes="137px"
            />
          </div>

          <div>
            <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-5xl">
              Hi there 👋
              <br />
              I&apos;m{" "}
              <em className="underline decoration-wavy underline-offset-4">
                Anuj Belsare
              </em>
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-xl">
          <p className="text-base leading-tight tracking-[-0.02em] text-neutral-300 md:text-lg">
            I build high-performance web experiences that feel effortless to
            use, combining thoughtful design, scalable architecture, and
            meticulous attention to detail—from backend systems to
            pixel-perfect interfaces.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFEA59] px-4 py-2 font-medium text-[#161616] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fce130]"
          >
            <SendHorizontal size={18} />
            Get in Touch
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="text-neutral-400 transition-colors hover:text-white"
            >
              <SiGithub size={24} />
            </Link>

            <Link
              href="https://linkedin.com/in/anuj-belsare"
              target="_blank"
              className="text-neutral-400 transition-colors hover:text-white"
            >
              <SiLinkedin size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Divider />
    </section>
  );
}

export default Page;