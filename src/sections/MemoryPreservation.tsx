import { Timeline } from 'antd';
import { SendOutlined, InboxOutlined, ExperimentOutlined, FormOutlined, GiftOutlined } from '@ant-design/icons';

const steps = [
  {
    dot: <SendOutlined className="text-[var(--color-gold)]" />,
    children: (
      <>
        <h4 className="font-heading font-semibold text-[var(--color-text)]">Submit your request</h4>
        <p className="text-[var(--color-text-light)] text-sm mt-1">
          Tell us about your memory and what you’d like to preserve.
        </p>
      </>
    ),
  },
  {
    dot: <InboxOutlined className="text-[var(--color-gold)]" />,
    children: (
      <>
        <h4 className="font-heading font-semibold text-[var(--color-text)]">Send your memory item</h4>
        <p className="text-[var(--color-text-light)] text-sm mt-1">
          Safely ship your flowers, test kit, or sentimental object to us.
        </p>
      </>
    ),
  },
  {
    dot: <ExperimentOutlined className="text-[var(--color-gold)]" />,
    children: (
      <>
        <h4 className="font-heading font-semibold text-[var(--color-text)]">Preservation process</h4>
        <p className="text-[var(--color-text-light)] text-sm mt-1">
          We prepare and preserve your item with care so it stays beautiful forever.
        </p>
      </>
    ),
  },
  {
    dot: <FormOutlined className="text-[var(--color-gold)]" />,
    children: (
      <>
        <h4 className="font-heading font-semibold text-[var(--color-text)]">Resin artwork creation</h4>
        <p className="text-[var(--color-text-light)] text-sm mt-1">
          Your memory is cast into crystal-clear resin and finished by hand.
        </p>
      </>
    ),
  },
  {
    dot: <GiftOutlined className="text-[var(--color-gold)]" />,
    children: (
      <>
        <h4 className="font-heading font-semibold text-[var(--color-text)]">Delivered forever preserved</h4>
        <p className="text-[var(--color-text-light)] text-sm mt-1">
          Your one-of-a-kind piece is packed with care and shipped to you.
        </p>
      </>
    ),
  },
];

const examples = [
  'Wedding flowers',
  'Pregnancy test kits',
  'Baby hospital tags',
  'Small sentimental objects',
];

export default function MemoryPreservation() {
  return (
    <section id="memory" className="py-20 sm:py-28 bg-brand-gradient scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Memory Preservation Service
          </h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
            Turn your most precious moments into lasting resin art. We preserve wedding flowers,
            pregnancy keepsakes, baby memorabilia, and other sentimental items with care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
              What we preserve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {examples.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[var(--color-text-light)]"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
              How it works
            </h3>
            <Timeline
              items={steps}
              className="memory-timeline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
