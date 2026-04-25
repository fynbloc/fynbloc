import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact";

export default function LegalPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#000000]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 flex flex-col items-center justify-center text-center px-6">
                <div className="mb-6 inline-flex items-center rounded-full border border-[#FF835D]/30 px-4 py-1.5 bg-[#FF835D]/10">
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#FF835D]">
                        LEGAL INFORMATION
                    </span>
                </div>
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white mb-4">
                    Privacy & Legal
                </h1>
                <h2 className="text-[20px] md:text-[28px] font-medium text-white mb-6">
                    Fynbloc Labs Private Limited
                </h2>
                <p className="max-w-[700px] text-[15px] md:text-[16px] leading-[1.6] text-[#A0A0A0] mx-auto">
                    This page outlines how Fynbloc Labs handles data, what our services cover, and the legal context in which we operate as an Indian IT services and blockchain development company.
                </p>
            </section>

            {/* Company Overview */}
            <section className="relative py-12 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left side */}
                    <div className="w-full lg:w-[350px] shrink-0 sticky top-32">
                        <h2 className="text-[36px] md:text-[44px] leading-[1.1] tracking-tight mb-6 flex flex-col">
                            <span className="font-light text-white">COMPANY</span>
                            <span className="font-bold text-white">OVERVIEW</span>
                        </h2>
                        <p className="text-[15px] leading-[1.6] text-[#A0A0A0]">
                            Fynbloc Labs Private Limited is incorporated under the Companies Act, 2013 in India. We provide IT services, custom software development, and blockchain product development.
                        </p>
                    </div>

                    {/* Right side Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                        {/* Card 1 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A]">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                01 // SERVICES
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                What We Do
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                Fynbloc Labs provides IT consulting, custom software development, Web3 and blockchain product development, and technology advisory services to businesses. We do not provide financial, investment, or trading services of any kind.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A] md:mt-12">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                02 // DATA
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Data Handling
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                Any personal information you share (e.g., through our contact form) is used solely to respond to your enquiry and is not sold or shared with third parties. We do not store payment information on our servers.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A] md:-mt-12">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                03 // SCOPE
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Scope of Services
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                Our engagements are governed by individual service agreements. Deliverables, timelines, and intellectual property rights are defined per project. All client data and project details are kept strictly confidential.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-[16px] bg-[#050505] border border-[#1A1A1A] p-8 md:p-10 transition-colors hover:bg-[#0A0A0A]">
                            <span className="text-[11px] font-semibold text-[#FF835D] tracking-wider uppercase mb-4 block">
                                04 // CONTACT
                            </span>
                            <h3 className="text-[22px] font-semibold text-white mb-4">
                                Questions
                            </h3>
                            <p className="text-[14px] leading-[1.7] text-[#A0A0A0]">
                                For any legal, privacy, or data-related queries, please contact us at{" "}
                                <a href="mailto:contact@fynbloc.com" className="text-[#FF835D] hover:underline">contact@fynbloc.com</a>.
                                We aim to respond within 3 business days.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Disclaimer Banner */}
            <section className="relative py-10 md:py-16 px-6 max-w-[1440px] mx-auto">
                <div className="rounded-[24px] bg-[#080808] border border-[#1A1A1A] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="relative z-10 max-w-[800px]">
                        <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-6">
                            What Fynbloc Labs is Not
                        </h2>
                        <p className="text-[15px] leading-[1.7] text-[#A0A0A0] mb-8">
                            To be fully transparent about the nature of our company:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "We do not accept public deposits",
                                "We do not operate as a banking or financial institution",
                                "We do not operate as an NBFC or investment company",
                                "We do not provide financial advice or guarantee returns",
                                "We do not operate a cryptocurrency exchange or trading platform",
                            ].map((text, idx) => (
                                <li key={idx} className="text-[#A0A0A0] text-[14px] flex items-start gap-3">
                                    <span className="text-[#FF835D] mt-0.5 shrink-0">—</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
