'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const projectData = {
  '1': {
    title: 'Litle Great Minds',
    description: 'A web app for a local tutoring business',
    longDescription: 'A web app for a local tutoring business that allows users to check the school schedule and syllabus.',
    tech: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
    liveUrl: 'https://littlegreatminds.netlify.app/',
    githubUrl: 'https://github.com/R1c4ar6/great-little-minds-react',
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
  '2': {
    title: 'Argenta Jewelery Shop',
    description: 'An e-commerce webpage for a local jewelry business.',
    longDescription: 'An e-commerce webpage for a local jewelry business.',
    tech: ["Wordpress", "PHP", "MySQL"],
    liveUrl: 'https://argentashop.free.nf/',
    githubUrl: 'https://github.com',
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
  '3': {
    title: 'Villa Marilú',
    description: 'A webpage for a local restaurant in Panama',
    longDescription: 'A comprehensive analytics dashboard that provides real-time insights into business metrics. Features customizable widgets, data visualization, reporting tools, and export capabilities.',
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: 'https://restaurante-villa-marilu.vercel.app/',
    githubUrl: 'https://github.com/R1c4ar6/villa_marilu_clean',
    features: [
      'AI genetared dishes',
      'Mobile-responsive design'
    ],
    challenges: [
      'Creating responsive visualizations',
      'Learning tailwind'
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link
            href="/#projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl overflow-hidden mb-8">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 bg-slate-400 dark:bg-slate-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">{project.title[0]}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-center"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
              >
                View Code
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {project.description}
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Challenges & Solutions
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
