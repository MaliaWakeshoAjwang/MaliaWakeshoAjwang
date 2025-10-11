'use client';

import { useRef } from 'react';

interface CarouselProps {
  items: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }[];
}

export default function Carousel({ items }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const offset = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div ref={carouselRef} className="carousel w-full overflow-x-auto flex rounded-md mb-2">
        {items.map((item, index) => (
          <div key={index} className="carousel-item flex-none w-full h-64">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={item.src}
              />
            )}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-black/50 text-white p-2 rounded-full"
            onClick={() => scroll('left')}
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <button
            className="bg-black/50 text-white p-2 rounded-full"
            onClick={() => scroll('right')}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      )}
    </div>
  );
}