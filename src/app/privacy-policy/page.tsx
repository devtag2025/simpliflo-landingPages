
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Simpliflow",
  description: "Read Simpliflow's privacy policy for GDPR-compliant data handling: information we collect, data usage, security, rights, and contact info.",
  keywords: [
    "privacy policy",
    "GDPR",
    "data protection",
    "Simpliflow",
    "Stripe",
    "WhatsApp",
    "Xero",
    "QuickBooks Online",
    "analytics"
  ],
  alternates: {
    // canonical: "https://yourdomain.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Simpliflow",
    description: "Read Simpliflow's privacy policy for GDPR-compliant data handling: information we collect, data usage, security, rights, and contact info.",
    // url: "https://yourdomain.com/privacy-policy",
    siteName: "Simpliflow",
    images: [
      {
        // url: "https://yourdomain.com/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "Simpliflow Privacy Policy",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Simpliflow",
    description: "Read Simpliflow's privacy policy for GDPR-compliant data handling: information we collect, data usage, security, rights, and contact info.",
    // images: ["https://yourdomain.com/og-privacy.png"]
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center z-10">
      {/* Added z-10 and changed from section to main for higher stacking */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-start px-2 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-purple-700">
          Privacy Policy
        </h1>
        <div className="text-gray-700 text-sm sm:text-base space-y-6">
          <p>
            <strong>Simpliflow</strong> (“we”, “us”, “our”) is committed to protecting your personal data and privacy. This policy explains how we collect, use, store, and protect your information when you use our website and services.
          </p>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">1. What Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Email address (when you sign up for early access or contact us)</li>
            <li>Consent status (for GDPR compliance)</li>
            <li>Technical data (cookies, device info, IP address for security/analytics)</li>
            <li>Payment data (via Stripe, processed securely and not stored by us)</li>
            <li>Accounting integration data (QuickBooks Online, Xero, used only for platform functionality)</li>
            <li>WhatsApp communication metadata (if you use WhatsApp features)</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide early access and updates about Simpliflow</li>
            <li>To respond to inquiries and support requests</li>
            <li>To enable platform features that integrate with Stripe, QBO, Xero, and WhatsApp as chosen by you</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">3. Data Sharing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We do <strong>not</strong> sell your data.</li>
            <li>
              We may share data with trusted providers for email delivery, analytics, payments (Stripe), accounting integration (QBO/Xero), and communication (WhatsApp), solely to provide platform services.
            </li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">4. Data Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We use industry-standard security technologies and procedures to protect your data.</li>
            <li>Payment info is processed securely via Stripe.</li>
            <li>Accounting data is only accessed with your permission for platform features.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">5. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can request access, correction, or deletion of your personal data by contacting us.</li>
            <li>You can withdraw your consent at any time.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">6. Cookies & Analytics</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We use cookies to enhance your experience and for analytics.</li>
            <li>You can modify cookie settings in your browser.</li>
          </ul>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">7. Updates to This Policy</h2>
          <p>
            This privacy policy may be updated from time to time. Changes will be posted on this page. Last updated: October 1, 2025.
          </p>

          <h2 className="font-bold text-base sm:text-lg mt-4 mb-1">8. Contact Us</h2>
          <p>
            For any questions or requests regarding your privacy, email{" "}
            <Link href="mailto:privacy@simpliflow.com" className="underline text-purple-600">
              privacy@simpliflow.com
            </Link>.
          </p>
        </div>
      </div>
    </main>
  );
}