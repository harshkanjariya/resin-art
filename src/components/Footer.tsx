import { InstagramOutlined, WhatsAppOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Logo from './Logo';

const links = [
  { icon: <InstagramOutlined />, label: 'Instagram', href: 'https://instagram.com/art_town_23' },
  { icon: <WhatsAppOutlined />, label: 'WhatsApp', href: 'https://wa.me/929512697711' },
  { icon: <MailOutlined />, label: 'Email', href: 'mailto:nehaldabhi20@gmail.com' },
  { icon: <EnvironmentOutlined />, label: 'Location', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-beige)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-2 text-[var(--color-beige)] hover:text-[var(--color-gold-light)] transition-colors">
            <Logo showText variant="full" theme="light" className="h-9 w-auto [&_svg]:h-9 [&_svg]:w-9 [&_span]:text-[var(--color-beige)]" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-[var(--color-beige)]/90 hover:text-[var(--color-gold-light)] transition-colors"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Art Town. Handcrafted with care.
        </div>
      </div>
    </footer>
  );
}
