import React from 'react'
import Divider from './Divider'

function Work() {
    // Demo data matching image_2a7f3b.png
    const workData = [
        {
            title: "Software Developer Intern",
            company: "TVM IT SOLUTION — REMOTE",
            date: "JAN — MAY 2026",

            descPoints: [
                "architected and deployed a production node.js/express.js backend for tvmitsolution.com, consolidating rest endpoints and improving api reliability.",
                "delivered a full-stack hotel management system with qr-code digital menus and real-time ordering using react.js, supabase, and cloudinary.",
                "engineered restful apis for a hospital erp (records, scheduling, billing) and built an electron.js admin dashboard for  non-technical staff."
            ]
        },

        {
            title: "Frontend Developer Intern",
            company: "HUEBORN — REMOTE",
            date: "OCT — DEC 2025",
            descPoints: [
                "built a mobile-first e-commerce platform using next.js, typescript, and tailwind css with ssr for fast load times and improved seo rankings.",
                "implemented nextauth.js (oauth + credentials) and designed a scalable mongodb schema for products, user profiles, and order history."
            ]
        }
    ];

    return (
        <section>
            {/* Header Section */}
            <div className="section-header">
                <span className="section-label">
                    Work
                </span>
                <h4 className="section-title">
                    Experience
                </h4>
            </div>

            {/* Work Items List */}
            <div className="flex flex-col gap-10 sm:gap-12">
                {workData.map((w, id) => (
                    <React.Fragment key={id}>
                        <div className="flex flex-col">
                            {/* Title and Meta Info Container */}
                            <div className="mb-4 sm:mb-5">
                                {/* Internship Title */}
                                <h3 className="mb-2 text-xl font-serif font-light tracking-wide text-neutral-200 sm:text-2xl md:text-3xl">
                                    {w.title}
                                </h3>

                                {/* Company and Date Row */}
                                <div className="flex flex-col gap-1 font-mono text-xs tracking-wider sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                                    <span className="text-[#ffdf2a]">{w.company}</span>
                                    <span className="text-neutral-400 uppercase">{w.date}</span>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div className="section-body max-w-2xl space-y-3 sm:space-y-4">
                                {w.descPoints.map((point, index) => (
                                    <p key={index}>{point}</p>
                                ))}
                            </div>
                        </div>

                        {id < workData.length - 1 && (
                            <hr className="w-full border-t border-zinc-600" />
                        )}
                    </React.Fragment>
                ))}
            </div>

        </section>
    )
}

export default Work