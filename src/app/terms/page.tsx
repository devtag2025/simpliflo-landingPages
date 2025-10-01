
import React from "react";
import Link from "next/link";

// SEO metadata for Terms & Conditions page
export const metadata = {
  title: "Terms & Conditions | Simpliflow",
  description: "Review Simpliflow's Terms & Conditions: usage policies, data processing, payments, liability, termination, and contact info.",
  keywords: [
    "terms and conditions",
    "terms of use",
    "legal",
    "Simpliflow",
    "Stripe",
    "WhatsApp",
    "Xero",
    "QuickBooks Online",
    "data processing"
  ],
  alternates: {
    canonical: "https://yourdomain.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Simpliflow",
    description: "Review Simpliflow's Terms & Conditions: usage policies, data processing, payments, liability, termination, and contact info.",
    url: "https://yourdomain.com/terms",
    siteName: "Simpliflow",
    images: [
      {
        url: "https://yourdomain.com/og-terms.png",
        width: 1200,
        height: 630,
        alt: "Simpliflow Terms & Conditions",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Simpliflow",
    description: "Review Simpliflow's Terms & Conditions: usage policies, data processing, payments, liability, termination, and contact info.",
    images: ["https://yourdomain.com/og-terms.png"]
  }
};

export default function TermsPage() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center bg-white z-10">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-start px-2 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-purple-700">
          Terms & Conditions
        </h1>
        <div className="text-gray-700 text-sm sm:text-base space-y-6">
          <p>
            These Terms & Conditions (“Terms”) govern your use of the Simpliflow platform and services. By accessing or using Simpliflow, you agree to these Terms.
          </p>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">1. Use of Platform</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simpliflow provides tools for automating accounting, payments, and business processes.</li>
            <li>You agree to use the platform lawfully and not for any fraudulent or unauthorized activity.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">2. Data Processing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Personal and business data is processed to provide platform features (see <Link href="/privacy-policy" className="underline text-purple-600">Privacy Policy</Link>).</li>
            <li>Integrations (Stripe, QBO, Xero, WhatsApp) require your authorization and are used only for agreed features.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">3. Payments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payments are processed securely via Stripe. We do not store payment card details.</li>
            <li>Any applicable fees will be communicated before purchase.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">4. Liability Disclaimer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simpliflow is provided “as is” without warranties of any kind. We are not liable for any direct or indirect losses resulting from use of the platform.</li>
            <li>Third-party integrations (e.g., Stripe, QBO, Xero, WhatsApp) are subject to their own terms.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">5. Account Termination</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We may suspend or terminate your access for breach of these Terms or unlawful activity.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">6. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Changes will be posted on this page. Last updated: October 1, 2025.
          </p>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">7. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <Link href="mailto:legal@simpliflow.com" className="underline text-purple-600">
              legal@simpliflow.com
            </Link>.
          </p>
        </div>
      </div>
    </main>
  );
}