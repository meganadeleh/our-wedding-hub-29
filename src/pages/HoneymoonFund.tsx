import { useState } from "react";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { Heart, Plane, UtensilsCrossed, Waves, Camera } from "lucide-react";
import { toast } from "sonner";

const fundItems = [
  { icon: Plane, title: "Flights to Bali", goal: 2000, desc: "Help us fly to paradise" },
  { icon: UtensilsCrossed, title: "Fine Dining", goal: 500, desc: "Unforgettable culinary experiences" },
  { icon: Waves, title: "Private Beach Villa", goal: 1200, desc: "A week in our own slice of heaven" },
  { icon: Camera, title: "Photography", goal: 400, desc: "Capture our honeymoon memories" },
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
    toast.success(`Thank you ${name}! Your gift of £${amount} means the world to us! 💕`);
    setAmount("");
    setName("");
    setMessage("");
    setSelectedItem(null);
  };

  return (
    <div className="pt-20">
      <Section>
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.5em] uppercase text-primary/70 mb-6 font-body font-light">Help us create memories</p>
            <h1 className="text-5xl md:text-7xl font-display italic text-foreground">Honeymoon Fund</h1>
            <p className="text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed font-light text-lg">
              Your presence at our wedding is the greatest gift. However, if you wish to
              contribute to our honeymoon, we would be incredibly grateful.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <div className="grid md:grid-cols-2 gap-px bg-border mb-20">
          {fundItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <button
                onClick={() => setSelectedItem(item.title)}
                className={`w-full text-left p-8 transition-all duration-500 ${
                  selectedItem === item.title
                    ? "bg-primary/10"
                    : "bg-card hover:bg-secondary"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon size={16} className="text-primary/70" strokeWidth={1.5} />
                  <h3 className="font-display text-lg italic text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                {item.goal > 0 && (
                  <p className="text-xs text-primary/50 mt-3 tracking-wide">Goal: £{item.goal}</p>
                )}
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="max-w-md mx-auto">
            <h2 className="font-display text-2xl italic text-center text-foreground mb-10">
              {selectedItem ? `Contributing to: ${selectedItem}` : "Send a Gift"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">Amount (£)</label>
                <div className="flex gap-3 mb-4">
                  {[50, 100, 200, 500].map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setAmount(String(preset))}
                      className={`flex-1 py-3 border text-sm transition-all duration-300 ${
                        amount === String(preset)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      £{preset}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500"
                  placeholder="Or enter custom amount"
                  min="1"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">Message (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                  placeholder="Write a note to the couple..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground tracking-[0.3em] uppercase text-xs hover:opacity-90 transition-opacity mt-4"
              >
                Send Gift
              </button>
            </form>
            <p className="text-xs text-muted-foreground/40 text-center mt-8 font-light">
              This is a placeholder. For real payments, connect Stripe, PayPal, or bank transfer details.
            </p>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export default HoneymoonFund;
