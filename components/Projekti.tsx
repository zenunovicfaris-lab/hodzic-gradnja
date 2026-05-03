"use client";

import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projekti, categories, type FilterCategory } from "@/lib/projekti-data";

export default function Projekti() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Sve");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = useMemo(
    () =>
      activeCategory === "Sve"
        ? projekti
        : projekti.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i !== null ? Math.min(i + 1, projekti.length - 1) : null));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i !== null ? Math.max(i - 1, 0) : null));
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="projekti" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-[#F5A300] text-[#111111] text-xs font-black uppercase tracking-widest px-3 py-1.5 mb-4 rounded-sm">
            Naši radovi
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Projekti koji govore za sebe
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
            Svaki završen projekat je potvrda naše pouzdanosti.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#F5A300] text-[#111111]"
                  : "border border-white/20 text-white/70 hover:border-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => {
              const globalIndex = projekti.indexOf(img);
              return (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square cursor-pointer overflow-hidden group rounded-sm"
                  onClick={() => setLightboxIndex(globalIndex)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#F5A300]/0 group-hover:bg-[#F5A300]/70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-[#111111] font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Pogledaj
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm z-10">
              {lightboxIndex + 1} / {projekti.length}
            </div>

            {/* Prev Arrow */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i !== null ? i - 1 : null));
                }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Next Arrow */}
            {lightboxIndex < projekti.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i !== null ? i + 1 : null));
                }}
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[85vh] mx-16 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projekti[lightboxIndex].src}
                alt={projekti[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Category Tag */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest">
              {projekti[lightboxIndex].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
