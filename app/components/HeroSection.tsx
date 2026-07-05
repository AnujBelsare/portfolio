import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";

function HeroSection() {
  return (
          <section className="mt-8 space-y-6 sm:mt-10 md:mt-16 md:space-y-8">
        {/* Hero */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-23 sm:w-23 md:h-34.25 md:w-34.25">
            <Image
              src="/pic.webp"
              alt="Anuj Belsare"
              fill
              priority
              className="object-cover"
              sizes="137px"
            />
          </div>

          <div>
            <h1 className="section-title">
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
          <p className="text-base font-light leading-relaxed tracking-[-0.02em] text-neutral-400 md:text-lg">
            I build high-performance web experiences that feel effortless to
            use, combining thoughtful design, scalable architecture, and
            meticulous attention to detail—from backend systems to
            pixel-perfect interfaces.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
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
  )
}

export default HeroSection