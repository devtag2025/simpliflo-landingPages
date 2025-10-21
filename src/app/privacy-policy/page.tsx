
import React from "react";
import { TextEffect } from '@/components/ui/text-effect';

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
  openGraph: {
    title: "Privacy Policy | Simpliflow",
    description: "Read Simpliflow's privacy policy for GDPR-compliant data handling: information we collect, data usage, security, rights, and contact info.",
    siteName: "Simpliflow",
    images: [
      {
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
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--ink-900)] mb-6"
            >
              Privacy Policy
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.3}
              as="p"
              className="text-lg sm:text-xl text-[var(--ink-900)]/80 max-w-3xl mx-auto"
            >
              Simpliflow is committed to protecting your personal data and privacy. This policy explains how we collect, use, store, and protect your information when you use our website and services.
            </TextEffect>
          </div>

          {/* Main Content */}
          <section className="mb-12">
            {/* What Information We Collect */}
            <div className="mb-8">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.6}
                as="h2"
                className="text-3xl font-bold text-[var(--ink-900)] mb-6"
              >
                What Information We Collect
              </TextEffect>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Email address (when you sign up for early access or contact us)
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Consent status (for GDPR compliance)
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Technical data (cookies, device info, IP address for security/analytics)
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Payment data (via Stripe, processed securely and not stored by us)
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Accounting integration data (QuickBooks Online, Xero, used only for platform functionality)
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  WhatsApp communication metadata (if you use WhatsApp features)
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  To provide early access and updates about Simpliflow
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  To respond to inquiries and support requests
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  To enable platform features that integrate with Stripe, QBO, Xero, and WhatsApp as chosen by you
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  To improve our website and services
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  To comply with legal obligations
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Data Sharing
              </h2>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  We do not sell your data.
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  We may share data with trusted providers for email delivery, analytics, payments (Stripe), accounting integration (QBO/Xero), and communication (WhatsApp), solely to provide platform services.
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Data Security
              </h2>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  We use industry-standard security technologies and procedures to protect your data.
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Payment info is processed securely via Stripe.
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  Accounting data is only accessed with your permission for platform features.
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Your Rights
              </h2>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  You can request access, correction, or deletion of your personal data by contacting us.
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  You can withdraw your consent at any time.
                </li>
              </ul>
            </div>

            {/* Cookies & Analytics */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Cookies & Analytics
              </h2>
              <ul className="space-y-3 text-[var(--ink-900)]/80 text-lg">
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  We use cookies to enhance your experience and for analytics.
                </li>
                <li>
                  <span className="mr-3 text-[var(--teal-deep)] font-bold">•</span>
                  You can modify cookie settings in your browser.
                </li>
              </ul>
            </div>

            {/* Updates to This Policy */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Updates to This Policy
              </h2>
              <p className="text-[var(--ink-900)]/80 text-lg leading-relaxed">
                This privacy policy may be updated from time to time. Changes will be posted on this page. Last updated: October 1, 2025.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--ink-900)] mb-6">
                Contact Us
              </h2>
              <p className="text-[var(--ink-900)]/80 text-lg leading-relaxed">
                For any questions or requests regarding your privacy, email{" "}
                <a href="mailto:privacy@simpliflow.com" className="underline text-[var(--teal-deep)]">
                  privacy@simpliflow.com
                </a>.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}