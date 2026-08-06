"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface WorkerProfileProps {
  onBack?: () => void;
}

export default function WorkerProfile({ onBack }: WorkerProfileProps) {
  const [activeTab, setActiveTab] = useState<"about" | "services" | "portfolio" | "reviews">("about");
   const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12 flex flex-col gap-8">
      {onBack && (
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary font-label-md hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Dashboard
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto relative">
          <Image
            fill
            className="w-full h-full object-cover"
            alt="Rajesh Sharma"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUXeUYIyMGT-W02h2p3i4YcSr_rwVT0hzuRnUu72jJur-2iil1TQAsXcWvE1lQGDjK4vLj9UBhI6VHiTaOIfli1OED-YPyqmQVNFpfs2HPcl9-V04zfRcPA-pCz6C6B-kt335WJZOSQQDWNxpY2Dq3SWebFk47CX9go47dn87RtgaVdbeFbhPFBZ7vdYjXa0TG45c3vv8n0620kQ7vUjq2Y5awru4nsbzCNAQAr5PJdqTDmqxqxB91"
          />
        </div>
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl md:text-[32px] font-bold text-on-surface leading-tight">Rajesh Sharma</h1>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded-full flex items-center gap-1 font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                Verified Pro
              </div>
            </div>
            <p className="text-lg text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              Master Electrician
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center text-[#EAB308]">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star_half</span>
              </div>
              <span className="font-semibold text-on-surface">4.9</span>
              <span className="text-sm text-on-surface-variant">(124 Reviews)</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mt-4 md:mt-0 pt-4 border-t border-surface-variant md:border-t-0 md:pt-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm text-on-surface-variant">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-on-surface">Rs. 500</span>
                <span className="text-sm text-on-surface-variant">/ hr</span>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-surface-container-lowest border border-outline text-primary font-label-md px-6 py-3 rounded-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">chat</span>
                Message
              </button>
              {/* <button className="flex-1 md:flex-none bg-secondary text-on-secondary font-label-md px-8 py-3 rounded-lg hover:shadow-md transition-shadow flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">calendar_month</span>
                Book Now
              </button> */}
              <Link 
                  className={`flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-label-md text-label-md transition-all duration-200 ease-in-out cursor-pointer ${
                    pathname === "/bookingform" 
                      ? "bg-secondary text-on-secondary shadow-md" 
                      : "bg-secondary text-on-secondary hover:shadow-md"
                  }`} 
                  href="/bookingform"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/bookingform" ? '"FILL" 1' : '"FILL" 0' }}>
                    calendar_month
                  </span>
                  Book Now
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Tabs */}
      <div className="flex flex-col gap-6">
        <div className="flex overflow-x-auto border-b border-outline-variant gap-6">
          <button
            onClick={() => setActiveTab("about")}
            className={`font-semibold text-sm pb-3 whitespace-nowrap px-2 transition-colors cursor-pointer border-b-2 ${
              activeTab === "about"
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`font-semibold text-sm pb-3 whitespace-nowrap px-2 transition-colors cursor-pointer border-b-2 ${
              activeTab === "services"
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            Services & Pricing
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`font-semibold text-sm pb-3 whitespace-nowrap px-2 transition-colors cursor-pointer border-b-2 ${
              activeTab === "portfolio"
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`font-semibold text-sm pb-3 whitespace-nowrap px-2 transition-colors cursor-pointer border-b-2 ${
              activeTab === "reviews"
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content: About */}
        {activeTab === "about" && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
                <h2 className="text-xl font-bold text-on-surface mb-3">Professional Summary</h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  With over a decade of hands-on experience in residential and commercial electrical systems, I specialize in ensuring safety, efficiency, and modern solutions for my clients. From simple fixture installations to complete house rewiring, I approach every job with precision and a commitment to quality. My focus is always on providing transparent communication, reliable service, and a clean workspace upon completion.
                </p>
              </div>
            </div>
            <div className="w-full md:w-80 flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-4">
                <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider">Quick Facts</h3>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">history</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">Experience</span>
                    <span className="text-sm text-on-surface">10+ Years</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">language</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">Languages</span>
                    <span className="text-sm text-on-surface">Nepali, Hindi, English</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">Service Area</span>
                    <span className="text-sm text-on-surface">Kathmandu Valley</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Services */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors">Ceiling Fan Installation</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Complete assembly and safe installation of ceiling fans, including necessary wiring adjustments.</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">mode_fan</span>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant">
                <span className="text-xl font-bold text-on-surface">Rs. 800</span>
                <button className="text-primary font-semibold text-sm hover:underline cursor-pointer">Select</button>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors">Switch & Outlet Repair</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Troubleshooting and replacement of faulty switches, dimmers, and power outlets.</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">electrical_services</span>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant">
                <span className="text-xl font-bold text-on-surface">Rs. 500</span>
                <button className="text-primary font-semibold text-sm hover:underline cursor-pointer">Select</button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Portfolio */}
        {activeTab === "portfolio" && (
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm text-center py-12">
            <p className="text-on-surface-variant">Portfolio items and completed project gallery will appear here.</p>
          </div>
        )}

        {/* Tab Content: Reviews */}
        {activeTab === "reviews" && (
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm text-center py-12">
            <p className="text-on-surface-variant">Client reviews and feedback ratings will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}