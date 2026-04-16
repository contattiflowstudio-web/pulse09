const Footer = () => {
  const items = ["Pulse", "Pulse", "Pulse", "Pulse", "Pulse", "Pulse"];
  return (
    <footer className="relative pt-20 border-t border-border overflow-hidden">
      <div className="marquee marquee-slow font-display text-[20vw] uppercase leading-none text-stroke-pink whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="px-6">{t}/09</span>
        ))}
      </div>

      <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between gap-6 font-mono text-[11px] uppercase tracking-widest text-foreground/50 border-t border-border mt-10">
        <div>© 2025 Pulse/09 — All floors reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neon-pink">Instagram</a>
          <a href="#" className="hover:text-neon-pink">RA</a>
          <a href="#" className="hover:text-neon-pink">SoundCloud</a>
          <a href="#" className="hover:text-neon-pink">Imprint</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
