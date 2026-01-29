import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: "ReparaSur - Reparación, landing pages y desarrollo web zona sur",
  description:
    "Reparación de PCs y laptops, landing pages, desarrollo web y programación a medida en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada. Soluciones rápidas y con garantía.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
}
