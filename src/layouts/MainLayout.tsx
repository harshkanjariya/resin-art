import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import navLinks from '../utils/constants';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 min-h-[52px]">
          <a href="#hero" className="flex items-center gap-2 text-[var(--color-text)] hover:opacity-90 transition-opacity min-w-0 shrink">
            <Logo showText={false} variant="full" className="h-8 sm:h-9 w-auto max-w-[180px] sm:max-w-none" />
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
          {/* Wrapper ensures menu icon is hidden on desktop (Ant Design Button can override Tailwind hidden) */}
          <div className="header-mobile-menu md:hidden flex items-center">
            <Button
              type="text"
              icon={<MenuOutlined className="text-lg" />}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            />
          </div>
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
