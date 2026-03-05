import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { MapPin, Clock, Shirt, Car } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Venue",
    items: [
      "Kew Gardens Orangery",
      "Royal Botanic Gardens, Kew",
      "Richmond, London TW9 3AE",
    ],
  },
  {
    icon: Clock,
    title: "Schedule",
    items: [
      "2:00 PM — Ceremony at The Orangery",
      "3:30 PM — Cocktails in The Courtyard",
      "5:00 PM — Dinner & Dancing in The Grand Hall",
      "11:00 PM — Sparkler Send-Off",
    ],
  },
  {
    icon: Shirt,
    title: "Dress Code",
    items: [
      "Black Tie Optional",
      "Ladies: Floor-length gowns or cocktail dresses",
      "Gentlemen: Tuxedos or dark suits",
      "Please avoid white and ivory",
    ],
  },
  {
    icon: Car,
    title: "Accommodations",
    items: [
      "The Bingham Riverhouse — Group rate available",
      "Email us for the booking code",
      "Shuttle service provided to and from the venue",
      "Nearest tube: Kew Gardens (District Line)",
    ],
  },
];

const EventDetails = () => (
  <div className="pt-20">
    <Section>
      <FadeIn>
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-primary/60 mb-6 font-body font-extralight">Everything you need to know</p>
          <h1 className="text-5xl md:text-7xl font-script text-foreground">The Details</h1>
        </div>
      </FadeIn>

      <Divider />

      <div className="space-y-px bg-border/30">
        {details.map((section, i) => (
          <FadeIn key={section.title} delay={i * 0.1}>
            <div className="bg-card p-10 md:p-14">
              <div className="flex items-center gap-4 mb-8">
                <section.icon size={16} className="text-primary/50" strokeWidth={1} />
                <h2 className="font-script text-3xl text-foreground">{section.title}</h2>
              </div>
              <ul className="space-y-3 ml-8">
                {section.items.map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed font-extralight">{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  </div>
);

export default EventDetails;
