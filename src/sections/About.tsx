import Logo from '../components/Logo';

const highlights = [
  {
    title: 'Handmade',
    description: 'Every piece is crafted by hand with care and attention to detail.',
  },
  {
    title: 'Custom Designs',
    description: 'Personalized creations tailored to your story and style.',
  },
  {
    title: 'Memory Preservation',
    description: 'Transform precious moments into lasting resin art.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-gradient scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[var(--color-pastel-pink)]/50 flex items-center justify-center">
              <Logo variant="silhouette" className="w-32 h-32 sm:w-40 sm:h-40 text-[var(--color-text-light)]/30" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[var(--color-gold)]/30 -z-10" />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-4">
              About the Artist
            </h2>
            <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-6">
              Nehal Dabhi is a passionate resin artist who transforms emotions and memories into timeless
              handcrafted pieces. From wedding flowers to pregnancy kits, every preserved memory becomes a
              beautiful piece of art.
            </p>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-10">
              With a soft feminine aesthetic and a love for modern minimal luxury, each creation is made to
              celebrate your most meaningful moments.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="glass rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-gold-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
