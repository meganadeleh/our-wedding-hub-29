import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative text-center z-10"
        >
          <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 font-body">
            We're getting married
          </p>
          <h1 className="text-6xl md:text-8xl font-display italic text-primary-foreground leading-tight">
            Amelia <span className="font-normal">&</span> James
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl mt-6 tracking-widest font-body">
            September 14, 2026 · Napa Valley
          </p>
          <Link
            to="/rsvp"
            className="inline-block mt-10 px-8 py-3 border border-primary-foreground/60 text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            RSVP Now
          </Link>
        </motion.div>
      </div>

      {/* Intro */}
      <Section>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Join us for</p>
            <h2 className="text-4xl md:text-5xl font-display italic text-foreground mb-6">
              A Celebration of Love
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We joyfully invite you to share in our happiness as we exchange vows and begin
              our new life together. Your presence would mean the world to us on this special day.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Ceremony", time: "4:00 PM", detail: "The Vineyard Chapel" },
              { label: "Cocktail Hour", time: "5:00 PM", detail: "The Garden Terrace" },
              { label: "Reception", time: "6:30 PM", detail: "The Grand Barrel Room" },
            ].map((item) => (
              <div key={item.label} className="p-6">
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.label}</p>
                <p className="text-2xl font-display text-foreground mb-1">{item.time}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Quick links */}
      <div className="bg-muted py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { to: "/our-story", title: "Our Story", desc: "How it all began..." },
                { to: "/details", title: "Event Details", desc: "Everything you need to know" },
                { to: "/honeymoon-fund", title: "Honeymoon Fund", desc: "Help us create memories" },
                { to: "/rsvp", title: "RSVP", desc: "Let us know you're coming" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
                >
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{link.desc}</p>
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
