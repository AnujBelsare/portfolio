import Link from 'next/link'
import React from 'react'
import Divider from './Divider'

function Footer() {
  return (
    <footer className="pb-4 sm:pb-5">
      <div className="section-header">
        <span className="section-label">
          Contact
        </span>
        <h4 className="section-title text-center">
          Let&apos;s work together
        </h4>
      </div>

      <p className="px-2 text-center text-base font-light leading-relaxed tracking-[-0.02em] text-neutral-400 sm:px-4 md:text-lg">
        Open to full-time roles, freelance projects, and
        interesting collaborations. Drop a message I usually respond within a day.
      </p>

      <div className="mt-6 flex items-center justify-center sm:mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFEA59] px-4 py-2 font-medium text-[#161616] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fce130]"
        >
          Let&apos;s Connect
        </Link>
      </div>

      <Divider className="mt-8 sm:mt-10 mb-4" />

      <div className="flex flex-row gap-3 text-sm text-zinc-500 font-serif items-center justify-between">
        <h6 className="text-xs sm:text-sm">anujbelsare © 2026</h6>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
          <Link href="/" className="transition-colors hover:text-zinc-300">
            linkedin
          </Link>
          <Link href="/" className="transition-colors hover:text-zinc-300">
            +91 7767087937
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
