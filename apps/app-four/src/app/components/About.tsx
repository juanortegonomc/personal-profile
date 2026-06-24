import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Left — label */}
        <div>
          <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-2">
            01 / About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Professional Summary
          </h2>
        </div>

        {/* Right — content */}
        <div className="md:col-span-2">
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {profile.summary}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '15+', label: 'Years of Experience' },
              { value: '8+', label: 'Team Size Led' },
              { value: 'US/UK', label: 'Client Markets' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center glass-hover"
              >
                <div className="gradient-text text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
