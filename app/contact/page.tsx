"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Redirect back to home after 2s
      setTimeout(() => router.push("/"), 2000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Back button */}
      <div className="mb-8 sm:mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-neutral-400 transition-colors hover:text-[#ffdf2a]"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="section-label">Contact</span>
        <h1 className="section-title mt-2 sm:mt-2.5">Let's work together</h1>
        <p className="section-body mt-4 max-w-lg">
          Tell me about your project. I usually respond within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-lg space-y-5 sm:space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2.5 font-light text-neutral-100 transition-colors focus:border-[#ffdf2a] focus:outline-none"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2.5 font-light text-neutral-100 transition-colors focus:border-[#ffdf2a] focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2.5 font-light leading-relaxed text-neutral-100 transition-colors focus:border-[#ffdf2a] focus:outline-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Error message */}
        {status === "error" && (
          <p className="rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-2 text-sm text-red-400">
            {errorMsg}
          </p>
        )}

        {/* Success message */}
        {status === "success" && (
          <p className="rounded-lg border border-green-900/50 bg-green-950/20 px-4 py-2 text-sm text-green-400">
            Message sent successfully! Redirecting...
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFEA59] px-5 py-2.5 font-medium text-[#161616] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fce130] disabled:pointer-events-none disabled:opacity-50"
        >
          {status === "sending" ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#161616] border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
}
