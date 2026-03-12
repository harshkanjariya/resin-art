import { Button } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const contactItems = [
  { icon: <InstagramOutlined />, label: 'Instagram', href: 'https://instagram.com/art_town_23', value: '@art_town_23' },
  { icon: <WhatsAppOutlined />, label: 'WhatsApp', href: 'https://wa.me/929512697711', value: '+91 95126 9711' },
  { icon: <MailOutlined />, label: 'Email', href: 'mailto:nehaldabhi20@gmail.com', value: 'nehaldabhi20@gmail.com' },
  { icon: <EnvironmentOutlined />, label: 'Location', href: '#', value: 'India' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-gradient scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
          Get in Touch
        </h2>
        <p className="text-[var(--color-text-light)] mb-12 max-w-lg mx-auto">
          Ready to preserve your memories or start a custom piece? Reach out via Instagram, WhatsApp, or email.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') || item.href.startsWith('mailto') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl text-[var(--color-gold)]">{item.icon}</span>
              <span className="font-medium text-[var(--color-text)]">{item.label}</span>
              <span className="text-sm text-[var(--color-text-light)]">{item.value}</span>
            </a>
          ))}
        </div>

        <Button type="primary" size="large" href="#custom-order" className="min-w-[260px]">
          Start Your Custom Resin Artwork
        </Button>
      </div>
    </section>
  );
}
