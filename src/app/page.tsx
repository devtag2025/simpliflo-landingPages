
export const metadata = {
  title: "Simpliflow – AI-First Outbound Platform",
  description: "Equip your team with best-in-class outbound tools and AI BDR Ava to automate your entire outbound workflow.",
  keywords: ["AI outbound", "automation", "Simpliflow", "sales automation", "BDR Ava", "account setup", "troubleshooting", "help center"],
  alternates: {
    // canonical: "https://yourdomain.com/",
  },
  openGraph: {
    title: "Simpliflow – AI-First Outbound Platform",
    description: "Automate your team's outbound workflow with Simpliflow and AI BDR Ava.",
    url: "https://yourdomain.com/",
    siteName: "Simpliflow",
    images: [
      {
        // url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simpliflow Outbound Automation",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simpliflow – AI-First Outbound Platform",
    description: "Automate your team's outbound workflow with Simpliflow and AI BDR Ava.",
    images: ["https://yourdomain.com/og-image.png"]
  }
};

// The rest of your Home component
import HeroSection from "../components/home/HeroSection";
import ValueSections from "@/components/home/ValueSection";
import ShowcaseBlock from "@/components/home/showcase";
import ContactForm from "@/components/home/ContactForm";
import AboutPage from "@/components/home/about";

export default function Home() {
  return (
    <div className="relative z-10">
      <HeroSection />
      <AboutPage />
      <ValueSections />
      <ShowcaseBlock />
      <ContactForm />
    </div>
  );
}