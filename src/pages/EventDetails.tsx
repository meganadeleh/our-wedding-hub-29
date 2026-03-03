import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { MapPin, Clock, Shirt, Car } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Venue",
    items: [
      "The Vineyard Estate",
      "1234 Grapevine Lane",
      "Napa Valley, CA 94558",
    ],
  },
  {
    icon: Clock,
    title: "Schedule",
    items: [
      "4:00 PM — Ceremony at The Chapel",
      "5:00 PM — Cocktails on The Terrace",
      "6:30 PM — Dinner & Dancing in The Barrel Room",
      "11:00 PM — Sparkler Send-Off",
    ],
  },
  {
    icon: Shirt,
    title: "Dress Code",
    items: [
      "Semi-formal / Garden Chic",
      "Ladies: Cocktail dresses or jumpsuits",
      "Gentlemen: Suits or sport coats",
      "Please avoid white and off-white",
    ],
  },
  {
    icon: Car,
    title: "Accommodations",
    items: [
      "Napa Valley Lodge — Group rate available",
      "Call (707) 555-0123 and mention 'A&J Wedding'",
      "Shuttle service provided to and from the venue",
      "Parking available on-site",
    ],
  },
];

const EventDetails = () => (
  <div className="pt-20">
    <Section>
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Everything you need to know</p>
          <h1 className="text-5xl md:text-6xl font-display italic text-foreground">Event Details</h1>
        </div>
      </FadeIn>

      <Divider />

      <div className="space-y-12">
        {details.map((section, i) => (
          <FadeIn key={section.title} delay={i * 0.1}>
            <div className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <section.icon size={20} className="text-primary" />
                <h2 className="font-display text-2xl text-foreground">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed">{item}</li>
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
