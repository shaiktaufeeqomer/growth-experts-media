import {
  Compass,
  Megaphone,
  Share2,
  BarChart3,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const services = [
  {
    icon: Compass,
    title: 'Brand Growth Strategy',
    desc: 'Positioning, brand identity, and growth roadmaps that give your business a clear, competitive direction.',
    points: ['Positioning & messaging', 'Brand identity systems', 'Growth roadmaps'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'SEO, paid ads, content, and email marketing engineered to turn attention into qualified pipeline.',
    points: ['SEO & paid ads', 'Content marketing', 'Email automation'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Content creation, consistent posting, community management, and growth campaigns across every platform.',
    points: ['Content creation', 'Community management', 'Growth campaigns'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Performance tracking, live dashboards, and ROI reporting so you always know what is working.',
    points: ['Performance tracking', 'Live dashboards', 'ROI reporting'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-electric">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything your brand needs to grow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Four core services that work together as one growth engine — from
            strategy to execution to measurement.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="group glass h-full rounded-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow">
                <span className="icon-chip mb-5 group-hover:scale-110 group-hover:shadow-glow">
                  <service.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {service.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-[13px] text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
