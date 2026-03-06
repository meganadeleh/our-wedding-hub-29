import { useState } from "react";
import { Section, FadeIn, Divider } from "@/components/WeddingUI";
import { Heart, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contributionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  address: z.string().trim().min(1, "Address is required for thank you cards").max(500),
  message: z.string().trim().min(1, "Please write us a message").max(1000),
  amount: z.string().trim().min(1, "Please enter an amount"),
});

const HoneymoonFund = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contributionSchema.safeParse({ name, email, address, message, amount });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("log-contribution", {
        body: {
          name: result.data.name,
          email: result.data.email,
          address: result.data.address,
          message: result.data.message,
          amount: result.data.amount,
        },
      });

      if (error) {
        console.error("Error logging contribution:", error);
        toast.error("Something went wrong saving your details. Please try again.");
        setSubmitting(false);
        return;
      }

      // Open PayPal link
      const paypalUrl = `https://www.paypal.me/YOURPAYPALME/${amount}GBP`;
      window.open(paypalUrl, "_blank");

      toast.success(`Thank you ${name}! You'll be redirected to complete your gift of £${amount} 💕`);
      setAmount("");
      setName("");
      setEmail("");
      setAddress("");
      setMessage("");
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <Section>
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.5em] uppercase text-primary/70 mb-6 font-body font-light">
              Help us create memories
            </p>
            <h1 className="text-5xl md:text-7xl font-script text-foreground">Honeymoon Fund</h1>
            <p className="text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed font-light text-lg">
              Your presence at our wedding is the greatest gift. However, if you wish to
              contribute to our honeymoon adventure, we would be incredibly grateful.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Heart size={18} className="text-primary/60" strokeWidth={1.5} />
              <h2 className="font-display text-2xl italic text-foreground">Send a Gift</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">
                  Address (for thank you cards) *
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                  placeholder="Your postal address"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">
                  Amount (£) *
                </label>
                <div className="flex gap-3 mb-4">
                  {[25, 50, 100, 200].map((preset) => (
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
                  required
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-3 font-light">
                  Message *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                  placeholder="Write a message to Megan & Myles..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-primary text-primary-foreground tracking-[0.3em] uppercase text-xs hover:opacity-90 transition-opacity mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? "Processing..." : (
                  <>
                    <span>Send Gift via PayPal</span>
                    <ExternalLink size={14} />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-muted-foreground/50 text-center mt-8 font-light">
              You'll be securely redirected to PayPal to complete your payment.
            </p>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export default HoneymoonFund;
