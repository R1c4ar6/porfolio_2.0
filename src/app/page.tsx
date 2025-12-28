'use client';

import Navigation from '@/components/Navigation';
import ProjectGallery from '@/components/ProjectGallery';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <HeroSection />
      <ProjectGallery />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
