"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#737373] text-sm mb-8 font-mono">About</p>
          
          <div className="space-y-6 text-[#a3a3a3] leading-relaxed">
            <p className="text-lg text-[#ededed]">
              I&apos;m a Computational Media student at the Georgia Institute of Technology, 
              concentrating in Video Game Development and Media, with a minor in Japanese.
            </p>
            
            <p>
              I’m passionate about working on games of all kinds and enjoy the process of designing, building, and refining interactive experiences.
              I'm currently seeking internship opportunities in Game Development and VR Development, so feel free to reach out!
            </p>
            
            <p>
              In my free time, I obviously enjoy playing video games and I love to travel, specifically to Japan.
            </p>
            
            <a 
              href="/Vitor_WagaOkada_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ededed] hover:text-[#a3a3a3] transition-colors font-mono text-sm border border-[#262626] px-4 py-2 rounded mt-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
