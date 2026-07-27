import { BarChart3, UserCircle2, Cpu, Eye } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const props = [
  {
    icon: BarChart3,
    title: 'Data-driven approach',
    desc: 'Every decision is backed by analytics — not guesswork. We optimize toward what actually moves the needle.',
  },
  {
    icon: UserCircle2,
    title: 'Dedicated account managers',
    desc: 'You get a real human partner who knows your brand inside out, not a rotating cast of juniors.',
  },
  {
    icon: Cpu,
    title: 'AI-powered efficiency',
    desc: 'We pair expert strategy with emerging AI tooling to move faster and scale content without losing quality.',
  },
  {
    icon: Eye,
    title: 'Transparent reporting',
    desc: 'Live dashboards and plain-English reports. You always see exactly where your budget goes and what it returns.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
            Why choose us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Built different. Built to grow.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            We combine senior strategy, hands-on execution, and the tools of the
            near future — so your growth compounds, month over month.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {props.map((prop, i) => (
            <Reveal key={prop.title} delay={i * 90}>
              <article className="glass flex h-full items-start gap-5 rounded-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-7">
                <span className="icon-chip flex-none">
                  <prop.icon className="h-6 w-6 text-accent-electric" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {prop.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
