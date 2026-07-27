import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const testimonials = [
  {
    quote:
      'Growth Experts Media rebuilt our entire social presence from the ground up. We went from posting inconsistently to a real content engine — and engagement tripled in three months.',
    name: 'Sarah Chen',
    role: 'Founder, Lumen Skincare',
    result: '+250% engagement',
    initials: 'SC',
  },
  {
    quote:
      'Their paid ads strategy paid for itself in the first month. By quarter two we had more qualified leads than we could handle — a genuinely good problem to have.',
    name: 'Marcus Reid',
    role: 'CEO, Northwind SaaS',
    result: '3.4x ROAS',
    initials: 'MR',
  },
  {
    quote:
      'The reporting is a breath of fresh air. No vanity metrics — just clear numbers tied to revenue. I finally know what my marketing budget is doing.',
    name: 'Priya Nair',
    role: 'Marketing Director, Atlas Fitness',
    result: '+180% qualified leads',
    initials: 'PN',
  },
];

const caseStudyStats = [
  { value: '+250%', label: 'Avg. engagement lift' },
  { value: '3.4x', label: 'Return on ad spend' },
  { value: '10M+', label: 'Audience reached' },
  { value: '92%', label: 'Client retention' },
];

export function Results() {
  return (
    <section id="results" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
            Results that speak
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Real brands. Real numbers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            We measure success the way you do — in growth, revenue, and retention.
          </p>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {caseStudyStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-card px-4 py-6 text-center"
              >
                <p className="text-2xl font-bold tracking-tight text-gradient-teal sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass flex h-full flex-col rounded-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-7">
                <Quote className="h-7 w-7 flex-none text-accent-violet/60" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/80">
                  "{t.quote}"
                </blockquote>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <figcaption className="flex items-center gap-3">
                    {/* Placeholder avatar with initials */}
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gradient-to-br from-accent-electric/30 to-accent-violet/30 text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{t.name}</span>
                      <span className="block text-xs text-white/55">{t.role}</span>
                    </span>
                  </figcaption>
                  <span className="inline-flex items-center gap-1 rounded-pill bg-accent-teal/15 px-2.5 py-1 text-xs font-semibold text-accent-teal ring-1 ring-inset ring-accent-teal/30">
                    {t.result}
                  </span>
                </div>

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Client logo placeholder strip */}
        <Reveal delay={150}>
          <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Trusted by ambitious brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50">
            {['Lumen', 'Northwind', 'Atlas', 'Verdant', 'Cobalt', 'Halcyon'].map(
              (logo) => (
                <span
                  key={logo}
                  className="text-lg font-semibold tracking-tight text-white/70"
                >
                  {logo}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
