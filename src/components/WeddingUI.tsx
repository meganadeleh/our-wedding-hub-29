import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
    <div className="container mx-auto max-w-4xl">{children}</div>
  </section>
);

export const FadeIn = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-12">
    <div className="h-px w-16 bg-border" />
    <span className="text-accent text-2xl font-display">♥</span>
    <div className="h-px w-16 bg-border" />
  </div>
);
