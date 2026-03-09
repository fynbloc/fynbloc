import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CompliancePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#000000]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 flex flex-col items-center justify-center text-center px-6">
                <div className="mb-6 inline-flex items-center rounded-full border border-[#FF835D]/30 px-4 py-1.5 bg-[#FF835D]/10">
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#FF835D]">
                        INSTITUTIONAL STANDARD
                    </span>
                </div>
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white mb-4">
                    Compliance & AML
                </h1>
                <h2 className="text-[20px] md:text-[28px] font-medium text-white mb-6">
                    Commitment to Regulatory Integrity
                </h2>
                <p className="max-w-[700px] text-[15px] md:text-[16px] leading-[1.6] text-[#A0A0A0] mx-auto">
                    Fynbloc Labs adheres to the highest standards of PMLA and FIU-IND regulations to ensure a secure, transparent, and compliant institutional ecosystem for digital assets.
                </p>
            </section>

            {/* Regulatory Framework Section */}
            <section className="relative py-20 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left side */}
                    <div className="w-full lg:w-[350px] shrink-0 sticky top-32">
                        <h2 className="text-[36px] md:text-[44px] leading-[1.1] tracking-tight mb-6 flex flex-col">
                            <span className="font-light text-white">REGULATORY</span>
                            <span className="font-bold text-white">FRAMEWORK</span>
                        </h2>
                        <p className="text-[15px] leading-[1.6] text-[#A0A0A0]">
                            A multi-dimensional approach to security, designed for those who require absolute structural integrity in digital finance.
                        </p>
                    </div>

                    {/* Right side Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                        {/* Card 1 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A]">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                01 // VERIFICATION
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                KYC & KYB
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                We maintain a Zero-Anonymity Policy. Individual Users: Mandatory verification via PAN, Aadhaar (OVD), and biometric liveness checks. Corporate Partners: Full KYB documentation, including COI, MOA/AOA, and UBO identification.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A] md:mt-12">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                02 // STANDARDS
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Managed Liquidity
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                Fynbloc Labs employs Managed Liquidity Injections (MLI). All injections are subject to Enhanced Due Diligence (EDD) and strict volume thresholds based on verified ITR and SoW declarations.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A] md:-mt-12">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                03 // ANALYTICS
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Monitoring
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                We utilize advanced blockchain forensic tools for real-time wallet hygiene. We maintain a zero-tolerance policy toward mixing services and screen all counterparties against UNSC, OFAC, and local UAPA lists.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A]">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                04 // AUDIT
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Reporting
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                We fulfill mandatory reporting obligations, including STRs and VDA-specific formats. All KYC and transaction data are maintained in encrypted environments for a minimum of 5 years.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Global Standards, Local Trust Section */}
            <section className="relative py-10 md:py-16 px-6 max-w-[1440px] mx-auto">
                <div className="rounded-[24px] bg-[#080808] border border-[#1A1A1A] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="relative z-10 max-w-[700px]">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-6">
                            Global Standards, Local Trust
                        </h2>
                        <p className="text-[15px] leading-[1.7] text-[#A0A0A0] mb-8">
                            Fynbloc Labs aligns its internal controls with the Financial Action Task Force (FATF) recommendations, ensuring that our platform operates with world-class integrity across all jurisdictions.
                        </p>
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#FF835D]" />
                                <span className="text-[14px] font-medium text-white">FATF Aligned</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#FF835D]" />
                                <span className="text-[14px] font-medium text-white">PMLA Compliant</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 hidden md:flex items-center justify-center shrink-0 opacity-20 mr-10">
                        {/* We will use a gavel logic or a large icon since I don't have the exact svg, I will use a stylized element or image */}
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FF835D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
                            <path d="m16 16 6-6" />
                            <path d="m8 8 6-6" />
                            <path d="m9 7 8 8" />
                            <path d="m21 11-8-8" />
                            <line x1="11" x2="21" y1="21" y2="21" />
                        </svg>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
