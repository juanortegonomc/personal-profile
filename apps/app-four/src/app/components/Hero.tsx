import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="glass inline-block rounded-full px-4 py-1.5 text-sm text-violet-300 mb-6 border border-violet-500/30">
          📍 {profile.location} &nbsp;·&nbsp; {profile.openTo}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-white/80 font-light mb-2">
          {profile.title}
        </h2>

        <p className="text-violet-300/80 text-lg font-mono mb-10 tracking-widest uppercase text-sm">
          {profile.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 hover:-translate-y-0.5"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full glass text-white/80 font-medium hover:text-white hover:border-violet-400/50 transition-all duration-300 border border-white/20 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
