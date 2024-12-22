import React from 'react';
import Scene from '../components/3d/Scene';
import AIHero from '../components/ai-kols/AIHero';
import AIFeatures from '../components/ai-kols/AIFeatures';
import KOLCommunity from '../components/ai-kols/KOLCommunity';

export default function AIKols() {
  return (
    <div className="relative min-h-screen bg-black">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIHero />
          <AIFeatures />
          <KOLCommunity />
        </div>
      </div>
    </div>
  );
}