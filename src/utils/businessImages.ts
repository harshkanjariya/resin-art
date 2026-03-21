const businessImages = [
  '/images/resin-art-01.jpeg',
  '/images/resin-art-02.jpeg',
  '/images/resin-art-03.jpeg',
  '/images/resin-art-04.jpeg',
  '/images/resin-art-05.jpeg',
  '/images/resin-art-06.jpeg',
  '/images/resin-art-07.jpeg',
  '/images/resin-art-08.jpeg',
  '/images/resin-art-09.jpeg',
  '/images/resin-art-10.jpeg',
  '/images/resin-art-11.jpeg',
  '/images/resin-art-12.jpeg',
  '/images/resin-art-13.jpeg',
  '/images/resin-art-14.jpeg',
  '/images/resin-art-15.jpeg',
  '/images/resin-art-16.jpeg',
  '/images/resin-art-17.jpeg',
  '/images/resin-art-18.jpeg',
  '/images/resin-art-19.jpeg',
  '/images/resin-art-20.jpeg',
  '/images/resin-art-21.jpg',
  '/images/resin-art-22.jpg',
];

function shuffledImages() {
  const list = [...businessImages];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

export function getRandomBusinessImages(count: number) {
  const pool = shuffledImages();
  if (count <= pool.length) return pool.slice(0, count);

  const result: string[] = [];
  for (let i = 0; i < count; i += 1) {
    result.push(pool[i % pool.length]);
  }
  return result;
}

