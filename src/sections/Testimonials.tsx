import { Card } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const testimonials = [
  {
    quote:
      'Nehal preserved my wedding flowers beautifully. It\'s the most meaningful decor piece in our home.',
    author: 'Priya M.',
  },
  {
    quote:
      'The pregnancy keepsake she made is so delicate and precious. I cry every time I look at it.',
    author: 'Anjali K.',
  },
  {
    quote:
      'Custom resin jewelry that captured my grandmother\'s handwriting – absolutely stunning and so personal.',
    author: 'Riya S.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[var(--color-ivory)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Testimonials
          </h2>
          <p className="text-[var(--color-text-light)] max-w-xl mx-auto">
            Words from people who trusted us with their precious memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.author}
              className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur h-full"
            >
              <MessageOutlined className="text-3xl text-[var(--color-gold)]/60 mb-4" />
              <p className="text-[var(--color-text-light)] italic mb-6">"{t.quote}"</p>
              <p className="font-heading font-semibold text-[var(--color-gold-dark)]">{t.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
