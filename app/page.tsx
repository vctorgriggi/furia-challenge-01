import BannerNewFeature from "@/components/banner-new-feature";
import Chatbot from "@/components/chatbot";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { SectionDemo } from "@/components/header";
import { Feature } from "@/components/feature-section-with-bento-grid";

export default function HomePage() {
  return (
    <main>
      <div className="mb-16">
        <Navbar />
      </div>

      <BannerNewFeature />
      <SectionDemo />
      <Feature />
      <Footer />
      <Chatbot />
    </main>
  );
}
