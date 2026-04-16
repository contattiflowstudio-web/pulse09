const events = [
  { date: "FRI 18.04", title: "Subterranean", artists: "Nina Kraviz · DJ Stingray · Local Heroine", room: "Main Hall", tag: "Techno", price: "€22" },
  { date: "SAT 19.04", title: "Disco Inferno", artists: "Honey Dijon · Dimitri from Paris", room: "Mirror Room", tag: "Disco / House", price: "€25" },
  { date: "THU 24.04", title: "Acid Communion", artists: "Helena Hauff · DJ Bone", room: "Basement", tag: "Acid / EBM", price: "€18" },
  { date: "FRI 25.04", title: "Aftermath", artists: "Ben UFO · Avalon Emerson · Job Jobse", room: "Main Hall", tag: "House", price: "€22" },
  { date: "SAT 26.04", title: "Sirens", artists: "Peggy Gou · Jamie xx (b2b)", room: "All Floors", tag: "Special", price: "€35" },
];

const Events = () => {
  return (
    <section id="events" className="relative py-32 px-6 md:px-12">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">
            ── 02 / What's Coming
          </p>
          <h2 className="font-display text-6xl md:text-9xl uppercase leading-[0.85]">
            Upcoming<br /><span className="text-stroke">nights</span>
          </h2>
        </div>
        <a href="#" className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-neon-pink">
          Full calendar →
        </a>
      </div>

      <div className="border-t border-border">
        {events.map((e, i) => (
          <a
            href="#"
            key={i}
            className="group relative grid grid-cols-12 gap-4 items-center border-b border-border py-8 px-2 hover:bg-card transition-colors"
          >
            <div className="absolute left-0 top-0 h-full w-0 bg-neon-pink group-hover:w-1 transition-all" />
            <div className="col-span-6 md:col-span-2 font-mono text-xs uppercase tracking-widest text-foreground/60 group-hover:text-neon-pink transition-colors">
              {e.date}
            </div>
            <div className="col-span-12 md:col-span-4 font-display text-3xl md:text-5xl uppercase">
              {e.title}
            </div>
            <div className="col-span-12 md:col-span-3 text-foreground/70 text-sm">
              {e.artists}
            </div>
            <div className="hidden md:block col-span-2 font-mono text-[11px] uppercase tracking-widest text-foreground/50">
              {e.room} <span className="text-neon-cyan">/</span> {e.tag}
            </div>
            <div className="col-span-6 md:col-span-1 text-right font-display text-2xl text-neon-pink">
              {e.price}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Events;
