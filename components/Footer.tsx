import Image from "next/image";
import { brendovi } from "@/lib/projekti-data";

const quickLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "Projekti", href: "#projekti" },
  { label: "O nama", href: "#zasto-mi" },
  { label: "Kontakt", href: "#kontakt" },
];

const usluge = [
  "Betonski radovi",
  "Zidarski i tesarski radovi",
  "Fasaderski radovi",
  "Zemljani radovi",
  "Adaptacije i rekonstrukcije",
  "Kompletan objekat",
];

export default function Footer() {
  return (
    <footer>
      {/* Partners Strip — white background, full colour logos */}
      <div className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-black uppercase tracking-widest text-gray-400 mb-10">
            Naši partneri i brendovi
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {brendovi.map((brand) => (
              <div
                key={brand}
                className="relative h-10 w-24 opacity-60 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
              >
                <Image
                  src={`/brendovi/${brand}.png`}
                  alt={brand}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer — dark */}
      <div className="bg-[#111111] text-white">
        <div className="h-1 bg-[#F5A300]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Column 1: Logo + Info */}
            <div className="flex flex-col gap-5">
              <div className="relative h-28" style={{ width: "22rem" }}>
                <Image
                  src="/logo/logo.png"
                  alt="Hodžić Gradnja"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="text-[#F5A300] font-bold text-sm tracking-wide">
                Pouzdano. Kvalitetno. Na vrijeme.
              </p>
              <div className="text-white/40 text-xs leading-relaxed space-y-1">
                <p>Samostalni preduzetnik HODŽIĆ GRADNJA OR</p>
                <p>vl. Hodžić Sejfudin</p>
                <p>Mehmeda Spahe 7, 75350 Srebrenik</p>
                <p>Registrovana: 16.5.2023.</p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-black text-sm uppercase tracking-widest pb-3 border-b border-white/10">
                Navigacija
              </h4>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#F5A300] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-black text-sm uppercase tracking-widest pb-3 border-b border-white/10">
                Usluge
              </h4>
              <ul className="flex flex-col gap-2">
                {usluge.map((u) => (
                  <li key={u} className="text-white/50 text-sm">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5A300]/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs text-center">
              © 2025 Hodžić Gradnja Srebrenik. Sva prava zadržana.
            </p>
            <p className="text-white/20 text-xs">
              Mehmeda Spahe 7, 75350 Srebrenik, BiH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
