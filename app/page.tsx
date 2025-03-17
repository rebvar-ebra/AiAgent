import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import WorkingSection from "./components/Working";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <HeroSection />
      {/* Features section */}
      <Features />
      {/* How is working */}
      <WorkingSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
