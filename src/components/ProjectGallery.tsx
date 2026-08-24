'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    title: "Argenta Jewelry Shop",
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
      'Creating an e-commerce webpage',
      'Implementing real-time synchronization',
      'Adding a translation button for all the content',
      'Learning Wordpress'
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
      'AI-generated dishes',
      'Mobile-responsive design'
    ],
    challenges: [
      'Creating responsive visualizations for AI generated images',
      "Learning Tailwind CSS responsive syntax"
    ]
  },
  {
    id: 4,
    title: "Dashboard Demo",
    description: "An admin dashboard simulation using dummyJSON",
    longDescription: 'This was a fun project to learn about tokens and authentication built into the API, instead of manual cookie configuration.',
    tech: ["React", "TypeScript", "Tailwind", "Next.js", "DummyJSON"],
    liveUrl: "https://dashboard-demo-xi-eight.vercel.app/",
    githubUrl: "https://codeberg.org/R1c4ar6/dashboard-demo",
    imageUrl: "/assets/project-six-prev.webp",
    features: [
      'Modals for user data display',
      'Mobile-responsive design',
      'Search bar by name',
      'Department filtering and user statistics'
    ],
    challenges: [
      "Using the API tokens after authentication (thought I had to handle them manually)",
      "Removing data from cookies on logout (almost bricked my laptop testing it)",
      "Type-safe handling of all API response types",
      "Implementing protected routes for the dashboard"
    ]
  },
  {
    id: 5,
    title: "YouTube Audio Converter",
    description: "Web app to convert YouTube videos to MP3 or M4A audio files",
    longDescription: "One of the hardest projects — had to learn yt-dlp CLI syntax (very unique) and Dockerize a service for the first time.",
    tech: ["React", "TypeScript", "Tailwind", "Next.js", "Python"],
    liveUrl: "https://you-audio-downloader.vercel.app/",
    githubUrl: "https://codeberg.org/R1c4ar6/you-audio-downloader",
    imageUrl: "/assets/project-seven-prev.webp",
    features: [
      "Quick conversions (for videos up to 5 minutes)",
      "Mobile-responsive design",
      "Minimalist UX — just works, and works fast"
    ],
    challenges: [
      "Building a custom API service with yt-dlp — relied on AI for command construction",
      "Dockerizing the service for Railway deployment",
      "Connecting Railway backend to Vercel frontend",
      "Handling environment variable syntax differences between Railway and Vite"
    ]
  }
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--surface-muted)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development practices and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative bg-[var(--surface)] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                  <span className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--surface-muted)] text-[var(--text-muted)] rounded-full text-xs font-mono font-medium transition-all duration-300 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
