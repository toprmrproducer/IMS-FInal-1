import React from 'react';
import { Brain, BarChart3, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Campaigns',
    description: 'Automate and optimize marketing strategies using advanced AI technology for unprecedented results'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track and measure performance with sophisticated analytics tools for data-driven decisions'
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored marketing strategies designed to maximize your ROI and achieve business goals'
  }
];

export default function Features() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300 hover-scale"
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-[#FF0000] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}