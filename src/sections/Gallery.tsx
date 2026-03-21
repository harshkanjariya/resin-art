import { useState, useMemo } from 'react';
import { Card, Segmented } from 'antd';
import { getRandomBusinessImages } from '../utils/businessImages';

type Category = 'all' | 'jewelry' | 'decor' | 'preservation';

interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  imageUrl: string;
}

const gallerySeedItems: Omit<GalleryItem, 'imageUrl'>[] = [
  { id: '1', category: 'jewelry', title: 'Resin Earrings' },
  { id: '2', category: 'decor', title: 'Coaster Set' },
  { id: '3', category: 'preservation', title: 'Wedding Flowers' },
  { id: '4', category: 'jewelry', title: 'Pendant' },
  { id: '5', category: 'decor', title: 'Tray' },
  { id: '6', category: 'preservation', title: 'Pregnancy Keepsake' },
  { id: '7', category: 'jewelry', title: 'Bracelet' },
  { id: '8', category: 'decor', title: 'Wall Art' },
  { id: '9', category: 'preservation', title: 'Baby Tags' },
  { id: '10', category: 'jewelry', title: 'Ring Holder' },
  { id: '11', category: 'decor', title: 'Vase' },
  { id: '12', category: 'preservation', title: 'Custom Memory' },
];

const categoryLabels: Record<Category, string> = {
  all: 'All',
  jewelry: 'Jewelry',
  decor: 'Decor',
  preservation: 'Preservation',
};

export default function Gallery() {
  const [category, setCategory] = useState<Category>('all');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const galleryItems = useMemo<GalleryItem[]>(() => {
    const randomImages = getRandomBusinessImages(gallerySeedItems.length);
    return gallerySeedItems.map((item, index) => ({
      ...item,
      imageUrl: randomImages[index],
    }));
  }, []);

  const filtered = useMemo(() => {
    if (category === 'all') return galleryItems;
    return galleryItems.filter((i) => i.category === category);
  }, [category]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[var(--color-ivory)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Gallery
          </h2>
          <p className="text-[var(--color-text-light)] max-w-xl mx-auto mb-6 sm:mb-8 px-1">
            A glimpse of handcrafted resin art – jewelry, decor, and preserved memories.
          </p>
          <div className="flex flex-wrap justify-center">
            <Segmented
              value={category}
              onChange={(v) => setCategory(v as Category)}
              options={(['all', 'jewelry', 'decor', 'preservation'] as const).map((c) => ({
                label: categoryLabels[c],
                value: c,
              }))}
              className="bg-white/80 shadow-sm text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <Card
              key={item.id}
              hoverable
              className="overflow-hidden rounded-xl border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white/80"
              styles={{ body: { padding: 0 } }}
              onClick={() => {
                setPreviewTitle(item.title);
                setPreviewImage(item.imageUrl);
                setPreviewOpen(true);
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </Card>
          ))}
        </div>

      </div>

      {/* Simple lightbox */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-2xl overflow-hidden bg-[var(--color-beige)] p-4 sm:p-6 md:p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={previewImage} alt={previewTitle} className="aspect-square w-full rounded-xl object-cover mb-4" />
            <p className="font-heading text-lg font-semibold text-[var(--color-text)]">{previewTitle}</p>
            <button
              type="button"
              className="mt-4 text-[var(--color-gold)] hover:underline"
              onClick={() => setPreviewOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
