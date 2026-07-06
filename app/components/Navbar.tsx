import React from 'react'
import { Download } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="w-full pt-4 sm:pt-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-xl sm:text-2xl font-serif">Anuj Belsare</Link>

        <a
          href="/Anuj_Belsare_CV.pdf"
          download="Anuj_Belsare_CV.pdf"
          aria-label="Download CV"
          className="w-10 h-10 flex items-center justify-center rounded-full border 
            border-[#FFEA59] bg-[#ffe95917] text-[#FFEA59] transition-colors hover:bg-[#ffe9591f]"
        >
          <Download size={18} strokeWidth={2} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
