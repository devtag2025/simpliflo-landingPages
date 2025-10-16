"use client"

import React from 'react'
import { Check } from 'lucide-react'

export const Pricing: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">
                        Pricing
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Sandbox Plan */}
                    <div className="border-2 border-ink-900 rounded-2xl p-6 sm:p-8 bg-canvas-50 shadow-lg">
                        <h3 className="text-2xl font-bold text-ink-900 mb-2">Sandbox</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-ink-900">£1</span>
                            <span className="text-ink-900/70 ml-2">one time</span>
                        </div>
                        <p className="text-ink-900/80 mb-6">
                            Try it quickly with a guided demo.<br />
                            No changes to live books.
                        </p>
                        <button className="w-full bg-[#0E7C86] hover:bg-[#14B8A6] text-white rounded-full px-6 py-3 font-semibold transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Starter Plan */}
                    <div className="border-2 border-[#0E7C86] rounded-2xl p-6 sm:p-8 bg-white shadow-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0E7C86] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Popular
                        </div>
                        <h3 className="text-2xl font-bold text-ink-900 mb-2">Starter</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-ink-900">£39</span>
                            <span className="text-ink-900/70 ml-2">per month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">WhatsApp reminders that open Stripe</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Posting to Xero or QuickBooks</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Payout proof files, verified</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Exceptions with Fix and repost</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Support next business day</span>
                            </li>
                        </ul>
                        <button className="w-full bg-[#0E7C86] hover:bg-[#14B8A6] text-white rounded-full px-6 py-3 font-semibold transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="border-2 border-ink-900 rounded-2xl p-6 sm:p-8 bg-canvas-50 shadow-lg">
                        <h3 className="text-2xl font-bold text-ink-900 mb-2">Pro</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-ink-900">£79</span>
                            <span className="text-ink-900/70 ml-2">per month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900 font-semibold">Everything in Starter</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Optional pay link creation when you opt in</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Flexible messaging limits with spend visibility</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Backfill scheduling and higher usage caps</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-[#14B8A6] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-ink-900">Priority support within 24 hours</span>
                            </li>
                        </ul>
                        <button className="w-full bg-[#0E7C86] hover:bg-[#14B8A6] text-white rounded-full px-6 py-3 font-semibold transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Add-ons */}
                <div className="max-w-3xl mx-auto mb-8">
                    <h3 className="text-2xl font-bold text-ink-900 mb-6 text-center">Add-ons</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-ink-900 rounded-xl p-6 bg-white">
                            <div className="flex justify-between items-center">
                                <span className="text-ink-900 font-semibold">Extra user</span>
                                <span className="text-ink-900 font-bold">£5/month</span>
                            </div>
                        </div>
                        <div className="border border-ink-900 rounded-xl p-6 bg-white">
                            <div className="flex justify-between items-center">
                                <span className="text-ink-900 font-semibold">Extra WhatsApp number</span>
                                <span className="text-ink-900 font-bold">£12/month</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Notes */}
                <div className="text-center space-y-2 text-ink-900/70">
                    <p className="text-sm">All prices are in GBP. VAT is applied if applicable.</p>
                    <p className="text-sm font-semibold text-ink-900">Cancel any time. No long contracts.</p>
                </div>
            </div>
        </section>
    )
}
