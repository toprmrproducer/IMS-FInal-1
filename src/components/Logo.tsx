import React from 'react';
import { logo } from '../assets/logo';

export default function Logo() {
  return (
    <div className="hover-scale">
      <img 
        src={logo.main}
        alt="IMS Logo" 
        className="w-16 h-16"
      />
    </div>
  );
}