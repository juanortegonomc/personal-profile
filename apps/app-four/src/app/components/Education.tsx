import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-2">04 / Education & Certs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-white/50 text-xs uppercase tracking-widest font-mono mb-5">Education</h3>
            <div className="space-y-4">
              {profile.education.map((edu) => (
                <div key={edu.degree} className="glass rounded-2xl p-5 glass-hover">
                  <p className="text-white font-semibold">{edu.degree}</p>
                  <p className="gradient-text text-sm mt-1">{edu.institution}</p>
                  <p className="text-white/40 text-xs mt-1">
                    {edu.location}{edu.year ? ` · ${edu.year}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white/50 text-xs uppercase tracking-widest font-mono mb-5">Certifications</h3>
            <div className="space-y-4">
              {profile.certifications.map((cert) => (
                <div key={cert.code} className="glass rounded-2xl p-5 glass-hover flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">MS</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{cert.name}</p>
                    <p className="text-violet-300/70 text-xs mt-0.5">{cert.issuer} · {cert.code}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="text-white/50 text-xs uppercase tracking-widest font-mono mb-5 mt-8">Languages</h3>
            <div className="space-y-4">
              {profile.languages.map((lang) => (
                <div key={lang.name} className="glass rounded-2xl p-5 glass-hover">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium text-sm">{lang.name}</span>
                    <span className="text-white/40 text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
