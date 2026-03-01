import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Concept } from "@/components/concept";
import { Atmosphere } from "@/components/atmosphere";
import { Staff } from "@/components/staff";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { StickyBooking } from "@/components/sticky-booking";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Atmosphere />
        <Services />
        <Staff />
      </main>
      <Footer />
      <StickyBooking />
    </div>
  );
}
