"use client"

import React from 'react'
import { TextEffect } from '@/components/ui/text-effect'

export default function TrustPage() {
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
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6"
                        >
                            Simpliflo Trust Centre
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.3}
                            as="p"
                            className="text-lg sm:text-xl text-ink-900/80 max-w-3xl mx-auto"
                        >
                            We take data privacy and security seriously, and these principles guide every part of our business. 
                            Here, you can explore our security practices that demonstrates our commitment to protecting your data.
                        </TextEffect>
                    </div>

                    {/* Our Approach */}
                    <section className="mb-12">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.6}
                            as="h2"
                            className="text-3xl font-bold text-ink-900 mb-4"
                        >
                            Our approach
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.8}
                            as="p"
                            className="text-ink-900/80 text-lg leading-relaxed"
                        >
                            We collect the minimum data needed to run the product. We keep environments isolated. 
                            Payments take place on Stripe hosted pages, so card details never touch Simpliflo.
                        </TextEffect>
                    </section>

                    {/* Main Content */}
                    <section className="mb-12">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={1.0}
                            as="h2"
                            className="text-3xl font-bold text-ink-900 mb-6"
                        >
                            What we do to keep data safe
                        </TextEffect>
                        
                        {/* Data minimisation and isolation */}
                        <div className="mb-8">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={1.2}
                                as="h3"
                                className="text-2xl font-bold text-ink-900 mb-4"
                            >
                                Data minimisation and isolation
                            </TextEffect>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start opacity-0 animate-[fadeIn_0.6s_ease-in-out_1.4s_forwards]">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We store only what is needed to provide the service.</span>
                                </li>
                                <li className="flex items-start opacity-0 animate-[fadeIn_0.6s_ease-in-out_1.5s_forwards]">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Development, Staging, and Production are fully separated with distinct keys and webhooks.</span>
                                </li>
                                <li className="flex items-start opacity-0 animate-[fadeIn_0.6s_ease-in-out_1.6s_forwards]">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Tenant data in Postgres is protected with row level security.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Secure transport and headers */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_1.7s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Secure transport and headers</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>All traffic uses HTTPS.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We set strict security headers on the Website and the Portal. This includes a Content Security Policy with nonces, HSTS with includeSubDomains and preload, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, and a minimal Permissions-Policy.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Session cookies are HttpOnly, Secure, and SameSite Lax.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Sign in and access */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_1.9s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Sign in and access</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Passwordless sign in uses single use magic links with a time to live of fifteen minutes or less. Tokens are hashed or stored as JTIs with used and expired states.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Step up authentication is required for sensitive actions such as plan changes and GDPR delete.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Role based access control covers Owner, Accountant, and Member roles.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Support access is least privilege and time limited.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Payments and accounting */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_2.1s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Payments and accounting</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>WhatsApp reminders open Stripe hosted invoice pages by default. Pro users can enable Quick Pay creation in Settings.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Stripe Connect uses OAuth. When you enable Quick Pay, Simpliflo acts on your connected Stripe account to create pay links, subject to the account permissions.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Simpliflo never collects or stores card numbers. Stripe handles payments and receipts.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We post to Xero or QuickBooks using first party APIs. We attach a payout proof file and verify the attachment by read back.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Webhook integrity and idempotency */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_2.3s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Webhook integrity and idempotency</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Stripe and WhatsApp webhooks are signature verified.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Webhook secrets are rotated. During rotation we accept the current and the next secret for a short period and we record which secret validated each event.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Every accounting entry carries a durable external reference, for example stripe_bt:&#123;id&#125;. We also keep unique keys per tenant to prevent duplicates and to support safe replay.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Corrections are done by reverse and repost. We do not overwrite posted entries.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Consent, cookies, and messaging safety */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_2.5s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Consent, cookies, and messaging safety</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We use WhatsApp Cloud Utility templates and require customer opt in. STOP and START are supported.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>The cookie banner blocks non essential scripts, including analytics, until you accept. You can change your choice at any time and we keep a consent log.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Retention and deletion */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_2.7s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Retention and deletion</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Idempotency and posting metrics are kept for 18 months.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Exceptions and audit logs are kept for 24 months.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Authentication logs are kept for 12 months.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>WhatsApp message metadata is kept for 90 days.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Consent records are kept for at least 24 months.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>A nightly purge job enforces these windows and raises an Incident if a purge fails.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>GDPR delete is available in Settings. We revoke OAuth tokens, delete tenant data according to policy, keep a minimal non personal audit of tenant ID and deletion timestamp, block future logins, and return 410 to future webhooks.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Backups and recovery */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_2.9s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Backups and recovery</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Postgres is managed with high availability and point in time recovery.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We keep a disaster recovery runbook and we drill it on Staging.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Monitoring and incidents */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_3.1s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Monitoring and incidents</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We use structured logs with correlation IDs to trace Stripe, queues, workflows, and accounting calls.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We watch Stripe to accounting latency, exception rate, WhatsApp delivery failure rate, queue depth, and job age.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>If exceptions spike for a tenant, posting is paused for that tenant and an Incident is opened with a runbook link. Status banners keep owners informed.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>If a personal data breach is likely to result in a risk to rights and freedoms, we will notify affected customers without undue delay. We will describe what happened, what data may be affected, and the steps we are taking.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Software quality */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_3.3s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Software quality</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We run unit and contract tests for posting, mapping, exceptions, idempotency, and replay handling.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We run static and dynamic application security testing in CI and CD. Builds fail on high severity findings.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Vendor API versions are pinned and recorded.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Data location and vendors */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_3.5s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Data location and vendors</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Evidence files and assets are stored in the EU where possible.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Analytics is privacy friendly and hosted in the EU, and loads only after consent.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>Some providers may process data outside the UK or EEA. Where this occurs, we use approved safeguards such as Standard Contractual Clauses or the UK International Data Transfer Addendum.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>We keep a public list of sub-processors with purpose and region and we update it when providers change.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Your controls */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_3.7s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Your controls</h3>
                            <ul className="space-y-3 text-ink-900/80 text-lg">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>You can view what was posted and you can see proof files for payouts.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>You can export your tenant configuration from the Portal.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>You can delete your tenant data from Settings at any time.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#0E7C86] font-bold">•</span>
                                    <span>You can submit a data access or deletion request from the Portal or by email. We aim to respond within 30 days.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cookies and analytics */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_3.9s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Cookies and analytics</h3>
                            <p className="text-ink-900/80 text-lg leading-relaxed">
                                Our cookie banner gives you a clear choice. Non essential scripts are off until you accept. 
                                You can return to the banner to change your choice at any time.
                            </p>
                        </div>

                        {/* Contact for privacy and security */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_4.1s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Contact for privacy and security</h3>
                            <p className="text-ink-900/80 text-lg leading-relaxed mb-4">
                                Use the Help form in the Portal or the contact form on the Website to reach us about data protection or security concerns.
                            </p>
                            <p className="text-ink-900/80 text-lg leading-relaxed">
                                We will respond in a timely manner and we will provide additional details on our data practices on request.
                            </p>
                        </div>

                        {/* Legal entity */}
                        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_4.3s_forwards]">
                            <h3 className="text-2xl font-bold text-ink-900 mb-4">Legal entity</h3>
                            <p className="text-ink-900/80 text-lg leading-relaxed">
                                Operated by Simpliflo Ltd, United Kingdom. Company No XXX United Kingdom.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
