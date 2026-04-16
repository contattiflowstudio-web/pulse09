const hours = [
  ["Monday", "Closed"],
  ["Tuesday", "Closed"],
  ["Wednesday", "23:00 — 06:00"],
  ["Thursday", "23:00 — 07:00"],
  ["Friday", "23:00 — 10:00"],
  ["Saturday", "23:00 — 12:00"],
  ["Sunday", "00:00 — 14:00"],
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--gradient-radial-glow)" }} />

      <div className="relative grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">
            ── 05 / Find Us
          </p>
          <h2 className="font-display text-7xl md:text-[12rem] uppercase leading-[0.82]">
            Door <span className="italic text-gradient-pulse">opens</span><br />
            at <span className="text-neon-pink">23:00.</span>
          </h2>
          <p className="mt-8 text-xl text-foreground/70 max-w-xl">
            No bookings, no list — just turn up. Come early, dress how you feel, leave when the sun's properly up.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#" className="font-mono text-xs uppercase tracking-widest bg-neon-pink text-background px-8 py-4 glow-pink hover:bg-foreground transition-colors">
              Table Reservation
            </a>
            <a href="#" className="font-mono text-xs uppercase tracking-widest border border-foreground/30 px-8 py-4 hover:border-neon-cyan hover:text-neon-cyan transition-colors">
              Newsletter →
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:pt-32">
          <div className="border border-border bg-card/40 backdrop-blur p-8 space-y-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-neon-cyan mb-2">Address</div>
              <div className="font-display text-2xl uppercase leading-tight">
                Köpenicker Str. 70<br />10179 Berlin
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-neon-cyan mb-3">Hours</div>
              <ul className="font-mono text-sm space-y-2">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-foreground/70">{d}</span>
                    <span className={h === "Closed" ? "text-foreground/30" : "text-foreground"}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-neon-cyan mb-2">Contact</div>
              <a href="mailto:door@pulse09.club" className="font-mono text-sm hover:text-neon-pink transition-colors block">door@pulse09.club</a>
              <a href="#" className="font-mono text-sm hover:text-neon-pink transition-colors block">@pulse09.berlin</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
