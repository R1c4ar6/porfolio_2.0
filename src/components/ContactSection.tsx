'use client';

import { useEffect, useState, useRef } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rjtech@disroot.org');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--surface-muted)]">
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto"
      >
        <div className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--surface)] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Email</h3>
              <button
                onClick={handleCopyEmail}
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                aria-label={copiedEmail ? 'Email copied' : 'Copy email address'}
              >
                {copiedEmail ? (
                  <span className="animate-checkmark text-green-500 flex items-center justify-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </span>
                ) : (
                  'rjtech@disroot.org'
                )}
              </button>
            </div>

            <div className="bg-[var(--surface)] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">GitHub</h3>
              <a
                href="https://github.com/R1c4ar6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                @rjtech
              </a>
            </div>

            <div className="bg-[var(--surface)] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/richard-jim%C3%A9nez-9a57b41b4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Richard Jiménez
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[var(--text-secondary)] mb-6">
              Ready to start your next project?
            </p>
            <a
              href="mailto:rjtech@disroot.org"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--accent-hover)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
