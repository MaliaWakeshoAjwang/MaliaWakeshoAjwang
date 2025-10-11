'use client';

import './styles.css';
import { useEffect } from 'react';
import { timelineData } from './data';
import Carousel from './carousel';
import Link from 'next/link';

interface TimelineItemProps {
  icon: string;
  title: string;
  date: string;
  description: string;
  skills?: string[];
  technologies?: string[];
  carouselItems?: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    avatarUrl: string;
  };
  caseStudy?: {
    description: string;
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  icon, 
  title, 
  date, 
  description, 
  skills = [], 
  technologies = [], 
  carouselItems = [],
  testimonial,
  caseStudy
}) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      <span className="material-symbols-outlined text-white text-xs">{icon}</span>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-bold text-primary dark:text-primary-light">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
      
      {carouselItems.length > 0 && <Carousel items={carouselItems} />}
      
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      
      {testimonial && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Client Testimonial</h4>
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 dark:text-gray-400">
            <p>{testimonial.quote}</p>
            <footer className="mt-2 text-sm">
              <div className="flex items-center">
                <img
                  src={testimonial.avatarUrl}
                  alt="Client Company Logo"
                  className="h-8 w-8 mr-2"
                />
                <span>{testimonial.author}</span>
              </div>
            </footer>
          </blockquote>
        </div>
      )}
      
      {caseStudy && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Case Study</h4>
          <div className="bg-gray-50 dark:bg-gray-800/70 p-4 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-400">{caseStudy.description}</p>
            <a className="inline-flex items-center mt-3 font-semibold text-primary text-sm hover:underline" href="#">
              Read Full Case Study <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      )}
      
      {skills.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300">Skills Learned:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      
      {technologies.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300">Technologies:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <Link 
        href={`/project/${title.toLowerCase().replace(/ /g, '-')}`}
        className="inline-flex items-center mt-6 font-semibold text-primary hover:underline"
      >
        View Project <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  </div>
);

export default function Timeline() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="flex min-h-screen">
      <div id="nav-placeholder"></div>
      <main className="w-4/5 lg:w-5/6 xl:w-11/12 ml-auto p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold" style={{ fontFamily: 'var(--font-playfair-display)' }}>Timeline of Growth</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A journey through my development as a software engineer, highlighting key projects and the skills I've gained along the way.
            </p>
          </header>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}