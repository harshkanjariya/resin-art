import Hero from '../sections/Hero';
import About from '../sections/About';
import Collections from '../sections/Collections';
import MemoryPreservation from '../sections/MemoryPreservation';
import Gallery from '../sections/Gallery';
import CustomOrderForm from '../sections/CustomOrderForm';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <MemoryPreservation />
      <Gallery />
      <CustomOrderForm />
      <Testimonials />
      <Contact />
    </>
  );
}
