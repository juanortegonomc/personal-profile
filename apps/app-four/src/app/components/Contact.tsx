import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-2">05 / Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              I'm open to remote opportunities with US and UK clients. Whether it's a full-time role,
              contract engagement, or a technical conversation — feel free to reach out.
            </p>

            <div className="space-y-4">
              {[
                { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: '📱', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                { icon: '🔗', label: 'LinkedIn', value: 'david-cruz-ramos', href: profile.linkedin },
                { icon: '📍', label: 'Location', value: profile.location, href: undefined },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-4 flex items-center gap-4 glass-hover">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-300 transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Available for Remote Work</h3>
              <p className="text-white/50 text-sm mb-6">
                .NET · React · Azure · 15+ years of enterprise experience
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-violet-900/40"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} David Miguel Cruz Ramos · Built with React 19 + Tailwind CSS + Vite
          </p>
        </div>
      </div>
    </section>
  );
}
