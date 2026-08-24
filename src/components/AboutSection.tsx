'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Astro.build",
    "PostgreSQL/MySQL",
    "Docker",
    "Tailwind CSS/SASS",
    "PHP/Symfony",
    "Wordpress"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            About Me
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Passionate developer creating exceptional digital experiences
          </p>
        </div>

        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-linear-to-br from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 hover:scale-105">
              <div className="w-60 h-60 bg-[var(--surface)] rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/rj_profile.webp"
                  alt="Richard Jiménez"
                  width={220}
                  height={220}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Full-Stack Developer
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                With over 3 years of experience in web development, I specialize in building
                scalable, high-performance applications that solve real-world problems.
                My passion lies in creating clean, efficient code and exceptional user experiences.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I work closely with clients to understand their needs and deliver solutions
                that exceed expectations. Whether it&apos;s a startup MVP or an enterprise application,
                I bring the same level of dedication and expertise to every project.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 ease-out ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0" />
                    <span className="text-[var(--text-secondary)] text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
