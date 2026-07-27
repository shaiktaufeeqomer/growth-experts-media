import { ArrowRight, TrendingUp, Users2, Rocket } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

function Stat({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof TrendingUp;
}) {
  const { ref, value: animated } = useCountUp(value);
  const display =
    value >= 1000 ? `${(animated / 1000).toFixed(animated >= value ? 0 : 1)}` : Math.round(animated).toString();

  return (
    <div className="glass flex flex-col items-center gap-2 rounded-card px-4 py-5 text-center sm:px-6">
      <span className="icon-chip mb-1">
        <Icon className="h-5 w-5 text-accent-electric" strokeWidth={1.75} />
      </span>
      <span ref={ref} className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {display}
        {suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-white/55 sm:text-[13px]">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:pt-32">
      {/* Top badge */}
      <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-pill glass px-4 py-1.5 text-xs font-medium text-white/80">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
        </span>
        Now accepting new brands for Q3 2026
      </div>

      {/* Headline */}
      <h1 className="max-w-4xl animate-fade-up text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
        We Grow Brands.
        <br />
        We Build Presence.
        <br />
        <span className="text-gradient">We Deliver Results.</span>
      </h1>

      {/* Subheadline */}
      <p
        className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/65 sm:text-lg md:text-xl"
        style={{ animationDelay: '120ms' }}
      >
        A results-driven digital marketing agency that helps businesses build their
        brand, grow their audience, and dominate social media — with cutting-edge
        AI tools on the horizon.
      </p>

      {/* CTAs */}
      <div
        className="mt-9 flex animate-fade-up flex-col items-center gap-3 sm:flex-row"
        style={{ animationDelay: '240ms' }}
      >
        <button onClick={() => scrollTo('#contact')} className="btn-primary text-base">
          Book a Free Consultation
          <ArrowRight className="h-5 w-5" />
        </button>
        <button onClick={() => scrollTo('#services')} className="btn-secondary text-base">
          Explore Services
        </button>
      </div>

      {/* Stat counters */}
      <div
        className="mt-16 grid w-full max-w-3xl animate-fade-up grid-cols-3 gap-3 sm:gap-5"
        style={{ animationDelay: '360ms' }}
      >
        <Stat value={500} suffix="+" label="Brands Grown" icon={Users2} />
        <Stat value={10} suffix="M+" label="Audience Reach" icon={TrendingUp} />
        <Stat value={3} suffix="x" label="Average ROI" icon={Rocket} />
      </div>

      {/* Scroll cue */}
      <div className="mt-14 hidden animate-fade-in justify-center sm:flex" style={{ animationDelay: '700ms' }}>
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
