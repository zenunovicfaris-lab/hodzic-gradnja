"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Handshake, HardHat } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Kvalitetna izvedba",
    desc: "Koristimo vrhunske materijale i provjerene tehnike gradnje na svakom projektu.",
  },
  {
    icon: Clock,
    title: "Poštovanje rokova",
    desc: "Završavamo radove u dogovorenom roku, bez iznenađenja i kašnjenja.",
  },
  {
    icon: Handshake,
    title: "Povjerenje i sigurnost",
    desc: "Svaki projekat tretiramo kao vlastiti dom — s punom odgovornošću i pažnjom.",
  },
  {
    icon: HardHat,
    title: "Stručan tim",
    desc: "Iskusni majstori sa dugogodišnjim iskustvom u svim granama građevinarstva.",
  },
];

export default function ZastoMi() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="zasto-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block bg-[#F5A300] text-[#111111] text-xs font-black uppercase tracking-widest px-3 py-1.5 mb-4 rounded-sm">
            Zašto Hodžić Gradnja
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#111111] leading-tight mb-4">
            Iskustvo i kvalitet koji traju
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Više od godinu dana pouzdane gradnje na području Srebrenika i okoline.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="flex flex-col gap-3 p-6 border border-gray-100 rounded-sm hover:border-[#F5A300]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#F5A300]/10 rounded-sm flex items-center justify-center">
                  <f.icon size={20} className="text-[#F5A300]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-[#111111] text-base">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#111111] rounded-sm p-10 lg:p-14 flex flex-col items-center justify-center text-center gap-6"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-8xl font-black text-[#F5A300] leading-none">100%</span>
              <span className="text-white text-xl font-bold mt-2">Posvećenost svakom projektu</span>
            </div>

            <div className="w-12 h-0.5 bg-[#F5A300]/40 rounded-full" />

            <p className="text-white/60 text-sm leading-relaxed">
              Radovi se izvode na području Srebrenika i okoline — lokalno, pouzdano, na vrijeme.
            </p>

            <div className="mt-2 border border-[#F5A300]/30 rounded-sm p-4 w-full">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Pozovite nas</p>
              <a
                href="tel:+38761249069"
                className="text-[#F5A300] text-2xl font-black hover:text-yellow-400 transition-colors"
              >
                061 249 069
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
