import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-us' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        className={`glass-nav flex w-full max-w-5xl items-center justify-between rounded-pill px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 rounded-pill pr-2 transition-transform hover:scale-105"
          aria-label="Growth Experts Media home"
        >
          <img 
            src="/logo.jpg" 
            alt="Growth Experts Media" 
            className="h-10 w-10 object-contain rounded-2xl animate-pulse" 
          />
          <span className="hidden text-[15px] font-semibold tracking-tight text-white sm:block">
            Growth Experts Media
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="rounded-pill px-3.5 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary hidden text-sm sm:inline-flex"
          >
            Book a Free Strategy Call
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-2xl text-white/80 transition-colors hover:bg-white/5 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-4 top-[4.5rem] z-40 md:hidden">
          <div className="glass-strong rounded-card p-3">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNav('#contact')}
                  className="btn-primary w-full"
                >
                  Book a Free Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
