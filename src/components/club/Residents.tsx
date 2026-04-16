import dj1 from "@/assets/dj-1.jpg";
import dj2 from "@/assets/dj-2.jpg";
import dj3 from "@/assets/dj-3.jpg";

const djs = [
  { img: dj1, name: "KAIA NOIR", style: "Resident · Techno", since: "Since 2014" },
  { img: dj2, name: "ROMA", style: "Resident · House / Disco", since: "Since 2017" },
  { img: dj3, name: "VOX/M", style: "Resident · Acid / Breaks", since: "Since 2011" },
  { img: dj1, name: "ELIO", style: "Resident · Minimal", since: "Since 2019" },
];

const Residents = () => {
  return (
    <section id="residents" className="relative py-32 overflow-hidden">
      <div className="px-6 md:px-12 mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">
          ── 03 / The Family
        </p>
        <h2 className="font-display text-6xl md:text-9xl uppercase leading-[0.85]">
          Resident<br /><span className="italic text-gradient-pulse">selectors.</span>
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 snap-x snap-mandatory scrollbar-hide">
        {djs.map((d, i) => (
          <div key={i} className="snap-start shrink-0 w-[80vw] md:w-[28vw] group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                {String(i + 1).padStart(2, "0")} / {String(djs.length).padStart(2, "0")}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-3xl md:text-4xl uppercase leading-none">{d.name}</div>
                <div className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-widest text-foreground/60">
                  <span>{d.style}</span>
                  <span>{d.since}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Residents;
