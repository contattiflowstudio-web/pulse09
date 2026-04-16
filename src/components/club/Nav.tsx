const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#" className="font-display text-2xl tracking-wider text-foreground">
          PULSE<span className="text-neon-pink">/</span>09
        </a>
        <ul className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-widest">
          {["Events", "Residents", "Venue", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-neon-pink transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest border border-foreground/40 px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
        >
          Reserve
        </a>
      </nav>
    </header>
  );
};
export default Nav;
