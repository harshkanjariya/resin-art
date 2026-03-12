import { Button } from 'antd';
import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--color-pastel-pink)]/40 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[var(--color-gold)]/20 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-beige)]/30 blur-3xl" />
      </div>

      {/* Banner image placeholder – decorative */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          className="w-full max-w-4xl h-64 sm:h-80 bg-gradient-to-t from-[var(--color-pastel-pink-deep)]/30 to-transparent rounded-t-[40%]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[var(--color-gold)] font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in">
          Handcrafted by Nehal Dabhi
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--color-text)] leading-tight mb-6 animate-fade-in-up">
          Turning Memories Into{' '}
          <span className="text-[var(--color-gold)] italic">Timeless</span> Resin Art
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-light)] max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Handcrafted resin creations by Nehal Dabhi – preserving your most precious moments forever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-300">
          <Button type="primary" size="large" href="#collections" className="w-full sm:w-auto sm:min-w-[200px]">
            View Collections <ArrowRightOutlined />
          </Button>
          <Button size="large" href="#memory" className="w-full sm:w-auto sm:min-w-[200px] border-[var(--color-gold)] text-[var(--color-gold)] hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]">
            <HeartOutlined /> Preserve My Memory
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-gold)]/60 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[var(--color-gold)]/80" />
        </div>
      </div>
    </section>
  );
}
