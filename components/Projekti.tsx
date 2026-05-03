"use client";

import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Grid2x2 } from "lucide-react";
import { projekti, categories, type FilterCategory } from "@/lib/projekti-data";

const PREVIEW_COUNT = 9;

export default function Projekti() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Sve");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = useMemo(
    () =>
      activeCategory === "Sve"
        ? projekti
        : projekti.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const displayed = showAll ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const hasMore = filtered.length > PREVIEW_COUNT;

  // Reset showAll when category changes
  useEffect(() => setShowAll(false), [activeCategory]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i !== null ? Math.min(i + 1, filtered.length - 1) : null));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i !== null ? Math.max(i - 1, 0) : null));
    },
    [lightboxIndex, filtered.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Featured layout: first image big, rest fill in
  // Pattern: [big, medium, medium] [small, small, small] [medium, medium, big]
  const renderFeaturedGrid = () => {
    const imgs = displayed;
    if (imgs.length === 0) return null;

    return (
      <motion.div layout className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {/* Row 1: 1 big (2/3) + 2 medium stacked (1/3) */}
          {imgs.length >= 1 && (
            <motion.div key="row1" layout className="grid grid-cols-3 gap-3" style={{ height: "420px" }}>
              {/* Big featured */}
              <GalleryCard img={imgs[0]} globalIndex={projekti.indexOf(imgs[0])} className="col-span-2 h-full" onOpen={setLightboxIndex} />
              {/* Two stacked */}
              <div className="flex flex-col gap-3 h-full">
                {imgs[1] && <GalleryCard img={imgs[1]} globalIndex={projekti.indexOf(imgs[1])} className="flex-1" onOpen={setLightboxIndex} />}
                {imgs[2] && <GalleryCard img={imgs[2]} globalIndex={projekti.indexOf(imgs[2])} className="flex-1" onOpen={setLightboxIndex} />}
              </div>
            </motion.div>
          )}

          {/* Row 2: 3 equal */}
          {imgs.length >= 4 && (
            <motion.div key="row2" layout className="grid grid-cols-3 gap-3" style={{ height: "280px" }}>
              {imgs.slice(3, 6).map((img) => (
                <GalleryCard key={img.src} img={img} globalIndex={projekti.indexOf(img)} className="h-full" onOpen={setLightboxIndex} />
              ))}
            </motion.div>
          )}

          {/* Row 3: 2 medium stacked (1/3) + 1 big (2/3) */}
          {imgs.length >= 7 && (
            <motion.div key="row3" layout className="grid grid-cols-3 gap-3" style={{ height: "420px" }}>
              <div className="flex flex-col gap-3 h-full">
                {imgs[6] && <GalleryCard img={imgs[6]} globalIndex={projekti.indexOf(imgs[6])} className="flex-1" onOpen={setLightboxIndex} />}
                {imgs[7] && <GalleryCard img={imgs[7]} globalIndex={projekti.indexOf(imgs[7])} className="flex-1" onOpen={setLightboxIndex} />}
              </div>
              {imgs[8] && <GalleryCard img={imgs[8]} globalIndex={projekti.indexOf(imgs[8])} className="col-span-2 h-full" onOpen={setLightboxIndex} />}
            </motion.div>
          )}

          {/* Extra rows if showAll: simple 3-col grid */}
          {showAll && imgs.length > 9 && (
            <motion.div
              key="extra"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {imgs.slice(9).map((img) => (
                <GalleryCard
                  key={img.src}
                  img={img}
                  globalIndex={projekti.indexOf(img)}
                  className="aspect-square"
                  onOpen={setLightboxIndex}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

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

        {/* Gallery */}
        {renderFeaturedGrid()}

        {/* Show All / Show Less button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-2 border border-white/20 text-white/70 hover:border-[#F5A300] hover:text-[#F5A300] px-8 py-3 text-sm font-semibold rounded-sm transition-all duration-200"
            >
              <Grid2x2 size={16} />
              {showAll
                ? "Prikaži manje"
                : `Pogledaj sve radove (${filtered.length})`}
            </button>
          </motion.div>
        )}
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
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={24} />
            </button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm z-10">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i !== null ? i - 1 : null)); }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {lightboxIndex < filtered.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i !== null ? i + 1 : null)); }}
              >
                <ChevronRight size={28} />
              </button>
            )}

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
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest">
              {filtered[lightboxIndex].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  img,
  globalIndex,
  className,
  onOpen,
}: {
  img: { src: string; alt: string };
  globalIndex: number;
  className?: string;
  onOpen: (index: number) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={`relative cursor-pointer overflow-hidden group rounded-sm ${className}`}
      onClick={() => onOpen(globalIndex)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-[#F5A300]/0 group-hover:bg-[#F5A300]/60 transition-all duration-300 flex items-center justify-center">
        <span className="text-[#111111] font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Pogledaj
        </span>
      </div>
    </motion.div>
  );
}
