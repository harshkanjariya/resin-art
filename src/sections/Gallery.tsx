import { useState, useMemo } from 'react';
import { Card, Segmented } from 'antd';
import Logo from '../components/Logo';

type Category = 'all' | 'jewelry' | 'decor' | 'preservation';

interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  placeholder: string;
}

const galleryItems: GalleryItem[] = [
  { id: '1', category: 'jewelry', title: 'Resin Earrings', placeholder: 'Earrings 1' },
  { id: '2', category: 'decor', title: 'Coaster Set', placeholder: 'Coasters' },
  { id: '3', category: 'preservation', title: 'Wedding Flowers', placeholder: 'Wedding' },
  { id: '4', category: 'jewelry', title: 'Pendant', placeholder: 'Pendant' },
  { id: '5', category: 'decor', title: 'Tray', placeholder: 'Tray' },
  { id: '6', category: 'preservation', title: 'Pregnancy Keepsake', placeholder: 'Pregnancy' },
  { id: '7', category: 'jewelry', title: 'Bracelet', placeholder: 'Bracelet' },
  { id: '8', category: 'decor', title: 'Wall Art', placeholder: 'Wall' },
  { id: '9', category: 'preservation', title: 'Baby Tags', placeholder: 'Baby' },
  { id: '10', category: 'jewelry', title: 'Ring Holder', placeholder: 'Ring' },
  { id: '11', category: 'decor', title: 'Vase', placeholder: 'Vase' },
  { id: '12', category: 'preservation', title: 'Custom Memory', placeholder: 'Custom' },
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

  const filtered = useMemo(() => {
    if (category === 'all') return galleryItems;
    return galleryItems.filter((i) => i.category === category);
  }, [category]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[var(--color-ivory)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Gallery
          </h2>
          <p className="text-[var(--color-text-light)] max-w-xl mx-auto mb-8">
            A glimpse of handcrafted resin art – jewelry, decor, and preserved memories.
          </p>
          <Segmented
            value={category}
            onChange={(v) => setCategory(v as Category)}
            options={(['all', 'jewelry', 'decor', 'preservation'] as const).map((c) => ({
              label: categoryLabels[c],
              value: c,
            }))}
            className="bg-white/80 shadow-sm"
          />
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
                setPreviewOpen(true);
              }}
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--color-pastel-pink)]/50 to-[var(--color-beige)] flex items-center justify-center text-[var(--color-text-light)]/60 text-sm group-hover:scale-105 transition-transform duration-500">
                <Logo variant="silhouette" className="w-14 h-14 sm:w-16 sm:h-16 text-[var(--color-text-light)]/40 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </Card>
          ))}
        </div>

      </div>

      {/* Simple lightbox */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="max-w-lg w-full mx-4 rounded-2xl overflow-hidden bg-[var(--color-beige)] p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[var(--color-pastel-pink)]/50 to-[var(--color-beige)] flex items-center justify-center text-[var(--color-text-light)] mb-4">
              <Logo variant="silhouette" className="w-24 h-24 text-[var(--color-text-light)]/40" />
            </div>
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
