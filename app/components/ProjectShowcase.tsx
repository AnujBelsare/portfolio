"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  title: string;
  context: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
  image: string;
  projectLink?: string;
  category: "Internship" | "Freelance";
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Hotel Management System",
    context: "TVM IT Solution — Remote",
    date: "FEB — MAR 2026",
    category: "Internship",
    shortDesc:
      "Full-stack platform with QR-code digital menus, real-time ordering, and kitchen dashboards.",
    fullDesc:
      "Built a full-stack hotel management system featuring qr-code digital menus, real-time ordering, and kitchen dashboards. Integrated cloudinary for media uploads and supabase for the database layer, with a react.js frontend served over a node.js/express.js api.",
    skills: ["React.js", "Node.js", "Express.js", "Supabase", "Cloudinary"],
    image: "/projects/hotel.webp",
    projectLink: "https://example.com",
  },
  {
    title: "Hospital ERP",
    context: "TVM IT Solution — Remote",
    date: "MAR — MAY 2026",
    category: "Internship",
    shortDesc:
      "RESTful ERP covering patient records, appointment scheduling, and billing workflows.",
    fullDesc:
      "Engineered restful apis for a hospital erp system handling patient records, scheduling, and billing workflows. Delivered an electron.js admin dashboard designed for non-technical staff with a guided ui and offline support.",
    skills: ["Node.js", "Express.js", "Electron.js", "REST API"],
    image: "/projects/hospital.webp",
  },
  {
    title: "E-Commerce Platform",
    context: "Hueborn — Remote",
    date: "OCT — DEC 2025",
    category: "Internship",
    shortDesc:
      "Mobile-first e-commerce site with SSR, OAuth, and a scalable order management system.",
    fullDesc:
      "Built a mobile-first e-commerce platform with next.js and typescript, leveraging ssr for fast initial loads and improved seo. Implemented nextauth.js supporting both oauth and credentials flows, and designed a scalable mongodb schema for products, user profiles, and order history.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "MongoDB"],
    image: "/projects/ecommerce.webp",
    projectLink: "https://example.com",
  },
  {
    title: "tvmitsolution.com Backend",
    context: "TVM IT Solution — Remote",
    date: "JAN 2026",
    category: "Freelance",
    shortDesc:
      "Production Node.js/Express.js backend consolidating REST endpoints for the company website.",
    fullDesc:
      "Architected and deployed a production node.js/express.js backend for tvmitsolution.com, consolidating rest endpoints and improving api reliability. Structured the api layer for maintainability and future scaling.",
    skills: ["Node.js", "Express.js", "REST API"],
    image: "/projects/tvmit.webp",
  },
];

// Alternating rotations applied as cards get buried by the next one scrolling in
const BURIED_ROTATIONS = [5, -5, 5, -5];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".proj-card");

      cards.forEach((card, index) => {
        // Last card has nothing scrolling over it — leave it as-is
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const buryRotation = BURIED_ROTATIONS[index % BURIED_ROTATIONS.length];

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: nextCard,
          end: "top top",
          scrub: true,
          onUpdate(self) {
            const p = self.progress;
            gsap.set(card, {
              scale: 1 - p * 0.08,
              rotation: buryRotation * p,
              opacity: 1 - p * 0.35,
              transformOrigin: "center bottom",
            });
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section>
      {/* Section header */}
      <div className="section-header">
        <span className="section-label">Work</span>
        <h4 className="section-title">Projects</h4>
      </div>

      {/* Stack container — each card is sticky top-0 */}
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="proj-card sticky top-0 flex items-start justify-center pt-6"
            // Give each card a scroll-height so the next card has room to push in
            style={{ minHeight: "100vh" }}
          >
            {/* Card */}
            <div
              className="relative w-full max-w-2xl rounded-2xl border border-[#2a2a2a] bg-[#1c1c1c] overflow-hidden"
              style={{
                boxShadow:
                  "0 12px 48px 0 rgba(0,0,0,0.6), 0 1px 0 0 rgba(255,255,255,0.05) inset",
              }}
            >
              {/* Category badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="rounded-full border border-[#333] bg-[#161616]/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-neutral-500 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[16/9] bg-[#141414]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 640px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-5">
                {/* Title + meta */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="mb-1.5 font-serif text-xl font-light tracking-wide text-neutral-100 sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-0.5 font-mono text-xs tracking-wider sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                    <span className="text-[#ffdf2a]">{project.context}</span>
                    <span className="uppercase text-neutral-500">{project.date}</span>
                  </div>
                </div>

                {/* Short desc */}
                <p className="section-body mb-3 max-w-xl sm:mb-4">{project.shortDesc}</p>

                {/* Full desc */}
                <p className="mb-4 max-w-xl text-xs font-light leading-relaxed text-neutral-500 sm:mb-5 sm:text-sm">
                  {project.fullDesc}
                </p>

                {/* Skills */}
                <div className="mb-4 flex flex-wrap gap-2 sm:gap-2.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[#333] bg-[#222] px-3 py-1 text-xs text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#ffdf2aae] transition-colors duration-200 hover:text-[#ffdf2a]"
                  >
                    View Project
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
