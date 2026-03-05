const WeddingFooter = () => (
  <footer className="py-20 px-6 border-t border-border/30 text-center">
    <div className="flex items-center justify-center gap-0 mb-4">
      <span className="font-display text-2xl italic text-foreground/70 tracking-wider">M</span>
      <span className="text-primary/40 text-xs mx-2 font-extralight">|</span>
      <span className="font-display text-2xl italic text-foreground/70 tracking-wider">M</span>
    </div>
    <p className="font-script text-2xl text-foreground/50 mb-3">Megan & Myles</p>
    <p className="text-[10px] text-muted-foreground/60 tracking-[0.4em] uppercase font-body font-extralight">
      June 12, 2027 · London
    </p>
    <div className="w-6 h-px bg-primary/20 mx-auto mt-10 mb-4" />
    <p className="text-[10px] text-muted-foreground/30 font-body font-extralight tracking-wider">Made with love</p>
  </footer>
);

export default WeddingFooter;
