'use client';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div id='noise' aria-hidden="true" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div>
          <h1 className="animate-hero-stagger text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight [animation-delay:0s]">
            Richard Jiménez
          </h1>
          <p className="animate-hero-stagger text-xl md:text-2xl text-slate-300 mb-8 font-light [animation-delay:0.15s]">
            Freelance Developer
          </p>
          <p className="animate-hero-stagger text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed [animation-delay:0.3s]">
            Crafting exceptional digital experiences with cutting-edge technology.
            Specialized in building scalable web applications that impress and perform.
          </p>

          <div className="animate-hero-stagger flex flex-col sm:flex-row gap-4 justify-center [animation-delay:0.45s]">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-500 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-scroll-indicator">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" suppressHydrationWarning>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
