"use client"

import React from 'react'
import Link from 'next/link'
import { Shield, Lock, FileCheck, Database, Key, Bell } from 'lucide-react'

export const TrustSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-canvas-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">
                        Trust
                    </h2>
                </div>

                {/* Trust Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
                    {/* Stripe hosted payments */}
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8 text-[#0E7C86]" />
                        </div>
                        <h3 className="text-xl font-bold text-ink-900 mb-2">
                            Stripe hosted payments
                        </h3>
                        <p className="text-ink-900/70">
                            Card details never touch Simpliflo.
                        </p>
                    </div>

                    {/* Signature verified webhooks */}
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                            <Key className="w-8 h-8 text-[#0E7C86]" />
                        </div>
                        <h3 className="text-xl font-bold text-ink-900 mb-2">
                            Signature verified webhooks
                        </h3>
                        <p className="text-ink-900/70">
                            Every inbound event is checked.
                        </p>
                    </div>

                    {/* No duplicate postings */}
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                            <FileCheck className="w-8 h-8 text-[#0E7C86]" />
                        </div>
                        <h3 className="text-xl font-bold text-ink-900 mb-2">
                            No duplicate postings
                        </h3>
                        <p className="text-ink-900/70">
                            Your books do not get double entries.
                        </p>
                    </div>

                    {/* Payout proof file */}
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                            <Database className="w-8 h-8 text-[#0E7C86]" />
                        </div>
                        <h3 className="text-xl font-bold text-ink-900 mb-2">
                            Payout proof file
                        </h3>
                        <p className="text-ink-900/70">
                            Attached and verified after upload.
                        </p>
                    </div>

                    {/* GDPR delete */}
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-[#0E7C86]/10 flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-[#0E7C86]" />
                        </div>
                        <h3 className="text-xl font-bold text-ink-900 mb-2">
                            GDPR delete in Settings
                        </h3>
                        <p className="text-ink-900/70">
                            You can remove your tenant data.
                        </p>
                    </div>

                    {/* Security & Privacy Link */}
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-white border border-ink-900 rounded-2xl shadow-sm">
                        <Link 
                            href="/trust" 
                            className="text-[#0E7C86] hover:text-[#14B8A6] underline text-lg font-semibold transition-colors"
                        >
                            More on Security and Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
