import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './ServicesList';

export default function Services() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Innovative</span>
            <span className="text-white"> Digital Marketing Services</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            While we offer fixed service packages, we are flexible and adaptable, providing innovative digital marketing solutions tailored to your budget, whether it's higher or lower.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}