import React from 'react';
import Button from './ui/Button';
import Scene from './3d/Scene';
import RotatingText from './ui/RotatingText';
import MarketingVideo from './ui/MarketingVideo';
import FounderCard from './founder/FounderCard';

const rotatingPhrases = [
  "Social Media Management",
  "Influencer Marketing & Management",
  "Short-form Video Production",
  "Long-form Video Production",
  "Photography",
  "AI-powered Email Marketing",
  "AI-powered Web Development",
  "AI-powered App Development",
  "Google PPC Ads Management",
  "Social Media Ads",
  "Search Engine Optimization",
  "Business Consultancy"
];

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <Scene />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 min-h-screen flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight leading-tight font-display">
              <span className="text-white">Empower Your Brand with </span>
              <br className="hidden sm:block" />
              <RotatingText 
                phrases={rotatingPhrases}
                interval={3000}
                fadeTime={500}
              />
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
              <Button variant="outline" size="lg">
                Get a Free Consultation
              </Button>
            </div>

            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Revolutionizing how you reach, engage, and convert customers using 
              cutting-edge AI technology
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
              <MarketingVideo />
              <FounderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}