import { Sparkles, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-us' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className="relative px-4 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-squircle p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-accent-electric to-accent-violet shadow-glow">
                  <Sparkles className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-white">
                  Growth Experts Media
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                A results-driven digital marketing agency helping brands build
                presence, grow audiences, and dominate social media — with AI
                growth agents on the horizon.
              </p>

              <div className="mt-6 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-2xl glass text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-glow"
                  >
                    <s.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Contact
              </p>
              <ul className="mt-4 mb-8 space-y-2.5 text-sm text-white/65">
                <li>
                  <a href="mailto:growthxpertsmedia@gmail.com" className="transition-colors hover:text-white break-all">
                    growthxpertsmedia@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:9849484637" className="transition-colors hover:text-white">
                    +91 9849484637
                  </a>
                </li>
                <li className="leading-relaxed">
                  Flat number 806, Babukhan estate business complex,<br />
                  basheer bagh, hyderabad.
                </li>
              </ul>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} Growth Experts Media. All rights reserved.
            </p>
            <p className="text-xs text-white/45">
              growthexperts.media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
