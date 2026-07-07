'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/components/ProjectGallery';

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Project Not Found
          </h1>
          <Link
            href="/#projects"
            className="text-[var(--accent)] hover:underline"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--accent)] mb-8 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="aspect-video bg-[var(--surface-muted)] rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all duration-300 text-center hover:scale-[1.02] active:scale-95"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 border-2 border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--surface-muted)] transition-all duration-300 text-center hover:scale-[1.02] active:scale-95"
              >
                View Code
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-4">
              {project.description}
            </p>

            {project.longDescription && (
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                {project.longDescription}
              </p>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[var(--surface-muted)] text-[var(--text-muted)] rounded-full text-sm font-mono font-medium transition-all duration-300 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border)] transition-shadow duration-300 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 shrink-0" />
                  <span className="text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border)] transition-shadow duration-300 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Challenges & Solutions
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                  <span className="text-[var(--text-secondary)]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
