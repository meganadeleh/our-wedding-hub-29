import { useState } from "react";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { Heart, Plane, UtensilsCrossed, Waves, Camera } from "lucide-react";
import { toast } from "sonner";

const fundItems = [
  { icon: Plane, title: "Flights to Italy", goal: 2000, desc: "Help us fly to the land of romance" },
  { icon: UtensilsCrossed, title: "Romantic Dinners", goal: 500, desc: "Candlelit meals in Tuscany" },
  { icon: Waves, title: "Amalfi Coast Boat Tour", goal: 800, desc: "Sailing the Mediterranean" },
  { icon: Camera, title: "Photography Experience", goal: 400, desc: "Capture our honeymoon memories" },
  { icon: Heart, title: "General Fund", goal: 0, desc: "Any contribution is deeply appreciated" },
];

const HoneymoonFund = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !name) {
      toast.error("Please fill in your name and amount");
      return;
    }
    toast.success(`Thank you ${name}! Your gift of $${amount} means the world to us! 💕`);
    setAmount("");
    setName("");
    setMessage("");
    setSelectedItem(null);
  };

  return (
    <div className="pt-20">
      <Section>
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Help us create memories</p>
            <h1 className="text-5xl md:text-6xl font-display italic text-foreground">Honeymoon Fund</h1>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
              Your presence at our wedding is the greatest gift of all. However, if you wish to
              contribute to our honeymoon in Italy, we would be incredibly grateful.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {fundItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <button
                onClick={() => setSelectedItem(item.title)}
                className={`w-full text-left p-6 border transition-all duration-300 ${
                  selectedItem === item.title
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon size={18} className="text-primary" />
                  <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {item.goal > 0 && (
                  <p className="text-xs text-accent mt-2 font-medium">Goal: ${item.goal}</p>
                )}
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="max-w-md mx-auto">
            <h2 className="font-display text-2xl text-center text-foreground mb-8">
              {selectedItem ? `Contributing to: ${selectedItem}` : "Send a Gift"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-muted-foreground tracking-wide block mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground tracking-wide block mb-2">Amount ($)</label>
                <div className="flex gap-3 mb-3">
                  {[50, 100, 200, 500].map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setAmount(String(preset))}
                      className={`flex-1 py-2 border text-sm transition-colors ${
                        amount === String(preset)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Or enter custom amount"
                  min="1"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground tracking-wide block mb-2">Message (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Write a note to the couple..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
              >
                Send Gift
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-6">
              Note: This is a placeholder form. For real payments, connect a payment provider like Venmo, PayPal, or Zelle.
            </p>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export default HoneymoonFund;
