'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Little Great Minds",
    description: "A web app for a local tutoring business",
    longDescription: 'A web app for a local tutoring business that allows users to check the school schedule and syllabus.',
    tech: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
    liveUrl: "https://littlegreatminds.netlify.app/",
    githubUrl: "https://github.com/R1c4ar6/great-little-minds-react",
    imageUrl: "/assets/project-one-prev.webp",
    features: [
      'Responsive design for all devices',
      'Translations for English and Spanish',
      'Images change based on the language'

    ],
    challenges: [
      'Creating easy/family friendly design for parents and kids',
      'Creating several translation files',
    ]
  },
  {
    id: 2,
    title: "Argenta Jewelery Shop",
    description: "An e-commerce webpage for a local jewelry business.",
    longDescription: 'An e-commerce webpage for a local jewelry business.',
    tech: ["Wordpress", "PHP", "MySQL"],
    liveUrl: "https://argentashop.free.nf/",
    githubUrl: "https://github.com",
    imageUrl: "/assets/project-two-prev.webp",
    features: [
      'Product visualization (lots of zoom)',
      'Comments and discussions',
      'Proper payment system',
    ],
    challenges: [
      'Creating a e-commerce webpage',
      'Implementing real-time synchronization',
      'Adding a translation button for all the content',
      'Learning wordpress'
    ]
  },
  {
    id: 3,
    title: "Villa Marilú",
    description: "A webpage for a local restaurant in Panama",
    longDescription: 'Website for a local restaurant in "La Guaca", Los Santos, Panama.',
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://restaurante-villa-marilu.vercel.app/",
    githubUrl: "https://github.com/R1c4ar6/villa_marilu_clean",
    imageUrl: "/assets/project-five-prev.webp",
    features: [
      'AI genetared dishes',
      'Mobile-responsive design'
    ],
    challenges: [
      'Creating responsive visualizations for said AI generated images',
      'Learning tailwind'
    ]
  }
];

export default function ProjectGallery() {

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development practices and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex gap-4">
                    <a
                      href={`/projects/${project.id}`}
                      className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                    >
                      View Details
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>


              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
