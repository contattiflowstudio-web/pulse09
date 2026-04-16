import hero from "@/assets/hero-club.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="PULSE/09 nightclub crowd under magenta and cyan lasers"
          width={1920}
          height={1280}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Live status */}
      <div className="absolute top-28 right-6 md:right-12 z-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse-glow" />
        <span className="text-foreground/90">Open Tonight · 22:00 → Late</span>
      </div>

      {/* Side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <div className="rotate-180 [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          Est. 2009 · Berlin · Saturated Sound System
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 md:px-12 pb-32 pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6 animate-rise">
          ── A Sanctuary for the Sleepless
        </p>
        <h1 className="font-display text-[18vw] md:text-[14vw] leading-[0.85] uppercase animate-rise" style={{animationDelay:'0.1s'}}>
          <span className="block">Lose</span>
          <span className="block text-stroke-pink">Yourself</span>
          <span className="block text-gradient-pulse italic">in sound.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-rise" style={{animationDelay:'0.3s'}}>
          <p className="max-w-md text-foreground/70 text-base leading-relaxed">
            Underground techno, house, and disco — six nights a week. Three rooms, one ritual. Where the city ends and the floor begins.
          </p>
          <div className="flex gap-4">
            <a href="#events" className="group relative font-mono text-xs uppercase tracking-widest bg-neon-pink text-background px-8 py-4 glow-pink hover:bg-foreground transition-colors">
              See Lineup
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest border border-foreground/30 px-8 py-4 hover:border-neon-cyan hover:text-neon-cyan transition-colors">
              Guestlist
            </a>
          </div>
        </div>
      </div>

      {/* Bottom corner stats */}
      <div className="absolute bottom-6 right-6 md:right-12 z-10 font-mono text-[10px] uppercase tracking-widest text-foreground/50 text-right">
        <div>52.5200° N</div>
        <div>13.4050° E</div>
      </div>
    </section>
  );
};
export default Hero;
