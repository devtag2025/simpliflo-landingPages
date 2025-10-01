// NO "use client" here!
import HelpCenterClient from "../../components/HelpCenterClient";

// SEO metadata
export const metadata = {
  title: "Help Center | Simpliflow",
  description: "Find answers, guides, and troubleshooting tips for Simpliflow. Browse Getting Started, Account Setup, FAQs, and Troubleshooting articles.",
  keywords: [
    "help center", "knowledge base", "Simpliflow", "getting started", "account setup", "FAQ", "troubleshooting", "support"
  ],
  alternates: {
    // canonical: "https://yourdomain.com/help-center",
  },
  openGraph: {
    title: "Help Center | Simpliflow",
    description: "Find answers, guides, and troubleshooting tips for Simpliflow.",
    // url: "https://yourdomain.com/help-center",
    siteName: "Simpliflow",
    images: [
      {
        // url: "https://yourdomain.com/og-help-center.png",
        width: 1200,
        height: 630,
        alt: "Simpliflow Help Center",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Simpliflow",
    description: "Find answers, guides, and troubleshooting tips for Simpliflow.",
    // images: ["https://yourdomain.com/og-help-center.png"]
  }
};

export default function HelpCenterPage() {
  return <HelpCenterClient />;
}