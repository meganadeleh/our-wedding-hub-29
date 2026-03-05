import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative text-center z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-foreground/50 text-xs tracking-[0.5em] uppercase mb-10 font-body font-light"
          >
            Together with their families
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="text-7xl md:text-9xl font-script text-foreground leading-none"
          >
            Megan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-primary/80 text-2xl font-display italic my-3 tracking-widest"
          >
            &
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2 }}
            className="text-7xl md:text-9xl font-script text-foreground leading-none"
          >
            Myles
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <div className="w-12 h-px bg-primary/40 mx-auto my-10" />
            <p className="text-foreground/60 text-sm tracking-[0.4em] font-body font-extralight">
              12 · 06 · 2027
            </p>
            <p className="text-foreground/40 text-xs tracking-[0.4em] uppercase mt-2 font-body font-light">
              London, England
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.3 }}
          >
            <Link
              to="/rsvp"
              className="inline-block mt-14 px-12 py-4 border border-primary/30 text-primary/90 text-[10px] tracking-[0.4em] uppercase hover:bg-primary/5 hover:border-primary/50 transition-all duration-700 font-body"
            >
              RSVP
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-px h-14 bg-gradient-to-b from-transparent to-primary/30"
          />
        </motion.div>
      </div>

      {/* Intro */}
      <Section>
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/60 mb-6 font-body font-extralight">
              An Invitation
            </p>
            <h2 className="text-4xl md:text-6xl font-script text-foreground mb-8">
              A Celebration of Love
            </h2>
            <p className="text-muted-foreground leading-loose max-w-2xl mx-auto font-extralight text-lg">
              We joyfully invite you to share in our happiness as we exchange vows and begin
              our new life together. Your presence would mean the world to us on this special day.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-px bg-border/50">
            {[
              { label: "Ceremony", time: "2:00 PM", detail: "The Chapel" },
              { label: "Cocktails", time: "3:30 PM", detail: "The Courtyard" },
              { label: "Reception", time: "5:00 PM", detail: "The Grand Hall" },
            ].map((item) => (
              <div key={item.label} className="p-12 bg-background text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50 mb-4 font-body">{item.label}</p>
                <p className="text-3xl font-script text-foreground mb-2">{item.time}</p>
                <p className="text-sm text-muted-foreground font-extralight">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Quick links */}
      <div className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-px bg-border/50">
              {[
                { to: "/our-story", title: "Our Story", desc: "How it all began" },
                { to: "/details", title: "The Details", desc: "Everything you need to know" },
                { to: "/honeymoon-fund", title: "Honeymoon Fund", desc: "Help us create memories" },
                { to: "/rsvp", title: "RSVP", desc: "Let us know you're coming" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group p-14 bg-card hover:bg-secondary/50 transition-all duration-700 text-center"
                >
                  <h3 className="font-script text-3xl text-foreground group-hover:text-primary transition-colors duration-500">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 font-extralight tracking-wider">{link.desc}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Index;
