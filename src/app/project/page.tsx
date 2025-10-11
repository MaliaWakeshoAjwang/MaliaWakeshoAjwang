'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Machine Learning', 'Mobile App'];
  
  const skills = {
    languages: [
      { name: 'Python', progress: 90 },
      { name: 'JavaScript/TypeScript', progress: 85 },
      { name: 'Java', progress: 75 },
    ],
    frameworks: [
      'React', 'Node.js', 'TensorFlow', 'Tailwind CSS', 'D3.js'
    ],
    tools: [
      'Git & GitHub', 'Docker', 'AWS', 'Figma'
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description: 'A conversational AI built with Python & TensorFlow. Capable of understanding and responding to natural language queries.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAeG7Sk4nLwfZHHysQF1naQL6W5Rxjzx3RdCzqZv1YOE0vQ-2YmQq_Vd1R4eCO47gH-sBHn8Abcwj0-VQSoy6dB6zkUZBV4LSZpbsur3ZCPJPtmaDAIu1RkI6-peGNflSoGHL3f1UbxDPcO-_nER_4uLCHCGARND3qtkhTL7Q26FyzVH74ig3veP57incGFzqyZHo9ZnPbDXvLV4WN4bbJ7WXDfycHoJM9aNYpDdxDGAU75g4iAoHBae2Uf46ZYzAQ7FdJLiRTols',
      category: 'Machine Learning',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, and payment gateway integration.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWPEwMaemO7wAFYA9KN7m34qHrRspBCSomHBiYvhc9aBEmKXqX8XQhRFB7c9QBgjXLXjhtX5pgKslbX2q7zn7lURiMPQTNUyjfLmeqX2REt4JJwoSqabpwa33m4GDHRYjEIDal7mA50oT4wcu6mTMrEpCWbPp7REvUm6aiy7AdtM0kgy-qA7kxu40OOpdIrz1rQYsq6l91_5NLbpf2VrHdCxmXS-hQ4YMJchfv2ZVLY3PxLB3jlGemsUungGjvLVYl8LcCOxS6Yg',
      category: 'Web Development',
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile app to track workouts, set fitness goals, and monitor progress. Built with React Native.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3QZApRZTcb6SHxTFhPjBr6AW8j27hlCiW4yFiSjj0ZAh0pf8zs8ie05oQrCgncUTHGbS9DFHsD5RzEt6yurRc_rHy3K7ssSJPB3KjmnQrRFU86STER-8dit1erS6ofv1Co4rlBR0IGubUmO_kwQ9Y3GdBMVej8WfPg8wnYmzXo7LsaO-Rv7M88bnj-uoo90jTqcxQHpqC6eDVheAUK8Dxz4aMDnSWHj_DbtcvbLCsGaJFqDODfzQMnoGA05F00859_PktWxugl84',
      category: 'Mobile App',
      link: '#'
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets using D3.js, providing insightful analytics.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY5F24tG52bjCifP0jkhEiBgd6xsrN6sUOOG6fN_i9Bux1HjtkWJ5rlNE1hqCVnlbBUmIJxl_lCwuMOG6fN_i9Bux1HjtkWJ5rlNE1hqCVnlbBUmIJxl_lCwuMOBns2iMpKqEDjPx9Y0XGRo1N9k8PLAjKKJptOr-Z8alVo9XEKiMQHgzBDFf98K8HxiN7qGSqLnraTYpc8TgpJZx2aDl2oVPaBqaXncH5kekPgxf0kbNjx5cFSqykAIQ0tLPLfwA5U6W0KGk7TZl8wObfV92gvKxW9pE60fxfk65rNUgOX87oTHm439cAgDM',
      category: 'Web Development',
      link: '#'
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'The very site you are on. A clean, minimalistic portfolio built with HTML, Tailwind CSS, and a touch of JavaScript.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApugU9MOfHR9l7lAx5sr4mBXoMLWnkVqRYfTHlnnQteKyPyKftma1hlCnIOMkvtgrn8-i6ttFkhPGon9DCy0p_cKlwo8YT-3p6baLcHh_j4QS7Dvs51bYfbyXnjLEVE9EEexguiGXTIOAMXNAMofJPxa8vt3ebEYtmHR_uOJzbvKNEVDKYdiBV3SnJ0zqb0klwMkLqmq40RE_OBAqclC0iWjWA_uMhDeJ7JHuui214aXPSmsjMIw-_ju69Z3XKolPHEp6_nbVTxjk',
      category: 'Web Development',
      link: '#'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Showcase Reel Header */}
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Showcase Reel
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A curated selection of my proudest work and key project highlights.
        </p>
      </header>

      {/* Video Player Section */}
      <section className="mb-16">
        <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-lg">
          <img
            alt="Showcase reel video player thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWPEwMaemO7wAFYA9KN7m34qHrRspBCSomHBiYvhc9aBEmKXqX8XQhRFB7c9QBgjXLXjhtX5pgKslbX2q7zn7lURiMPQTNUyjfLmeqX2REt4JJwoSqabpwa33m4GDHRYjEIDal7mA50oT4wcu6mTMrEpCWbPp7REvUm6aiy7AdtM0kgy-qA7kxu40OOpdIrz1rQYsq6l91_5NLbpf2VrHdCxmXS-hQ4YMJchfv2ZVLY3PxLB3jlGemsUungGjvLVYl8LcCOxS6Yg"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          <div>
            <p className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded text-sm">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Key Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-600">Languages</h3>
            <div className="space-y-4">
              {skills.languages.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-out"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-600">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:bg-blue-600/20 dark:hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-600">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:bg-blue-600/20 dark:hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Header */}
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A collection of my work, from web applications to machine learning models.
        </p>
      </header>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap gap-4 items-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-4">Filter by:</p>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:bg-blue-600/20 dark:hover:text-blue-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              alt={`Project thumbnail for ${project.title}`}
              className="w-full h-48 object-cover"
              src={project.image}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-flex items-center mt-4 font-semibold text-blue-600 hover:underline"
              >
                View Project
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}