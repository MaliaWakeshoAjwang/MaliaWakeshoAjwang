'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { getProjectBySlug } from '../data';

interface ProjectCarouselProps {
  images: { src: string; alt: string; type?: 'image' | 'video' }[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  useEffect(() => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = carousel?.querySelectorAll('.carousel-item');
    
    if (!carousel || !prevBtn || !nextBtn || !items) return;

    let currentIndex = 0;

    const showItem = (index: number) => {
      items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
          item.classList.add('active');
        }
      });
    };

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    });

    // Initialize first item
    showItem(0);
  }, []);

  return (
    <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-full" id="carousel">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {image.type === 'video' ? (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-5xl">play_arrow</span>
                </button>
              </div>
            ) : null}
            <img
              src={image.src}
              alt={image.alt}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-colors"
        id="prevBtn"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-colors"
        id="nextBtn"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/timeline" className="text-primary hover:underline">
            Return to Timeline
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div id="nav-placeholder"></div>
      <main className="w-3/4 lg:w-4/5 xl:w-5/6 p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 animate-fade-in-up">
            <nav className="mb-6">
              <Link href="/timeline" className="inline-flex items-center text-primary hover:underline">
                <span className="material-symbols-outlined mr-2">arrow_back</span>
                Back to Projects
              </Link>
            </nav>
            <h1 className="text-5xl md:text-6xl font-display font-bold">{project.title}</h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-display font-bold mb-4">Image & Video Showcase</h2>
                <ProjectCarousel images={project.images} />
              </section>

              <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl font-display font-bold mb-4">Project Description</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                  {project.description.map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <aside className="sticky top-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-2xl font-display font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <a
                      href={project.links.demo}
                      className="flex items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors group"
                    >
                      <span className="material-symbols-outlined mr-3">open_in_new</span>
                      <span className="font-medium">Live Demo</span>
                      <span className="ml-auto transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors group"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">GitHub Repository</span>
                      <span className="ml-auto transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}