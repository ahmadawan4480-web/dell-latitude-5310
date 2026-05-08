"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import PerformanceSection from "@/components/PerformanceSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

const ShowcaseSection = dynamic(() => import("@/components/ShowcaseSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Main content */}
      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <SpecificationsSection />
        <PerformanceSection />
        <ShowcaseSection />
        <GallerySection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
