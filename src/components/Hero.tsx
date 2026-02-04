"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-8 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Vitor Waga Okada
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
