import { Section, FadeIn, Divider } from "@/components/WeddingUI";

const OurStory = () => (
  <div className="pt-20">
    <Section>
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">How it all began</p>
          <h1 className="text-5xl md:text-6xl font-display italic text-foreground">Our Story</h1>
        </div>
      </FadeIn>

      <Divider />

      <div className="space-y-16">
        {[
          {
            year: "2019",
            title: "The First Meeting",
            text: "It was a rainy afternoon at a coffee shop downtown. Amelia was reading a novel, and James accidentally knocked over her latte. What started as an apology turned into a three-hour conversation that neither wanted to end.",
          },
          {
            year: "2020",
            title: "Falling in Love",
            text: "Through long walks, late-night phone calls, and countless adventures, we discovered that our hearts were intertwined. Every moment together felt like a page from the most beautiful love story.",
          },
          {
            year: "2023",
            title: "The Proposal",
            text: "On a starlit evening overlooking the Pacific Ocean, James got down on one knee with a ring that had belonged to his grandmother. Through tears of joy, Amelia said yes before he could even finish the question.",
          },
          {
            year: "2026",
            title: "The Wedding",
            text: "And now we invite you to be part of the next chapter of our story as we say 'I do' surrounded by the people we love most in the world.",
          },
        ].map((event, i) => (
          <FadeIn key={event.year} delay={i * 0.1}>
            <div className="flex gap-8 items-start">
              <div className="hidden md:block w-20 text-right">
                <span className="text-2xl font-display text-accent">{event.year}</span>
              </div>
              <div className="hidden md:block w-px bg-border self-stretch" />
              <div className="flex-1">
                <span className="md:hidden text-sm text-accent font-display mb-1 block">{event.year}</span>
                <h3 className="font-display text-2xl italic text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  </div>
);

export default OurStory;
