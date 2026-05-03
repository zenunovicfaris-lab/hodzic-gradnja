"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#F5A300] text-[#111111] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm">
            Pouzdano. Kvalitetno. Na vrijeme.
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
            Od temelja do krova —{" "}
            <span className="text-[#F5A300]">sve na jednom</span>{" "}
            <span className="block">mjestu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Izvodimo sve vrste građevinskih radova na području Srebrenika i okoline.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#projekti"
              className="bg-[#F5A300] text-[#111111] font-bold text-sm px-8 py-4 rounded-sm hover:bg-yellow-400 transition-all duration-200 tracking-wide uppercase hover:shadow-[0_0_30px_rgba(245,163,0,0.4)]"
            >
              Pogledajte projekte
            </a>
            <a
              href="tel:+38761249069"
              className="border-2 border-white text-white font-bold text-sm px-8 py-4 rounded-sm hover:bg-white hover:text-[#111111] transition-all duration-200 tracking-wide uppercase"
            >
              Pozovite nas
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
