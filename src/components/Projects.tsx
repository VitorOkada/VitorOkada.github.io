"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Gun Game",
    description: "I created a Gun Game mode in UEFN Fornite where players cycle through different weapons as they get kills. I used Direct Event Binding to connect Elimination Managers with Item Granters so each player would instantly swap weapons after getting a kill. To create the game loop, I used devices like the End Game and Score Manager.",
    tech: ["UEFN", "Unreal Engine", "Game Design"],
    link: "#",
    github: "#",
    video: null,
    image: "/images/projects/Gun Game Picture.png",
  },
  {
    name: "Sleddy",
    description: "I led a team of developers and artists to build Sleddy for LMC 2410 Intro to Game Studies. It is a 2D Unity Game where you play as a snowboarder and dodge obstacles as you make your way through the different levels. I worked on creating the shop system where players can buy new skins, level selection menu, and the fundamental movement and collision mechanics.",
    tech: ["Unity", "C#", "Git", "GitHub"],
    link: "#",
    github: "https://github.com/VitorOkada/LMC2410Final",
    video: "/images/projects/SleddyVideo.mp4",
  },
  {
    name: "Summer Memories - VRChat",
    description: "I really enjoy the immersive experience you can get from Virtual Reality so I wanted to try making my own world. I created my own personal room in VR Chat, decorated using custom Blender assets and environments that reflected my own interests. This was a great introduction for me into the world of 3D modeling",
    tech: ["Unity", "C#", "Blender", "VRChat"],
    link: "#",
    github: "#",
    video: null,
    image: "/images/projects/VR_CHAT picture.png",
  },
  {
    name: "Sonic Fan Game",
    description: "I developed a custom Sonic fangame using a GBA emulator, programming movement physics, collision detection, and level progression in C for CS 2261 Media Device Architecture. You play as Tails, making your way through many obstacles and collecting coins along the way. I had to work under 256 KB VRAM hardware constraints.",
    tech: ["C", "GBA Emulator", "Game Development"],
    link: "#",
    github: "#",
    video: "/images/projects/GBAGame Video.mp4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#737373] text-sm mb-8 font-mono">Projects</p>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-[#262626] pb-8 last:border-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-medium text-[#ededed]">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#737373] hover:text-[#023047] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#737373] hover:text-[#023047] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full aspect-video bg-[#171717] rounded-lg mb-4 overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>

                <p className="text-[#a3a3a3] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#ededed] bg-[#023047] px-2 py-1 rounded"
                    >
                      {tech}
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
