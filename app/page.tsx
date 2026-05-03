import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Usluge from "@/components/Usluge";
import Projekti from "@/components/Projekti";
import ZastoMi from "@/components/ZastoMi";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Usluge />
      <Projekti />
      <ZastoMi />
      <Kontakt />
      <Footer />
    </main>
  );
}
