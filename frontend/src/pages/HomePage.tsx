import Hero from '../sections/Hero.tsx';
import About from '../sections/About.tsx';
import Collections from '../sections/Collections.tsx';
import MemoryPreservation from '../sections/MemoryPreservation.tsx';
import Gallery from '../sections/Gallery.tsx';
import Testimonials from '../sections/Testimonials.tsx';
import Contact from '../sections/Contact.tsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <MemoryPreservation />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
