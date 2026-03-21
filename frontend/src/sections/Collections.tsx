import { useMemo } from 'react';
import { Card } from 'antd';
import { getRandomBusinessImages } from '../utils/businessImages.ts';

const collections = [
  {
    title: 'Resin Jewelry',
    description: 'Elegant earrings, pendants, and bracelets – wearable art for every occasion.',
    image: 'Jewelry',
  },
  {
    title: 'Home Decor',
    description: 'Stunning resin pieces to elevate your living space with a touch of artistry.',
    image: 'Decor',
  },
  {
    title: 'Resin Coasters & Trays',
    description: 'Functional beauty – protect surfaces with handcrafted resin coasters and trays.',
    image: 'Coasters',
  },
  {
    title: 'Wedding Flower Preservation',
    description: 'Your wedding bouquet forever preserved in crystal-clear resin.',
    image: 'Wedding',
  },
  {
    title: 'Pregnancy Kit Preservation',
    description: 'Cherish the beginning of your journey with a timeless keepsake.',
    image: 'Pregnancy',
  },
  {
    title: 'Custom Memory Art',
    description: 'Any sentimental object transformed into a unique piece of art.',
    image: 'Custom',
  },
];

export default function Collections() {
  const collectionsWithImages = useMemo(() => {
    const randomImages = getRandomBusinessImages(collections.length);
    return collections.map((item, index) => ({
      ...item,
      imageUrl: randomImages[index],
    }));
  }, []);

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[var(--color-ivory)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Product Collections
          </h2>
          <p className="text-[var(--color-text-light)] max-w-xl mx-auto">
            Explore handcrafted resin art across jewelry, home decor, and memory preservation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collectionsWithImages.map((item) => (
            <Card
              key={item.title}
              hoverable
              className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur"
              styles={{ body: { padding: 0 } }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
