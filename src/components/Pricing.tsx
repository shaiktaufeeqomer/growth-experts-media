import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const tiers = [
  {
    name: 'Starter',
    price: '$1,900',
    cadence: '/month',
    tagline: 'For brands getting serious about growth.',
    features: [
      '1 social platform managed',
      '12 posts / month',
      'Basic analytics dashboard',
      'Email support',
      'Monthly strategy call',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$3,800',
    cadence: '/month',
    tagline: 'Our most popular package for scaling brands.',
    features: [
      '3 social platforms managed',
      '24 posts / month',
      'Paid ad management (up to $10k spend)',
      'SEO + content marketing',
      'Live analytics dashboard',
      'Dedicated account manager',
      'Bi-weekly strategy calls',
    ],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    tagline: 'Full-funnel growth for ambitious teams.',
    features: [
      'Unlimited platforms',
      'Custom content volume',
      'Full paid media management',
      'Email marketing automation',
      'Advanced reporting & ROI tracking',
      'Priority support + slack channel',
      'Weekly strategy sessions',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="pricing" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Plans that scale with you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Transparent monthly packages. No long-term lock-in. Cancel anytime
            with 30 days notice.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-card p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8 ${
                  tier.highlighted
                    ? 'glass-strong ring-1 ring-inset ring-accent-violet/40'
                    : 'glass hover:border-white/20'
                }`}
              >
                {tier.highlighted && (
                  <>
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-violet/25 blur-[60px]" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-gradient-to-r from-accent-electric to-accent-violet px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
                      Most Popular
                    </span>
                  </>
                )}

                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-white/55">{tier.tagline}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="mb-1 text-sm text-white/55">{tier.cadence}</span>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-teal/15 ring-1 ring-inset ring-accent-teal/30">
                        <Check className="h-3 w-3 text-accent-teal" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#contact')}
                  className={`mt-7 ${tier.highlighted ? 'btn-primary' : 'btn-secondary'} w-full`}
                >
                  {tier.price === 'Custom' ? 'Book a Strategy Call' : 'Get Started'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-white/50">
            Not sure which plan fits? <button onClick={() => scrollTo('#contact')} className="font-medium text-accent-electric underline-offset-4 hover:underline">Book a free consultation</button> and we'll recommend the right one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
