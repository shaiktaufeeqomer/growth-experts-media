import { useState } from 'react';
import { Bot, Sparkles, Check, ArrowRight, Loader2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useWaitlist } from '@/hooks/useWaitlist';

const features = [
  'Automated social media posting across platforms',
  'Always-on customer engagement & smart replies',
  'AI content generation tuned to your brand voice',
  'Continuous campaign optimization in real time',
];

export function AIAgents() {
  const { status, message, submit } = useWaitlist();
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const ok = await submit(email);
    if (ok) setEmail('');
  };

  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-squircle glass-strong p-8 sm:p-12">
            {/* Glow accents inside the panel */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-violet/30 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-electric/25 blur-[80px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-accent-violet/20 to-accent-electric/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/15">
                  <Sparkles className="h-3.5 w-3.5 text-accent-electric" />
                  Coming Soon · Now in Beta
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  AI Growth Agents are on the way
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
                  We're building autonomous AI agents that handle social media
                  posting, customer engagement, content generation, and campaign
                  optimization — so your brand grows even while you sleep.
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-white/80">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-teal/20 ring-1 ring-inset ring-accent-teal/40">
                        <Check className="h-3 w-3 text-accent-teal" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: waitlist form card */}
              <div className="glass rounded-card p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="icon-chip">
                    <Bot className="h-6 w-6 text-accent-electric" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Join the waitlist</p>
                    <p className="text-xs text-white/55">Be the first to try our AI Growth Agents</p>
                  </div>
                </div>

                {status === 'success' ? (
                  <div className="rounded-2xl bg-accent-teal/10 p-5 text-center ring-1 ring-inset ring-accent-teal/30">
                    <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-accent-teal/20">
                      <Check className="h-5 w-5 text-accent-teal" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm font-medium text-white">{message}</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <label htmlFor="waitlist-email" className="mb-2 block text-xs font-medium text-white/60">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-input w-full rounded-2xl px-4 py-3 text-[15px]"
                      aria-invalid={touched && !valid}
                    />
                    {touched && !valid && (
                      <p className="mt-2 text-xs text-red-400">Please enter a valid email address.</p>
                    )}
                    {status === 'error' && (
                      <p className="mt-2 text-xs text-red-400">{message}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-white/40">
                      No spam. We'll only email about the AI agents launch.
                    </p>
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
