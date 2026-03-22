"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SwapAssets() {
  const [rate, setRate] = useState<number | null>(null);
  const [usdtAmount, setUsdtAmount] = useState<string>("1000");
  const [showForm, setShowForm] = useState(false);
  
  // Fetch Live API on mount
  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch("https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=usdtinr");
        const data = await res.json();
        if (data && data.lastPrice) {
          // add +1 to the live API rate
          setRate(parseFloat(data.lastPrice) + 1.0);
        }
      } catch (err) {
        console.error("Error fetching rate", err);
        // fallback rate
        setRate(86.45); 
      }
    }
    fetchRate();
    
    // Poll every 30 seconds
    const interval = setInterval(fetchRate, 30000);
    return () => clearInterval(interval);
  }, []);

  const parsedUsdt = parseFloat(usdtAmount) || 0;
  const inrAmount = rate ? (parsedUsdt * rate).toFixed(2) : "Loading...";
  const tds = rate ? (parsedUsdt * rate * 0.01).toFixed(2) : "0.00";

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted successfully!");
    setShowForm(false);
  };

  return (
    <div className="w-full max-w-[470px] rounded-[24px] border border-white/5 bg-[#161616] p-8 lg:p-10 shrink-0 shadow-2xl">
      {!showForm ? (
        <>
          <h2 className="mb-6 text-center text-[22px] font-bold text-white">
            Swap Assets
          </h2>

          <div className="relative">
            {/* From Input */}
            <div className="rounded-[16px] bg-[#1A1919] p-5 lg:p-6 text-left border border-white/5 transition-colors focus-within:border-white/10">
              <label className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider">
                FROM
              </label>
              <div className="mt-2 flex items-center justify-between">
                <input
                  type="number"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  className="w-full bg-transparent text-[28px] lg:text-[32px] font-bold text-white outline-none placeholder:text-white/20"
                  placeholder="0.00"
                />
                <div className="flex items-center gap-2 rounded-full bg-[#2A2A2E] px-3 py-1.5 shrink-0">
                  <Image 
                    src="/images/usdt_icon.svg" 
                    alt="USDT" 
                    width={20} 
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-[14px] font-semibold text-white">USDT</span>
                </div>
              </div>
            </div>

            {/* Swap Middle Icon */}
            <div className="absolute left-1/2 top-1/2 -mt-[20px] -ml-[20px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1919] border-[6px] border-[#161616]">
              <Image 
                src="/images/swap_icon.png" 
                alt="Swap" 
                width={16} 
                height={16}
                className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>

            {/* To Input */}
            <div className="mt-2 rounded-[16px] bg-[#1A1919] p-5 lg:p-6 text-left border border-white/5 opacity-90 cursor-not-allowed">
              <label className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider">
                TO (ESTIMATED)
              </label>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-[28px] lg:text-[32px] font-bold text-white truncate w-full pr-4 pb-1">
                  {inrAmount}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#2A2A2E] px-3 py-1.5 shrink-0">
                  <Image 
                    src="/images/inr_icon.svg" 
                    alt="INR" 
                    width={20} 
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-[14px] font-semibold text-white">INR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rates breakdown */}
          <div className="mt-8 flex flex-col gap-4 text-[14px] font-medium">
             <div className="flex justify-between items-center text-[#ADAAAA]">
               <span>Approximate Rate</span>
               <span className="text-white">1 USDT ≈ {rate ? rate.toFixed(2) : "--"} INR</span>
             </div>
             <div className="flex justify-between items-center text-[#ADAAAA]">
               <span>Exchange Rate</span>
               <span className="text-white">Live Market Rate</span>
             </div>
             <div className="flex justify-between items-center text-[#ADAAAA]">
               <span>Transaction Fee</span>
               <span className="text-white">0.1%</span>
             </div>
             <div className="flex justify-between items-center text-[#ADAAAA]">
               <span>Estimated TDS (1%)</span>
               <span className="text-[#FF835D]">{tds} INR</span>
             </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setShowForm(true)}
            className="mt-8 w-full rounded-full bg-[#FF835D] py-4 lg:py-4 text-[16px] font-bold text-white transition-all hover:bg-[#ff9473] active:scale-95 shadow-[0_0_20px_rgba(255,131,93,0.3)] hover:shadow-[0_0_30px_rgba(255,131,93,0.5)]"
          >
            Send Request
          </button>
        </>
      ) : (
        <form onSubmit={handleSendRequest} className="flex flex-col h-full min-h-[460px]">
          <h2 className="mb-2 text-center text-[22px] font-bold text-white">
            Complete Request
          </h2>
          <p className="text-center text-[#A0A0A0] text-[13px] mb-6">
             Swapping <span className="text-white font-bold">{usdtAmount} USDT</span> to <span className="text-white font-bold">{inrAmount} INR</span>
          </p>

          <div className="flex flex-col gap-4 flex-1">
             <div>
               <label className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2 block">
                  Full Name
               </label>
               <input 
                 type="text" 
                 required
                 className="w-full rounded-[12px] bg-[#1A1A1E] border border-white/5 p-3 text-white placeholder:text-white/20 outline-none focus:border-[#FF835D]/50 transition-colors"
                 placeholder="Enter your name"
               />
             </div>
             
             <div>
               <label className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2 block">
                  Email Address
               </label>
               <input 
                 type="email" 
                 required
                 className="w-full rounded-[12px] bg-[#1A1A1E] border border-white/5 p-3 text-white placeholder:text-white/20 outline-none focus:border-[#FF835D]/50 transition-colors"
                 placeholder="name@example.com"
               />
             </div>

             <div>
               <label className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2 block">
                  Phone Number
               </label>
               <input 
                 type="tel" 
                 required
                 className="w-full rounded-[12px] bg-[#1A1A1E] border border-white/5 p-3 text-white placeholder:text-white/20 outline-none focus:border-[#FF835D]/50 transition-colors"
                 placeholder="+91"
               />
             </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="flex-1 rounded-full border border-white/10 bg-transparent py-4 text-[15px] font-bold text-white transition-all hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-[2] rounded-full bg-[#FF835D] py-4 text-[15px] font-bold text-white transition-all hover:bg-[#ff9473] active:scale-95 shadow-[0_0_20px_rgba(255,131,93,0.3)]"
            >
              Confirm Swap
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
