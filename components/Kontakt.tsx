"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const vrsteRadova = [
  "Betonski radovi",
  "Fasaderski radovi",
  "Zidarski/tesarski radovi",
  "Iskopi i zemljani radovi",
  "Adaptacija/rekonstrukcija",
  "Kompletan objekat",
  "Ostalo",
];

export default function Kontakt() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    email: "",
    vrsta: "",
    poruka: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-24 bg-[#f8f8f8]">
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
            Kontaktirajte nas
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#111111] leading-tight mb-4">
            Zatražite besplatnu procjenu
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Javite nam se — doći ćemo na lice mjesta i dati vam ponudu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+38761249069"
                className="flex items-start gap-4 bg-white p-5 rounded-sm border border-gray-100 hover:border-[#F5A300] hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#F5A300]/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A300]/20 transition-colors">
                  <Phone size={18} className="text-[#F5A300]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Sejfo</p>
                  <p className="font-bold text-[#111111]">061 249 069</p>
                </div>
              </a>

              <a
                href="tel:+38761589220"
                className="flex items-start gap-4 bg-white p-5 rounded-sm border border-gray-100 hover:border-[#F5A300] hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#F5A300]/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A300]/20 transition-colors">
                  <Phone size={18} className="text-[#F5A300]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Hajre</p>
                  <p className="font-bold text-[#111111]">061 589 220</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white p-5 rounded-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#F5A300]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#F5A300]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Adresa</p>
                  <p className="font-bold text-[#111111] text-sm">Mehmeda Spahe 7,</p>
                  <p className="font-bold text-[#111111] text-sm">75350 Srebrenik, BiH</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#F5A300]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#F5A300]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Radno vrijeme</p>
                  <p className="font-bold text-[#111111] text-sm">Pon – Sub</p>
                  <p className="text-gray-500 text-sm">07:00 – 18:00</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-sm overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11322.423827282!2d18.479503!3d44.712994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3fe59ad9b1c9%3A0x400ad50861f42b0!2sSrebrenik%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sba!4v1699000000000"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Hodžić Gradnja Srebrenik"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 rounded-sm border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-black text-[#111111] mb-6">Pošaljite upit</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    name="ime"
                    value={formData.ime}
                    onChange={handleChange}
                    placeholder="Vaše ime"
                    required
                    className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#F5A300] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="06X XXX XXX"
                    required
                    className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#F5A300] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Email (opciono)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vasa@email.com"
                  className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#F5A300] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Vrsta radova *
                </label>
                <select
                  name="vrsta"
                  value={formData.vrsta}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#F5A300] transition-colors appearance-none bg-white cursor-pointer"
                >
                  <option value="">Odaberite vrstu radova...</option>
                  {vrsteRadova.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Poruka
                </label>
                <textarea
                  name="poruka"
                  value={formData.poruka}
                  onChange={handleChange}
                  placeholder="Opišite vaš projekat..."
                  rows={4}
                  className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#F5A300] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5A300] text-[#111111] font-black text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-yellow-400 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(245,163,0,0.35)] mt-2"
              >
                Pošaljite upit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
