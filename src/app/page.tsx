'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showProjectCard, setShowProjectCard] = useState(true);

  const menuItems = [
    { name: 'Projects', href: '/project' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Main Navigation Menu */}
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`menu-item text-6xl md:text-8xl lg:text-9xl font-bold block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-300 hover:translate-x-2 ${
                  index > 0 ? 'mt-4' : ''
                }`}
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Project Card Overlay */}
      {showProjectCard && (
        <div className="absolute top-8 right-8 bg-gray-800 dark:bg-gray-900 text-white p-4 rounded-lg shadow-2xl w-80 flex items-start space-x-4 animate-pulse hover:scale-105 transition-transform duration-300">
          <img
            alt="Project thumbnail"
            className="w-20 h-20 object-cover rounded"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeG7Sk4nLwfZHHysQF1naQL6W5Rxjzx3RdCzqZv1YOE0vQ-2YmQq_Vd1R4eCO47gH-sBHn8Abcwj0-VQSoy6dB6zkUZBV4LSZpbsur3ZCPJPtmaDAIu1RkI6-peGNflSoGHL3f1UbxDPcO-_nER_4uLCHCGARND3qtkhTL7Q26FyzVH74ig3veP57incGFzqyZHo9ZnPbDXvLV4WN4bbJ7WXDfycHoJM9aNYpDdxDGAU75g4iAoHBae2Uf46ZYzAQ7FdJLiRTols"
          />
          <div>
            <p className="text-xs font-semibold text-blue-600">NEW PROJECT</p>
            <h3 className="font-bold mt-1">AI-Powered Chatbot</h3>
            <p className="text-sm mt-1">A conversational AI built with Python & TensorFlow.</p>
            <Link
              href="#"
              className="inline-flex items-center mt-2 text-sm text-blue-600 font-semibold hover:underline"
            >
              View Project <span className="ml-1">→</span>
            </Link>
          </div>
          <button
            onClick={() => setShowProjectCard(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
            aria-label="Close project card"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
