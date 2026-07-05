import React from "react";

const educationData = [
  {
    date: "2022–2026",
    degree: "B.Tech — Electronics and Computer Engineering",
    institution: "Maharashtra Institute Of Technology, Chh. Sambhajinagar",
  },
  {
    date: "2022",
    degree: "XII — Science Stream",
    institution: "Mahatma Fule Jr. College, Warud",
  },
  {
    date: "2020",
    degree: "X — SSC",
    institution: "NTR High School, Warud",
  },
];

function Education() {
  return (
    <section>
      <div className="section-header">
        <span className="section-label">Education</span>
        <h4 className="section-title">Academic background</h4>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {educationData.map((item, id) => (
          <React.Fragment key={id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-8 md:gap-12">
              <span className="shrink-0 font-mono text-sm text-neutral-500 sm:w-24 sm:pt-1">
                {item.date}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-serif font-light tracking-wide text-neutral-200 sm:text-2xl">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm font-light text-neutral-500 sm:mt-2 sm:text-base">
                  {item.institution}
                </p>
              </div>
            </div>

            {id < educationData.length - 1 && (
              <hr className="w-full border-t border-zinc-600" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Education;
