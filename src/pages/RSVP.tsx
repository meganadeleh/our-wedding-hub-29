import { useState } from "react";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { toast } from "sonner";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    song: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.attending) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your RSVP! We can't wait to celebrate with you! 🎉");
    setFormData({ name: "", email: "", attending: "", guests: "1", dietary: "", song: "" });
  };

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="pt-20">
      <Section>
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">We hope you can make it</p>
            <h1 className="text-5xl md:text-6xl font-display italic text-foreground">RSVP</h1>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Please respond by August 1, 2026
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <label className="text-sm text-muted-foreground tracking-wide block mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground tracking-wide block mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground tracking-wide block mb-2">Will you attend? *</label>
              <div className="flex gap-4">
                {["Joyfully Accept", "Regretfully Decline"].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => update("attending", option)}
                    className={`flex-1 py-3 border text-sm transition-colors ${
                      formData.attending === option
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {formData.attending === "Joyfully Accept" && (
              <>
                <div>
                  <label className="text-sm text-muted-foreground tracking-wide block mb-2">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground tracking-wide block mb-2">Dietary Restrictions</label>
                  <input
                    type="text"
                    value={formData.dietary}
                    onChange={(e) => update("dietary", e.target.value)}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Vegetarian, gluten-free, etc."
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground tracking-wide block mb-2">Song Request</label>
                  <input
                    type="text"
                    value={formData.song}
                    onChange={(e) => update("song", e.target.value)}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What song will get you on the dance floor?"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground tracking-widest uppercase text-sm hover:opacity-90 transition-opacity mt-4"
            >
              Send RSVP
            </button>
          </form>
        </FadeIn>
      </Section>
    </div>
  );
};

export default RSVP;
