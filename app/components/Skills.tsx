import React from 'react'

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "C" },
  { name: "HTML5" },
  { name: "CSS" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Express.js" },
  { name: "Postman" },
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
                        className="rounded-lg border border-[#444] bg-[#222] px-3 py-1.5 text-sm text-white sm:px-4 sm:py-2"
                    >
                        {s.name}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills