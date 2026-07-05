import React from 'react'
import { Download } from 'lucide-react'


function Navbar() {
    return (
        <nav className="w-full pt-4 sm:pt-6">
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl sm:text-2xl">Anuj Belsare</h1>

                <div className='w-10 h-10 flex items-center justify-center rounded-full border 
                    border-[#FFEA59] bg-[#ffe95917] text-[#FFEA59]'
                >
                    <Download size={18} strokeWidth={2} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar