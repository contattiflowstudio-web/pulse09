import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">
            ── 04 / Inside
          </p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
            Pictures don't<br /><span className="text-stroke-pink">do it justice.</span>
          </h2>
          <p className="mt-6 text-foreground/60 max-w-sm">
            But you can try. Strictly no phones on the dance floor — these are from the safe zones.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 grid grid-cols-6 grid-rows-2 gap-4 md:gap-6 h-[80vh]">
          <div className="col-span-4 row-span-2 overflow-hidden group">
            <img src={g1} alt="Laser beams over dance floor" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="col-span-2 overflow-hidden group">
            <img src={g3} alt="Disco ball detail" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="col-span-1 overflow-hidden group">
            <img src={g2} alt="Neon backlit cocktail" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="col-span-1 overflow-hidden group bg-card flex items-center justify-center">
            <span className="font-display text-5xl text-neon-pink animate-flicker">/09</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-12 mt-4">
          <div className="aspect-[21/7] overflow-hidden">
            <img src={g4} alt="Crowd silhouettes in red light" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
