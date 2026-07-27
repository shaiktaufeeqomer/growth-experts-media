import { PhoneCall, Map, Zap, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Discovery Call',
    desc: 'We learn your brand, goals, audience, and current challenges — no pressure, just a clear conversation.',
  },
  {
    icon: Map,
    step: '02',
    title: 'Strategy & Plan',
    desc: 'You get a custom growth roadmap with channels, content pillars, and measurable milestones.',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Execution',
    desc: 'Our team ships campaigns, content, and ads — managed end-to-end so you stay focused on your business.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Growth & Reporting',
    desc: 'We track performance, optimize weekly, and report transparently so you see the ROI in real numbers.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            A simple path to measurable growth
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Four focused steps from first call to compounding results.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line for desktop */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="icon-chip relative z-10 mb-5 h-[3.25rem] w-[3.25rem]">
                    <step.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                  </span>
                  <span className="mb-2 text-xs font-bold tracking-widest text-accent-violet">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
