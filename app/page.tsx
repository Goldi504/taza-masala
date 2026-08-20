import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecipesSection from "@/components/RecipesSection";
import CTASection from "@/components/CTASection";
import FeaturesBar from "@/components/FeaturesBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f6f1e7]">
      <Navbar />

      <Hero />

      <StorySection />

      <ProductsSection title={""} />

      <WhyChooseUs />

      <RecipesSection />

      <CTASection />

      <FeaturesBar />

      <Footer />
    </main>
  );
}