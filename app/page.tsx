import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Building from "@/components/building";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <Building />
      <Footer />
    </main>
  );
}
