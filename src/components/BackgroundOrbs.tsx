/**
 * Floating, blurred gradient orbs that create the colorful diffused light
 * behind the glass panels. Fixed-positioned so they stay put while content
 * scrolls over them, reinforcing the layered-glass depth effect.
 */
export function BackgroundOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[#06060A]" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />

      {/* Violet orb - top left */}
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-accent-violet/20 blur-[120px] animate-float" />

      {/* Blue orb - center right */}
      <div className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full bg-accent-blue/20 blur-[120px] animate-float-slow" />

      {/* Teal orb - bottom left */}
      <div className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-accent-teal/15 blur-[140px] animate-float" />

      {/* Indigo orb - mid */}
      <div className="absolute top-2/3 left-1/2 h-[30rem] w-[30rem] rounded-full bg-accent-indigo/15 blur-[130px] animate-float-slow" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,10,0.6)_100%)]" />
    </div>
  );
}
