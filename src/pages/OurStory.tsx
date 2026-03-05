import { Section, FadeIn, Divider } from "@/components/WeddingUI";

const OurStory = () => (
  <div className="pt-20">
    <Section>
      <FadeIn>
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-primary/60 mb-6 font-body font-extralight">How it all began</p>
          <h1 className="text-5xl md:text-7xl font-script text-foreground">Our Story</h1>
        </div>
      </FadeIn>

      <Divider />

      <div className="space-y-24">
        {[
          {
            year: "2019",
            title: "The First Meeting",
            text: "It was a rainy afternoon at a coffee shop in Shoreditch. Megan was reading a novel, and Myles accidentally knocked over her latte. What started as an apology turned into a three-hour conversation that neither wanted to end.",
          },
          {
            year: "2020",
            title: "Falling in Love",
            text: "Through long walks along the Thames, late-night phone calls, and countless adventures across London, we discovered that our hearts were intertwined. Every moment together felt like a page from the most beautiful love story.",
          },
          {
            year: "2024",
            title: "The Proposal",
            text: "On a starlit evening at Primrose Hill, Myles got down on one knee with a ring that had belonged to his grandmother. Through tears of joy, Megan said yes before he could even finish the question.",
          },
          {
            year: "2027",
            title: "The Wedding",
            text: "And now we invite you to be part of the next chapter of our story as we say 'I do' surrounded by the people we love most in the world.",
          },
        ].map((event, i) => (
          <FadeIn key={event.year} delay={i * 0.1}>
            <div className="flex gap-12 items-start">
              <div className="hidden md:flex flex-col items-center">
                <span className="text-3xl font-script text-primary/60">{event.year}</span>
                <div className="w-px h-full bg-border/50 mt-4" />
              </div>
              <div className="flex-1">
                <span className="md:hidden text-xs text-primary/60 font-body tracking-[0.3em] mb-2 block">{event.year}</span>
                <h3 className="font-script text-3xl md:text-4xl text-foreground mb-5">{event.title}</h3>
                <p className="text-muted-foreground leading-loose font-extralight">{event.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  </div>
);

export default OurStory;
