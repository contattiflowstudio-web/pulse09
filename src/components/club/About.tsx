const stats = [
  { n: "15", l: "Years on the floor" },
  { n: "3", l: "Rooms · 3 sound worlds" },
  { n: "1.2k", l: "Capacity, no compromise" },
  { n: "06", l: "Nights / week" },
];

const About = () => {
  return (
    <section id="venue" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-neon-violet/10 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">
            ── 01 / The Place
          </p>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
            A church for <span className="text-gradient-pulse italic">people who </span>refuse to sleep.
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-8">
          <p className="text-xl leading-relaxed text-foreground/80">
            Hidden behind an unmarked door in an old power station, PULSE/09 has been the city's most defiant dance floor since 2009. No phones on the floor. No dress code. No genre. Just an obsession with sound, light, and the people who chase them until sunrise.
          </p>
          <p className="text-foreground/60 leading-relaxed">
            Built around a custom-tuned Funktion-One rig and a 14-meter laser canopy, every room is engineered for one thing: dissolving the space between the body and the bass.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border mt-12">
            {stats.map((s) => (
              <div key={s.l} className="bg-background p-8 hover:bg-card transition-colors group">
                <div className="font-display text-6xl text-neon-pink group-hover:text-neon-cyan transition-colors">
                  {s.n}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/60 mt-3">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
