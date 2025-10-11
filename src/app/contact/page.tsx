'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import './styles.css';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export default function Contact() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/MaliaWakeshoAjwang',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.863 7.92 6.783 9.24.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mazwakes/',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5-.875a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/malia-wakesho-ajwang/',
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      )
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-display font-bold">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          I'm open to new opportunities and collaborations. Let's connect!
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-display font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="name">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="form-input block w-full rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-gray-100 dark:bg-gray-800/50 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="email">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="form-input block w-full rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-gray-100 dark:bg-gray-800/50 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="subject">
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-input block w-full rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-gray-100 dark:bg-gray-800/50 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="message">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input block w-full rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-gray-100 dark:bg-gray-800/50 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center">
            <Image
              src="/images/headshot.jpeg"
              alt="Malia Professional Photo"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full object-cover shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                <a
                  href="mailto:malia.wakeshoajwang@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Click to Email Me
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                <span className="text-gray-600 dark:text-gray-400">London, UK</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Find me on</h2>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}