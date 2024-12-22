import React from 'react';
import Scene from '../components/3d/Scene';
import AboutHero from '../components/about/hero/AboutHero';
import TeamSection from '../components/about/team/TeamSection';
import CultureSection from '../components/about/culture/CultureSection';
import CSRSection from '../components/about/csr/CSRSection';

export default function About() {
  return (
    <div className="relative min-h-screen bg-black">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Partner with Us Section */}
          <AboutHero />
          
          {/* Team Section */}
          <TeamSection />
          
          {/* Culture Section */}
          <CultureSection />
          
          {/* CSR Section */}
          <CSRSection />
        </div>
      </div>
    </div>
  );
}