"use client"

import React from 'react'
import { MessageCircle, CreditCard, FileText, BookOpen } from 'lucide-react'

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-canvas-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">
                        How It Works
                    </h2>
                </div>

                {/* Horizontal Flow Diagram */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Arrow Line */}
                    <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-0.5 bg-ink-900/20">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-ink-900/20 border-y-4 border-y-transparent"></div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {/* Step 1: WhatsApp */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border-2 border-ink-900 flex items-center justify-center mb-4 shadow-md">
                                <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 text-[#0E7C86]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">
                                WhatsApp
                            </h3>
                            <p className="text-base sm:text-lg font-semibold text-ink-900 mb-1">
                                Reminder sent
                            </p>
                            <p className="text-sm text-ink-900/70">
                                Pay now opens Stripe
                            </p>
                        </div>

                        {/* Step 2: Stripe */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border-2 border-ink-900 flex items-center justify-center mb-4 shadow-md">
                                <CreditCard className="w-16 h-16 sm:w-20 sm:h-20 text-[#0E7C86]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">
                                Stripe
                            </h3>
                            <p className="text-base sm:text-lg font-semibold text-ink-900 mb-1">
                                Hosted invoice page
                            </p>
                            <p className="text-sm text-ink-900/70">
                                Payment completed
                            </p>
                        </div>

                        {/* Step 3: Simpliflo Portal */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border-2 border-ink-900 flex items-center justify-center mb-4 shadow-md">
                                <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-[#0E7C86]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">
                                Simpliflo Portal
                            </h3>
                            <p className="text-base sm:text-lg font-semibold text-ink-900 mb-1">
                                Postings and proof
                            </p>
                            <p className="text-sm text-ink-900/70">
                                Exceptions, fix and repost
                            </p>
                        </div>

                        {/* Step 4: Xero or QuickBooks */}
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white border-2 border-ink-900 flex items-center justify-center mb-4 shadow-md">
                                <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-[#0E7C86]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">
                                Xero or QuickBooks
                            </h3>
                            <p className="text-base sm:text-lg font-semibold text-ink-900 mb-1">
                                Clean journals
                            </p>
                            <p className="text-sm text-ink-900/70">
                                Payout proof attached
                            </p>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-12 text-center">
                        <p className="text-base sm:text-lg text-ink-900/80 max-w-2xl mx-auto">
                            Payments happen on Stripe. Posting and proof happen in Simpliflo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
