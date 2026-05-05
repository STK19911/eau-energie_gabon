"use client";
import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/cinematic/HeroSlider";
import StatsBar from "@/components/cinematic/StatsBar";
import MissionSection from "@/components/cinematic/MissionSection";
import ProjectsSection from "@/components/cinematic/ProjectsSection";
import MinisterWord from "@/components/cinematic/MinisterWord";
import NewsSection from "@/components/cinematic/NewsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    // Remplacement de bg-[#0A0B0A] par bg-slate-50
    <main className="relative min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <section className="h-screen w-full">
        <HeroSlider />
      </section>
      <StatsBar />
      <MissionSection />
      <ProjectsSection />
      <MinisterWord />
      <NewsSection />
      <Footer />
    </main>
  );
}