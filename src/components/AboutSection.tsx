'use client';

import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "Python/Django",
    "PostgreSQL/MongoDB",
    "AWS/Docker",
    "GraphQL/REST APIs",
    "Tailwind CSS/SASS"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div id="about-section" className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Passionate developer creating exceptional digital experiences
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center">
              <div className="w-56 h-56 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-600 dark:text-slate-400">RJ</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm a Full-Stack Developer
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in building 
                scalable, high-performance applications that solve real-world problems. 
                My passion lies in creating clean, efficient code and exceptional user experiences.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I work closely with clients to understand their needs and deliver solutions 
                that exceed expectations. Whether it's a startup MVP or an enterprise application, 
                I bring the same level of dedication and expertise to every project.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
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
