import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingNav from "@/components/WeddingNav";
import WeddingFooter from "@/components/WeddingFooter";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import EventDetails from "./pages/EventDetails";
import HoneymoonFund from "./pages/HoneymoonFund";
import RSVP from "./pages/RSVP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WeddingNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details" element={<EventDetails />} />
          <Route path="/honeymoon-fund" element={<HoneymoonFund />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WeddingFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
