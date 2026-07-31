import { useState } from 'react';
import { Check, Loader2, Send, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useContact } from '@/hooks/useContact';

const contactInfo = [
  { icon: Phone, label: 'Call us', value: '9849484637' },
  { icon: Mail, label: 'Email us', value: 'growthxpertsmedia@gmail.com' },
  { icon: MapPin, label: 'Visit us', value: 'Flat number 806, Babukhan estate business complex, basheer bagh, hyderabad.' },
];

export function Contact() {
  const { status, message, submit, reset } = useContact();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [touched, setTouched] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const valid = form.name.trim() && emailValid && form.message.trim();

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const ok = await submit(form);
    if (ok) setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-squircle glass-strong p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-blue/25 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent-violet/25 blur-[80px]" />

            <div className="relative grid gap-10 lg:grid-cols-2">
              {/* Left: copy + contact details */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
                  Let's talk
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Book your free strategy call
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
                  Tell us where you want to grow. We'll come back within one
                  business day with a tailored plan — no obligation, no hard sell.
                </p>

                <ul className="mt-8 space-y-4">
                  {contactInfo.map((info) => (
                    <li key={info.label} className="flex items-center gap-3.5">
                      <span className="icon-chip h-11 w-11 flex-none">
                        <info.icon className="h-5 w-5 text-accent-electric" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                          {info.label}
                        </p>
                        <p className="text-[15px] font-medium text-white">{info.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: form */}
              <div className="glass rounded-card p-6 sm:p-7">
                {status === 'success' ? (
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-accent-teal/10 p-6 text-center ring-1 ring-inset ring-accent-teal/30">
                    <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-accent-teal/20">
                      <Check className="h-6 w-6 text-accent-teal" strokeWidth={2.5} />
                    </div>
                    <p className="text-base font-semibold text-white">Message sent!</p>
                    <p className="mt-2 text-sm text-white/70">{message}</p>
                    <button
                      onClick={() => reset()}
                      className="btn-secondary mt-5 text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-4">
                    <div>
                      <label htmlFor="c-name" className="mb-1.5 block text-xs font-medium text-white/60">
                        Full name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={update('name')}
                        className="glass-input w-full rounded-2xl px-4 py-3 text-[15px]"
                        placeholder="Jane Doe"
                        aria-invalid={touched && !form.name.trim()}
                      />
                      {touched && !form.name.trim() && (
                        <p className="mt-1.5 text-xs text-red-400">Your name is required.</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-xs font-medium text-white/60">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update('email')}
                        className="glass-input w-full rounded-2xl px-4 py-3 text-[15px]"
                        placeholder="you@company.com"
                        aria-invalid={touched && !emailValid}
                      />
                      {touched && !emailValid && (
                        <p className="mt-1.5 text-xs text-red-400">A valid email is required.</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-company" className="mb-1.5 block text-xs font-medium text-white/60">
                        Company <span className="text-white/30">(optional)</span>
                      </label>
                      <input
                        id="c-company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={update('company')}
                        className="glass-input w-full rounded-2xl px-4 py-3 text-[15px]"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="c-message" className="mb-1.5 block text-xs font-medium text-white/60">
                        How can we help? <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        className="glass-input w-full resize-none rounded-2xl px-4 py-3 text-[15px]"
                        placeholder="Tell us about your brand and growth goals..."
                        aria-invalid={touched && !form.message.trim()}
                      />
                      {touched && !form.message.trim() && (
                        <p className="mt-1.5 text-xs text-red-400">Please tell us a bit about your project.</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-red-400">{message}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
