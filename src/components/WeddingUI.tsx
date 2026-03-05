import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-24 md:py-36 px-6 ${className}`}>
    <div className="container mx-auto max-w-4xl">{children}</div>
  </section>
);

export const FadeIn = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Divider = () => (
  <div className="flex items-center justify-center gap-8 my-20">
    <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/20" />
    <span className="text-primary/40 text-[10px] font-body tracking-[0.5em]">✦</span>
    <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/20" />
  </div>
);
