const items = [
  "Techno", "House", "Disco", "Acid", "Italo", "Drum & Bass", "Breaks", "Minimal", "Garage", "Dub",
];

const Marquee = () => {
  const row = [...items, ...items, ...items];
  return (
    <section className="relative py-8 border-y border-border bg-card overflow-hidden">
      <div className="marquee font-display text-6xl md:text-8xl uppercase whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="ticker-divider flex items-center text-foreground/90 hover:text-neon-pink transition-colors">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};
export default Marquee;
