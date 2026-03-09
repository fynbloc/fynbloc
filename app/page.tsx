import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import SolutionsSection from "@/components/solutions";
import ComplianceSection from "@/components/compliance";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
