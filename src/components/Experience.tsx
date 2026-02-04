"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Georgia Institute of Technology, VGDev",
    role: "Game Developer",
    period: "August 2023 — May 2025",
    description: "Contributed to the development of 4+ Unity projects using C# and Git, collaborating with teams of 30+ artists, UI designers, and programmers. Structured and implemented UI element animations in C# for menu interfaces and health indicators, enhancing player experience and immersion. Designed and integrated 3D background assets in Blender, enriching level design for narrative storytelling and worldbuilding. Projects were showcased as playable demos at DreamHack Atlanta, engaging 500+ players in live playtesting.",
    highlights: ["Unity", "C#", "Blender", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#737373] text-sm mb-8 font-mono">Experience</p>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-[#ededed] group-hover:text-[#a3a3a3] transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-[#a3a3a3] text-sm">{exp.role}</p>
                  </div>
                  <span className="text-[#737373] text-sm font-mono mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-[#a3a3a3] mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-mono text-[#737373] border border-[#262626] px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
}
