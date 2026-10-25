'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let x = 0;
    let y = 0;
    let frame = 0;

    const updateSpotlight = () => {
      section.style.setProperty('--pointer-x', `${x}px`);
      section.style.setProperty('--pointer-y', `${y}px`);
      section.style.setProperty('--spotlight-opacity', '1');
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;

      if (!frame) {
        frame = requestAnimationFrame(updateSpotlight);
      }
    };

    const handlePointerLeave = () => {
      section.style.setProperty('--spotlight-opacity', '0');
    };

    section.addEventListener('pointermove', handlePointerMove, { passive: true });
    section.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-8 sm:pb-20"
    >
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-spotlight" />
        <div className="hero-grain" />
        <div className="hero-vignette" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div>
          <div className="animate-hero-stagger mb-8 [animation-delay:0s]">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-300 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--hero-accent)] opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--hero-accent)]" />
              </span>
              Available for freelance work
            </span>
          </div>

          <h1
            id="hero-heading"
            className="animate-hero-stagger mb-6 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl [animation-delay:0.1s]"
          >
            Richard Jiménez
          </h1>

          <div className="animate-hero-stagger mb-8 flex items-center justify-center gap-3 [animation-delay:0.2s]">
            <span className="h-px w-6 bg-slate-700 sm:w-8" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-300 md:text-sm md:tracking-[0.28em]">
              Freelance Developer
            </p>
            <span className="h-px w-6 bg-slate-700 sm:w-8" aria-hidden="true" />
          </div>

          <p className="animate-hero-stagger mx-auto mb-12 max-w-xl text-pretty text-base leading-relaxed text-slate-400 md:text-lg [animation-delay:0.3s]">
            Crafting exceptional digital experiences with cutting-edge technology.
            Specialized in building scalable web applications that impress and perform.
          </p>

          <div className="animate-hero-stagger flex flex-col justify-center gap-4 sm:flex-row [animation-delay:0.45s]">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-slate-900 transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_0_36px_rgba(255,255,255,0.12)] focus-visible:outline-offset-4 active:translate-y-0 active:scale-[0.98]"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-8 py-4 font-medium text-slate-100 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white/[0.06] focus-visible:outline-offset-4 active:translate-y-0 active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="hero-scroll-cue group absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 transition-colors duration-300 hover:text-white focus-visible:outline-offset-4"
      >
        <span>Scroll</span>
        <span className="relative h-9 w-px overflow-hidden bg-white/15" aria-hidden="true">
          <span className="motion-safe:animate-scroll-line absolute inset-x-0 top-0 h-3 bg-linear-to-b from-transparent via-slate-200 to-transparent" />
        </span>
      </a>
    </section>
  );
}
