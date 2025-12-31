'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const projectData = {
  '1': {
    title: 'E-Commerce Platform',
    description: 'A web app for a local tutoring business',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, real-time inventory management, and admin dashboard.',
    tech: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
    liveUrl: 'https://littlegreatminds.netlify.app/',
    githubUrl: 'https://github.com',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Real-time inventory management',
      'Admin dashboard for product management',
      'Order tracking and history',
      'Responsive design for all devices'
    ],
    challenges: [
      'Implementing real-time inventory updates',
      'Optimizing payment flow for better conversion',
      'Building scalable admin dashboard',
      'Handling concurrent user sessions'
    ]
  },
  '2': {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    longDescription: 'A powerful task management application designed for teams. Features real-time collaboration, task assignments, progress tracking, file sharing, and team communication tools.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: [
      'Real-time task updates',
      'Team collaboration tools',
      'Task assignment and tracking',
      'File sharing and attachments',
      'Comments and discussions',
      'Progress visualization',
      'Deadline reminders',
      'Mobile-responsive interface'
    ],
    challenges: [
      'Implementing real-time synchronization',
      'Managing concurrent edits',
      'Optimizing database queries',
      'Building intuitive user interface'
    ]
  },
  '3': {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and reporting capabilities.',
    longDescription: 'A comprehensive analytics dashboard that provides real-time insights into business metrics. Features customizable widgets, data visualization, reporting tools, and export capabilities.',
    tech: ['Vue.js', 'D3.js', 'Express', 'Redis', 'PostgreSQL', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: [
      'Real-time data visualization',
      'Customizable dashboard widgets',
      'Interactive charts and graphs',
      'Data export capabilities',
      'Scheduled reports',
      'User role management',
      'API integration',
      'Mobile-responsive design'
    ],
    challenges: [
      'Handling large datasets efficiently',
      'Creating responsive visualizations',
      'Implementing real-time updates',
      'Optimizing query performance'
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
