"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WorkerDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Header & Status Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
        <div>
          <h1 className="font-headline-md text-headline-md text-on-surface mb-1">
            Welcome back, Ramesh! 👋
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Here is what is happening with your service requests and tasks today.
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2.5 rounded-full border border-outline-variant shadow-inner">
          <span className="font-label-md text-label-md text-on-surface font-medium">Availability:</span>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
              isOnline ? "bg-primary" : "bg-outline-variant"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isOnline ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-label-sm text-label-sm font-bold ${isOnline ? "text-primary" : "text-on-surface-variant"}`}>
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Total Earnings</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">Rs. 48,500</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">payments</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 font-label-sm text-label-sm text-secondary">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>trending_up</span>
            <span>+15% from last month</span>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Completed Jobs</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">34</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">task_alt</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">history</span>
            <span>This current month</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Customer Rating</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">4.9 / 5.0</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span className="text-yellow-500 font-bold">★★★★★</span>
            <span>(Based on 28 reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Active Tasks / Current Job */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Active Tasks</h2>
            <Link href="/dashboard/worker/tasks" className="font-label-md text-label-md text-primary hover:underline font-semibold">
              View All Tasks
            </Link>
          </div>

          {/* Active Job Card */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-outline-variant/60">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary-container text-on-primary-container font-label-sm text-label-sm rounded-full font-bold">
                  In Progress
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> Due Today, 4:00 PM
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">Rs. 2,500</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Emergency Pipe & Leakage Fix
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Client reported a major leakage under the kitchen sink area. Replacement of PVC connectors required.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">person</span>
                  <span>Client: Sujan Shrestha</span>
                </div>
                <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                  <span>Location: New Baneshwor, Kathmandu</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-outline-variant/60">
              <Link
                href="/dashboard/worker/messages"
                className="flex-1 bg-secondary text-on-secondary font-label-md text-label-md py-2.5 px-4 rounded-xl text-center font-bold shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Message Client
              </Link>
              <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-2.5 px-4 rounded-xl text-center font-bold shadow-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Mark as Completed
              </button>
            </div>
          </div>

          {/* Quick Guidance Box */}
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-[32px]">lightbulb</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">Pro-Tip for More Bookings</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Keep your availability status toggled <strong className="text-primary">Online</strong> during peak hours (8 AM - 7 PM) to receive instant lead alerts in your vicinity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: New Job Requests */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">New Requests</h2>
            <span className="bg-error text-on-error font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">2 New</span>
          </div>

          <div className="space-y-4">
            {/* Request Item 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Bathroom Tap Installation</h4>
                <span className="font-label-lg text-label-lg text-primary font-bold">Rs. 1,200</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Need a certified plumber to install two new mixer taps in the master bathroom.
              </p>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Jawalakhel, Lalitpur</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button className="flex-1 bg-primary text-on-primary font-label-sm text-label-sm py-2 rounded-lg font-bold hover:bg-primary/95 transition-colors">
                  Accept
                </button>
                <button className="flex-1 bg-surface-container-high text-on-surface font-label-sm text-label-sm py-2 rounded-lg font-bold hover:bg-surface-variant transition-colors border border-outline-variant">
                  Decline
                </button>
              </div>
            </div>

            {/* Request Item 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Water Tank Cleaning</h4>
                <span className="font-label-lg text-label-lg text-primary font-bold">Rs. 3,000</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Looking for professional service to clean an underground reserve water tank.
              </p>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Chabahil, Kathmandu</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button className="flex-1 bg-primary text-on-primary font-label-sm text-label-sm py-2 rounded-lg font-bold hover:bg-primary/95 transition-colors">
                  Accept
                </button>
                <button className="flex-1 bg-surface-container-high text-on-surface font-label-sm text-label-sm py-2 rounded-lg font-bold hover:bg-surface-variant transition-colors border border-outline-variant">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}