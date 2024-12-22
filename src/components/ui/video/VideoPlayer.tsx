import React from 'react';

export default function VideoPlayer() {
  return (
    <div className="max-w-[400px] mx-auto">
      <div className="hover-scale aspect-[9/16] bg-gradient-to-br from-black/80 to-[#FF0000]/20 rounded-xl relative overflow-hidden border border-[#FF0000]/20">
        <div style={{ padding: '176.67% 0 0 0', position: 'relative' }}>
          <iframe 
            src="https://player.vimeo.com/video/1041470723?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="IMS Marketing Video"
          />
        </div>
      </div>
    </div>
  );
}