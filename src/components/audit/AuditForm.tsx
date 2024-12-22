import React, { useState } from 'react';
import Button from '../ui/Button';

export default function AuditForm() {
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Website submitted:', website);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-[#FF0000]/20"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Enter your website URL 🌐"
          className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0000]/50 transition-colors"
          required
        />
        <Button type="submit" variant="primary" size="lg" className="whitespace-nowrap">
          Book Audit Call 📞
        </Button>
      </div>
      <p className="text-gray-400 text-sm mt-4 text-center">
        Get expert insights to accelerate your business growth! ⚡
      </p>
    </form>
  );
}