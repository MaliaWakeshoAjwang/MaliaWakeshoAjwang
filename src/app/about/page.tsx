'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import './styles.css';

interface SkillBar {
  name: string;
  progress: number;
}

interface TimelineItem {
  icon: string;
  date: string;
  title: string;
  description: string;
}

export default function About() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const languages: SkillBar[] = [
    { name: 'Python', progress: 90 },
    { name: 'JavaScript/TypeScript', progress: 85 },
    { name: 'Java', progress: 75 },
  ];

  const frameworks = [
    'React',
    'Node.js',
    'TensorFlow',
    'Tailwind CSS',
    'D3.js',
    'Express.js',
  ];

  const tools = [
    'Git & GitHub',
    'Docker',
    'AWS',
    'Figma',
    'PostgreSQL',
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: 'school',
      date: '2021 - Present',
      title: 'B.S. in Computer Science - State University',
      description: 'Pursuing a comprehensive curriculum with a focus on software engineering, algorithms, and artificial intelligence. Consistently maintaining a high GPA and actively participating in coding clubs.',
    },
    {
      icon: 'work',
      date: 'Summer 2023',
      title: 'Software Engineering Intern - Tech Solutions Inc.',
      description: 'Contributed to the development of a customer-facing web application using React and Node.js. Collaborated with a team of developers in an Agile environment, gaining hands-on experience in the full software development lifecycle.',
    },
    {
      icon: 'code',
      date: '2022 - 2023',
      title: 'Freelance Web Developer',
      description: 'Designed and developed responsive websites for small businesses, focusing on creating clean, modern interfaces and improving user engagement. Managed projects from conception to deployment.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-display font-bold" style={{ fontFamily: 'var(--font-playfair-display)' }}>About Me</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A little bit about my journey and expertise.
        </p>
      </header>

      <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <Image
            src="/images/headshot.jpeg"
            alt="Headshot of Malia Wakesho-Ajwang"
            width={400}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover aspect-square"
          />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-display font-bold mb-4" style={{ fontFamily: 'var(--font-playfair-display)' }}>My Story</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I'm a passionate computer science student with a knack for creating elegant, efficient, and user-friendly digital experiences. My journey into the world of technology began with a fascination for how things work, which quickly evolved into a passion for building software that solves real-world problems.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            From developing full-stack web applications to exploring the depths of machine learning, I am constantly seeking new challenges and opportunities to learn and grow. I thrive in collaborative environments and am driven by the desire to use my skills to make a positive impact.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-display font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6 bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary">Languages</h3>
            <div className="space-y-4">
              {languages.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                    <div
                      className="bg-primary h-2.5 rounded-full skill-bar-fill"
                      style={{ '--progress-width': `${skill.progress}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors cursor-pointer"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors cursor-pointer"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-display font-bold mb-8 text-center">Professional Journey</h2>
        <div className="relative pl-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item relative pb-8">
              <div className="timeline-dot bg-primary text-white">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
              </div>
              <div className="pl-8">
                <p className="text-sm font-medium text-primary">{item.date}</p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}