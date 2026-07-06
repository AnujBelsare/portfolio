"use client";

import { useRef, useState } from "react";
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
  category: "Internship" | "Freelance" | "AI Project" | "Design & Frontend" | "AI Product";
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Hotel Management System",
    context: "TVM IT Solution — Remote",
    date: "FEB — MAR 2026",
    category: "Internship",
    shortDesc:
      "Full-stack hotel operations platform with QR menus, real-time ordering, and kitchen workflow management.",
    fullDesc:
      "Developed a comprehensive hotel management platform that streamlined restaurant operations through QR-based digital menus, live order tracking, and dedicated kitchen dashboards. Built a responsive React frontend backed by a Node.js and Express API, with Supabase handling data management and Cloudinary powering media storage. The system improved order accuracy, reduced manual coordination, and delivered a seamless experience for both staff and customers.",
    skills: ["React.js", "Node.js", "Express.js", "Supabase", "Cloudinary"],
    image: "/projects/hotelM.webp",
    // projectLink: "https://example.com",
  },

  {
    title: "Hueborn E-Commerce Platform",
    context: "Hueborn — Internship",
    date: "OCT — DEC 2025",
    category: "Internship",
    shortDesc:
      "Production-ready e-commerce platform featuring secure authentication, server-side rendering, and scalable order management.",

    fullDesc:
      "Developed a modern e-commerce platform focused on performance, scalability, and user experience. Built with Next.js and TypeScript, the application leveraged Server-Side Rendering (SSR) to improve page speed and SEO. Implemented secure authentication using NextAuth with both OAuth and credential-based login flows, while designing scalable MongoDB schemas for products, user accounts, carts, and order management. The platform delivered a seamless shopping experience across desktop and mobile devices.",

    skills: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "MongoDB", "SSR"],

    image: "/projects/hueborn.webp",
    projectLink: "https://hueborn.in"
  },

  {
    title: "Kota Rankers Institute Website",
    context: "Kota Rankers, Warud — Freelance",
    date: "2026",
    category: "Freelance",
    shortDesc:
      "Professional coaching institute website focused on admissions, course visibility, and student engagement.",
    fullDesc:
      "Designed and developed a modern web presence for Kota Rankers, a coaching institute based in Warud. The platform was built to improve online visibility, showcase academic programs, highlight achievements, and simplify student inquiries. Emphasis was placed on responsive design, clear information architecture, and an intuitive user experience that helps parents and students quickly access essential information.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
    image: "/projects/kotarankers.webp",
    projectLink: "https://kotarankers.in"
  },

  {
    title: "MediaFXI Agency Website",
    context: "MediaFXI — Freelance",
    date: "2026",
    category: "Freelance",
    shortDesc:
      "Portfolio and business website for a digital marketing agency to showcase services and client work.",
    fullDesc:
      "Built a professional marketing website for MediaFXI, a digital marketing and content management agency. The platform was designed to effectively present the agency's services, portfolio, client success stories, and brand identity. Special attention was given to visual storytelling, modern UI design, and conversion-focused layouts that help generate leads and establish credibility.",
    skills: ["Next.js", "React.js", "Tailwind CSS", "UI/UX Design"],
    image: "/projects/mediafxi.webp",
    projectLink: "https://mediafxi.in"
  },

  {
    title: "Codzy AI",
    context: "Academic Project",
    date: "2026",
    category: "AI Project",
    shortDesc:
      "AI-powered website generation platform that transforms form inputs into complete web applications.",
    fullDesc:
      "Developed an AI-assisted web generation platform that enables users to create websites by simply filling out structured forms. The system leverages intelligent workflows to convert business requirements into functional website layouts, reducing development time and simplifying the website creation process for non-technical users. The project explored practical applications of AI agents in modern web development.",
    skills: ["AI Agents", "React.js", "Node.js", "LLMs", "Automation"],
    image: "/projects/codzyai.webp",
    projectLink: "https://codzy-agent.vercel.app/"
  },

  {
    title: "Aqua Humanizer",
    context: "Independent Project",
    date: "Ongoing",
    category: "AI Product",
    shortDesc:
      "AI text humanization platform focused on improving readability and natural language quality.",
    fullDesc:
      "Currently developing an AI-powered text humanization tool that transforms machine-generated content into more natural, engaging, and human-like writing. The project focuses on enhancing readability, tone consistency, and content quality while experimenting with advanced prompt engineering and language processing techniques. Development is ongoing with continuous improvements being made to output quality and user experience.",
    skills: ["AI", "NLP", "Prompt Engineering", "React.js"],
    image: "/projects/aqua-human.webp",
    projectLink: "https://aqua-humanizer.aquilastudios.in/"
  },

  {
    title: "Frontend Redesign Showcase",
    context: "Personal Project",
    date: "2026",
    category: "Design & Frontend",
    shortDesc:
      "Modern website redesign created to demonstrate advanced frontend development and UI design skills.",
    fullDesc:
      "A design-focused project built to showcase frontend craftsmanship, animation techniques, and modern user interface principles. The redesign emphasizes visual hierarchy, responsive layouts, smooth interactions, and polished user experiences while exploring contemporary web design trends and performance-focused implementation strategies.",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "UI/UX Design",
    ],
    image: "/projects/redesigned.webp",
    projectLink: "https://web-studio-orcin.vercel.app/"
  },
];

// Alternating rotations applied as cards get buried by the next one scrolling in
const BURIED_ROTATIONS = [5, -5, 5, -5];

// ─── Card content (needs local state for expand/collapse) ────────────────────

function CardContent({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
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

      {/* Short desc — always visible */}
      <p className="section-body mb-3 max-w-xl sm:mb-4">{project.shortDesc}</p>

      {/* Full desc — collapsible */}
      {expanded && (
        <p className="mb-4 max-w-xl text-xs font-light leading-relaxed text-neutral-500 sm:mb-5 sm:text-sm">
          {project.fullDesc}
        </p>
      )}

      {/* Read more / less toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mb-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600 transition-colors hover:text-neutral-400"
      >
        {expanded ? "↑ less" : "↓ more"}
      </button>

      {/* Skills — always visible */}
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

      {/* Link — always visible */}
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
  );
}

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
      <div ref={containerRef} className="mb-4">
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
              <div className="relative w-full aspect-video bg-[#141414]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 640px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1c1c1c] via-[#1c1c1c]/10 to-transparent" />
              </div>

              {/* Content */}
              <CardContent project={project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
