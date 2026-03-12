import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import navLinks from '../utils/constants';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-[var(--color-text)] hover:opacity-90 transition-opacity">
            <Logo showText variant="full" className="h-9 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            type="primary"
            size="large"
            className="hidden md:inline-flex items-center"
            href="#custom-order"
          >
            Start Your Artwork
          </Button>
          <Button
            type="text"
            icon={<MenuOutlined className="text-lg" />}
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          />
        </div>
      </header>

      <Drawer
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        classNames={{ body: 'bg-[var(--color-beige)]' }}
        title={<Logo showText variant="full" className="h-8 text-[var(--color-text)]" />}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button type="primary" size="large" href="#custom-order" block onClick={() => setMobileOpen(false)}>
            Start Your Artwork
          </Button>
        </nav>
      </Drawer>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
