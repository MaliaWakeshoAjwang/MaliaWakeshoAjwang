import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const ResumePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Alex Doe - Resume</title>
                <link rel="stylesheet" href="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                <script dangerouslySetInnerHTML={{ __html: `
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                "background-light": "#F3F4F6",
                "background-dark": "#111827",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
};
` }} />
            </Head>
                        <div className="max-w-7xl mx-auto">
                            <header className="mb-12 flex justify-between items-center">
                                <div>
                                    <h1 className="text-5xl md:text-6xl font-display font-bold">My Resume</h1>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A detailed summary of my professional journey and qualifications.</p>
                                </div>
                                <a className="inline-flex items-center px-6 py-3 bg-primary text-black dark:text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors shadow-lg" href="#">
                                    <span className="material-symbols-outlined mr-2"/>
                                    Download PDF
                                </a>
                            </header>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2 space-y-12">
                                    <section>
                                        <h2 className="text-3xl font-display font-bold mb-6 text-primary">Work Experience</h2>
                                        <div className="space-y-8">
                                            <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1.5"></div>
                                                <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                                                <p className="text-md font-medium text-gray-600 dark:text-gray-400">InnovateTech Solutions | Summer 2023</p>
                                                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                                    <li>Developed and maintained features for a large-scale web application using React and Node.js.</li>
                                                    <li>Collaborated with a team of engineers to design and implement RESTful APIs.</li>
                                                    <li>Wrote unit and integration tests to ensure code quality and reliability.</li>
                                                </ul>
                                            </div>
                                            <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1.5"></div>
                                                <h3 className="text-xl font-bold">Web Developer (Freelance)</h3>
                                                <p className="text-md font-medium text-gray-600 dark:text-gray-400">Self-Employed | 2021 - Present</p>
                                                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                                    <li>Designed and built custom websites for small businesses using HTML, CSS, and JavaScript.</li>
                                                    <li>Managed project timelines and client communication to deliver high-quality products.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <h2 className="text-3xl font-display font-bold mb-6 text-primary">Education</h2>
                                        <div className="space-y-8">
                                            <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1.5"></div>
                                                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                                                <p className="text-md font-medium text-gray-600 dark:text-gray-400">State University | 2020 - 2024</p>
                                                <p className="mt-2 text-gray-600 dark:text-gray-400">Minor in Mathematics. GPA: 3.8/4.0</p>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Database Systems.</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="space-y-12">
                                    <section>
                                        <h2 className="text-3xl font-display font-bold mb-6 text-primary">Technical Skills</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">Programming Languages</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">Python</span>
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">JavaScript</span>
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">TypeScript</span>
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">Java</span>
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">SQL</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">Frameworks & Libraries</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700">React</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>        </>
    );
};

export default ResumePage;