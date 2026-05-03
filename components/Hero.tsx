"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

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
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 max-w-4xl w-full"
        >
          {/* Logo — vidljiv samo na mobileu, iznad badge-a */}
          <motion.div variants={item} className="block md:hidden">
            <div className="relative h-28 w-64">
              <Image
                src="/logo/logo.png"
                alt="Hodžić Gradnja"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Badge with shimmer */}
          <motion.div variants={item}>
            <span className="badge-shimmer inline-flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-sm">
              Pouzdano. Kvalitetno. Na vrijeme.
            </span>
          </motion.div>

          {/* H1 — Brand name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight"
          >
            <span className="text-[#F5A300]">HODŽIĆ</span>{" "}
            <span className="text-white">GRADNJA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/85 tracking-wide"
          >
            Temelj sigurne budućnosti.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <a
              href="#projekti"
              className="bg-[#F5A300] text-[#111111] font-black text-sm px-8 py-4 rounded-sm tracking-wide uppercase transition-all duration-200 hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(245,163,0,0.5)] active:scale-95"
            >
              Pogledajte projekte
            </a>
            <a
              href="tel:+38761249069"
              className="border-2 border-white text-white font-black text-sm px-8 py-4 rounded-sm tracking-wide uppercase transition-all duration-200 hover:bg-white hover:text-[#111111] active:scale-95"
            >
              Pozovite nas
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 scroll-bob"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
