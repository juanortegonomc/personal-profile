import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-2">03 / Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
        </div>

        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {profile.experience.map((job, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-2 border-[#0a0a1a] hidden md:block" />

                <div className="glass rounded-2xl p-6 glass-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                      <p className="gradient-text font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-white/50 text-sm block">{job.period}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="text-white/60 text-sm flex gap-2">
                        <span className="text-violet-400 mt-1 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
