import React from 'react'

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "C" },
  { name: "HTML 5" },
  { name: "Css" },
  { name: "Tailwind CSS" },
  { name: "NodeJs" },
  { name: "ReactJs" },
  { name: "NextJs" },
  { name: "ExpressJS" },
  { name: "PostMan" },
  { name: "Git" }
];


function Skills() {
    return (
        <section>
            <div className="section-header">
                <span className="section-label">
                    Expertise
                </span>

                <h4 className="section-title">
                    What I work with
                </h4>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((s, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-[#444] bg-[#222] px-3 py-1.5 text-sm text-white sm:px-4 sm:py-2"
                    >
                        {s.name}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills