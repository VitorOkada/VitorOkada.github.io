"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C#", "C++", "Java", "Lua", "Python", "C", "Swift"],
  },
  {
    category: "Game Engines",
    skills: ["Unity", "Unreal Engine", "Roblox Studio", "UEFN"],
  },
  {
    category: "Tools & Software",
    skills: ["Blender", "XCode", "Android Studio", "Git", "GitHub", "Visual Studio", "Visual Studio Code"],
  },
  {
    category: "Concepts",
    skills: ["Game Design", "Computer Graphics", "AI", "Object-Oriented Programming", "Data Structures"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#737373] text-sm mb-8 font-mono">Skills</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-medium text-[#ededed] mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[#a3a3a3] bg-[#171717] px-3 py-1.5 rounded-md hover:bg-[#262626] transition-colors cursor-default"
                    >
                      {skill}
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
