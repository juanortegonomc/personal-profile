import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-2">02 / Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-6 glass-hover">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
