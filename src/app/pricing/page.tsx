"use client"
import React from 'react'
import { Pricing } from '@/components/home/Pricing'
import { TextEffect } from '@/components/ui/text-effect'

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-24 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6"
                        >
                            Simple, Transparent Pricing
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.3}
                            as="p"
                            className="text-lg sm:text-xl text-ink-900/80 max-w-3xl mx-auto"
                        >
                            Choose the plan that fits your business needs. Start with our Sandbox to try it out, 
                            or jump straight into Starter or Pro for full functionality.
                        </TextEffect>
                    </div>

                    {/* Pricing Component */}
                    <div className="opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.6s_forwards]">
                        <Pricing />
                    </div>
                </div>
            </main>
        </div>
    )
}
