"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#737373] text-sm mb-8 font-mono">Contact</p>
          
          <p className="text-[#a3a3a3] mb-4 leading-relaxed text-xl">
            Feel free to reach out to me!
          </p>
          
          <a 
            href="mailto:vitorw.okada@gmail.com" 
            className="text-[#ededed] hover:text-[#a3a3a3] transition-colors text-lg"
          >
            vitorw.okada@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
