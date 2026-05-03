"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  ToyBrick,
  PaintBucket,
  Shovel,
  Wrench,
  Building2,
} from "lucide-react";

const usluge = [
  {
    icon: Layers,
    title: "Betonski radovi",
    desc: "Potporni zidovi, betonske ploče, betonska cokla za ograde, betonski bazeni, temelji i armirani beton.",
  },
  {
    icon: ToyBrick,
    title: "Zidarski i tesarski radovi",
    desc: "Zidanje, oplata, tesarski radovi — kvalitetna izrada svake konstruktivne faze gradnje.",
  },
  {
    icon: PaintBucket,
    title: "Fasaderski radovi",
    desc: "Toplinska i zvučna izolacija, fasaderski završni radovi, oblaganje stiroporom iznutra i izvana.",
  },
  {
    icon: Shovel,
    title: "Zemljani radovi",
    desc: "Iskopi, priprema terena i planiranje zemljišta za sve vrste gradnje i infrastrukturnih projekata.",
  },
  {
    icon: Wrench,
    title: "Adaptacije i rekonstrukcije",
    desc: "Renovacije, dogradnje, rekonstrukcija postojećih objekata — dajemo im novi život i moderan izgled.",
  },
  {
    icon: Building2,
    title: "Kompletan objekat — od temelja do krova",
    desc: "Preuzimamo cjelokupnu realizaciju gradnje: od temelja, grubih radova, krova do finiševa.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white border border-gray-100 p-8 rounded-sm hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Yellow left border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5A300] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-sm" />

      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 bg-[#F5A300]/10 rounded-sm flex items-center justify-center group-hover:bg-[#F5A300]/20 transition-colors duration-300">
          <Icon size={24} className="text-[#F5A300]" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-bold text-[#111111] leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Usluge() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="usluge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block bg-[#F5A300] text-[#111111] text-xs font-black uppercase tracking-widest px-3 py-1.5 mb-4 rounded-sm">
            Šta nudimo
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#111111] leading-tight mb-4">
            Kompletna građevinska rješenja
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Od ideje do gotovog objekta — pratimo vas kroz svaki korak gradnje.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usluge.map((u, i) => (
            <ServiceCard key={u.title} icon={u.icon} title={u.title} desc={u.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
