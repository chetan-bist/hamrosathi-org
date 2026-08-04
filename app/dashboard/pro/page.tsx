'use client';

import React, { useState } from 'react';

export default function WorkerDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  const handleToggle = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="bg-[#F7F9FB] text-[#191c1e] font-sans flex flex-col md:flex-row min-h-screen">
      {/* Mobile TopNav (Visible only on mobile) */}
      <header className="md:hidden sticky top-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-[#f7f9fb] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] border-b border-[#c5c5d3]">
        <div className="flex items-center gap-2">
          <img
            alt="HamroSathi"
            className="h-8 w-8 rounded-full"
            src="https://lh3.googleusercontent.com/aida/AP1WRLt1H7IHdND_u7BqEqEyvM64q6lRQGi58pjx2iGu4DzPeO1TROxLkxyfsZUSSPXQPrOmJ4qsAwn-Nltkwb2qXcTe50XTNZouz4ggHhNv32aY1rvVnCFfIdUfS9qr4t4MS2uqPSPPDJnrgfZeVbBj4kg3SdevGIVpwmeHebRpEAVlg9f0qY0pVKMvyTUcK54GHQ6Br-PrQV7-mfDM6K4BeYMxzjeqY-xDIZEceaR6EzOcTeG_6BbBakf1iBg"
          />
          <span className="font-bold text-[20px] leading-[28px] text-[#00236f]">HamroSathi</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                checked={isOnline}
                onChange={handleToggle}
                className="sr-only"
                type="checkbox"
              />
              <div className={`block w-10 h-6 rounded-full transition-colors duration-300 ${isOnline ? 'bg-[#006c49]' : 'bg-[#e0e3e5]'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform ${isOnline ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
          </label>
          <button className="text-[#444651]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col p-4 z-40 bg-[#f2f4f6] border-r border-[#c5c5d3]">
        <div className="flex items-center gap-4 mb-8 mt-2 px-2">
          <img
            alt="HamroSathi Logo"
            className="w-10 h-10 rounded-full shadow-sm"
            src="https://lh3.googleusercontent.com/aida/AP1WRLt1H7IHdND_u7BqEqEyvM64q6lRQGi58pjx2iGu4DzPeO1TROxLkxyfsZUSSPXQPrOmJ4qsAwn-Nltkwb2qXcTe50XTNZouz4ggHhNv32aY1rvVnCFfIdUfS9qr4t4MS2uqPSPPDJnrgfZeVbBj4kg3SdevGIVpwmeHebRpEAVlg9f0qY0pVKMvyTUcK54GHQ6Br-PrQV7-mfDM6K4BeYMxzjeqY-xDIZEceaR6EzOcTeG_6BbBakf1iBg"
          />
          <div>
            <div className="font-bold text-[20px] leading-[28px] text-[#00236f]">HamroSathi</div>
            <div className="text-[12px] leading-[16px] font-medium text-[#444651]">Worker Portal</div>
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-grow text-[14px] leading-[20px] font-semibold tracking-[0.05em]">
          <a className="flex items-center gap-2 bg-[#1e3a8a] text-[#90a8ff] rounded-lg px-4 py-2 transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-2 text-[#444651] hover:bg-[#e6e8ea] rounded-lg px-4 py-2 transition-all" href="#">
            <span className="material-symbols-outlined">work</span>
            <span>Job Requests</span>
          </a>
          <a className="flex items-center gap-2 text-[#444651] hover:bg-[#e6e8ea] rounded-lg px-4 py-2 transition-all" href="#">
            <span className="material-symbols-outlined">payments</span>
            <span>Earnings</span>
          </a>
          <a className="flex items-center gap-2 text-[#444651] hover:bg-[#e6e8ea] rounded-lg px-4 py-2 transition-all" href="#">
            <span className="material-symbols-outlined">star</span>
            <span>Reviews</span>
          </a>
          <a className="flex items-center gap-2 text-[#444651] hover:bg-[#e6e8ea] rounded-lg px-4 py-2 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </div>

        {/* Online/Offline Toggle Desktop */}
        <div className="mt-auto pt-4 border-t border-[#c5c5d3]">
          <div className="flex items-center justify-between px-2 py-2 bg-[#f7f9fb] rounded-lg shadow-[0px_1px_3px_rgba(15,23,42,0.05)] border border-[#c5c5d3]">
            <span className="text-[14px] leading-[20px] font-semibold text-[#191c1e]" id="desktop-status-text">
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  checked={isOnline}
                  onChange={handleToggle}
                  className="sr-only"
                  type="checkbox"
                />
                <div className={`block w-10 h-6 rounded-full transition-colors duration-300 ${isOnline ? 'bg-[#006c49]' : 'bg-[#e0e3e5]'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform ${isOnline ? 'translate-x-4' : 'translate-x-0'}`}></div>
              </div>
            </label>
          </div>
          <button className="w-full mt-4 bg-white border border-[#757682] text-[#00236f] text-[14px] leading-[20px] font-semibold tracking-[0.05em] rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-[#f2f4f6] transition-colors">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            {isOnline ? 'Go Offline' : 'Go Online'}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-10 max-w-[1280px] mx-auto w-full">
        {/* Header Section */}
        <div className="hidden md:flex justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#191c1e]">Welcome back, Ram</h1>
            <p className="text-[16px] leading-[24px] text-[#444651] mt-1">Here's your performance overview for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-[#f7f9fb] rounded-full shadow-[0px_1px_3px_rgba(15,23,42,0.05)] border border-[#c5c5d3] hover:bg-[#f2f4f6] transition-colors relative">
              <span className="material-symbols-outlined text-[#444651]">notifications</span>
              <span className="absolute top-0 right-0 w-3 h-3 bg-[#ba1a1a] rounded-full border-2 border-[#f7f9fb]"></span>
            </button>
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-[#f7f9fb] shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUN2ICAH05ERkX5gTvetqkph5RARScUwnqEXPdABQ9-AijT0aR-06K0NbeYV_pMcZdM087ZnqBHriBoDALkZM-vdxkK_Z3DkdGFDw6hEc6Xw6SlCZTPXYHwfN_mk-J9OlgpFeD9lkIE46mWWRuvwzTs0aTTLNJv25YVqTabl7mFHOLKgnde48RpCNP24Sa2SPGmEkCklFii-5Z8IL88AiqdkAFUPzlX0vY2nP6zY1eSGUiBTc1BE-q"
              alt="Profile"
            />
          </div>
        </div>

        <div className="md:hidden mb-6">
          <h1 className="text-[24px] leading-[32px] font-bold text-[#191c1e]">Welcome back, Ram</h1>
          <p className="text-[14px] leading-[20px] text-[#444651] mt-1">Here's your performance overview.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metrics (Left Column, spans 2 on desktop) */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Earning Card */}
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#c5c5d3] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 bg-[#dae2fd] rounded-md text-[#00236f]"><span className="material-symbols-outlined text-[20px]">account_balance_wallet</span></span>
              </div>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mb-1">Total Earnings</p>
              <p className="text-[24px] leading-[32px] font-semibold text-[#191c1e] font-bold">रु 12,450</p>
              <p className="text-[12px] leading-[16px] font-medium text-[#006c49] flex items-center mt-2 gap-1"><span className="material-symbols-outlined text-[14px]">trending_up</span> +15% this week</p>
            </div>

            {/* Completed Jobs */}
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#c5c5d3] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 bg-[#6cf8bb] rounded-md text-[#006c49]"><span className="material-symbols-outlined text-[20px]">task_alt</span></span>
              </div>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mb-1">Completed Jobs</p>
              <p className="text-[24px] leading-[32px] font-semibold text-[#191c1e] font-bold">48</p>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mt-2">This month</p>
            </div>

            {/* Average Rating */}
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#c5c5d3] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 bg-[#eceef0] rounded-md text-[#d97706]"><span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></span>
              </div>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mb-1">Average Rating</p>
              <div className="flex items-baseline gap-1">
                <p className="text-[24px] leading-[32px] font-semibold text-[#191c1e] font-bold">4.9</p>
                <p className="text-[12px] leading-[16px] font-medium text-[#444651]">/ 5</p>
              </div>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mt-2">From 32 reviews</p>
            </div>

            {/* Active Requests */}
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#c5c5d3] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 bg-[#ffdad6] rounded-md text-[#ba1a1a]"><span className="material-symbols-outlined text-[20px]">pending_actions</span></span>
              </div>
              <p className="text-[12px] leading-[16px] font-medium text-[#444651] mb-1">Active Requests</p>
              <p className="text-[24px] leading-[32px] font-semibold text-[#191c1e] font-bold">3</p>
              <p className="text-[12px] leading-[16px] font-medium text-[#00236f] mt-2 flex items-center gap-1 cursor-pointer hover:underline">View all <span className="material-symbols-outlined text-[14px]">arrow_forward</span></p>
            </div>
          </div>

          {/* Upcoming Schedule (Right Column) */}
          <div className="md:col-span-1 bg-[#1e3a8a] text-[#ffffff] rounded-xl p-6 shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,#ffffff_0%,transparent_50%)]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[20px] leading-[28px] font-semibold flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span> Next Job</h2>
                <span className="bg-white/20 px-2 py-1 rounded-full text-[12px] leading-[16px] font-medium backdrop-blur-sm">Today, 2:00 PM</span>
              </div>
              <div className="mb-6">
                <h3 className="text-[24px] leading-[32px] font-bold text-white mb-1">Home Cleaning</h3>
                <p className="text-[16px] leading-[24px] text-[#b6c4ff] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">person</span> Sarah J.
                </p>
                <p className="text-[14px] leading-[20px] text-[#b6c4ff] mt-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span> 123 Maple Street (1.2 miles)
                </p>
              </div>
            </div>
            <div className="flex gap-2 relative z-10 w-full mt-auto">
              <button className="flex-1 bg-white text-[#1e3a8a] text-[14px] leading-[20px] font-semibold tracking-[0.05em] py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-[#f2f4f6] transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">directions</span> Directions
              </button>
              <button className="flex-1 border border-white/30 text-white text-[14px] leading-[20px] font-semibold tracking-[0.05em] py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chat</span> Message
              </button>
            </div>
          </div>

          {/* New Job Requests Feed */}
          <div className="md:col-span-2 bg-[#ffffff] rounded-xl border border-[#c5c5d3] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] overflow-hidden">
            <div className="p-4 border-b border-[#c5c5d3] flex justify-between items-center bg-[#f7f9fb]">
              <h2 className="text-[20px] leading-[28px] text-[#191c1e] font-semibold">New Job Requests</h2>
              <button className="text-[#00236f] text-[14px] leading-[20px] font-semibold tracking-[0.05em] hover:underline flex items-center gap-1">Refresh <span className="material-symbols-outlined text-[16px]">refresh</span></button>
            </div>
            <div className="flex flex-col divide-y divide-[#c5c5d3]">
              {/* Request Item 1 */}
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f2f4f6] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e0e3e5] p-2 rounded-lg text-[#00236f]">
                    <span className="material-symbols-outlined">plumbing</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] leading-[20px] text-[#191c1e] font-bold">Plumbing Repair</h3>
                    <div className="flex items-center gap-4 mt-1 text-[14px] leading-[20px] text-[#444651]">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Baneshwor - 2.5 miles away</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> ASAP</span>
                    </div>
                    <p className="text-[12px] leading-[16px] font-medium text-[#006c49] mt-1 font-semibold">Est. Earn: रु 1500</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none border border-[#757682] text-[#444651] text-[14px] leading-[20px] font-semibold tracking-[0.05em] px-4 py-2 rounded-lg hover:bg-[#e6e8ea] transition-colors">Decline</button>
                  <button className="flex-1 sm:flex-none bg-[#00236f] text-white text-[14px] leading-[20px] font-semibold tracking-[0.05em] px-4 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-sm">Accept</button>
                </div>
              </div>

              {/* Request Item 2 */}
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f2f4f6] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e0e3e5] p-2 rounded-lg text-[#00236f]">
                    <span className="material-symbols-outlined">electrical_services</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] leading-[20px] text-[#191c1e] font-bold">Electrical Wiring</h3>
                    <div className="flex items-center gap-4 mt-1 text-[14px] leading-[20px] text-[#444651]">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Patan - 4.1 miles away</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Tomorrow, 10 AM</span>
                    </div>
                    <p className="text-[12px] leading-[16px] font-medium text-[#006c49] mt-1 font-semibold">Est. Earn: रु 2200</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none border border-[#757682] text-[#444651] text-[14px] leading-[20px] font-semibold tracking-[0.05em] px-4 py-2 rounded-lg hover:bg-[#e6e8ea] transition-colors">Decline</button>
                  <button className="flex-1 sm:flex-none bg-[#00236f] text-white text-[14px] leading-[20px] font-semibold tracking-[0.05em] px-4 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-sm">Accept</button>
                </div>
              </div>
            </div>
            <div className="p-2 text-center border-t border-[#c5c5d3] bg-[#f7f9fb]">
              <button className="text-[#00236f] text-[14px] leading-[20px] font-semibold tracking-[0.05em] hover:underline py-1">View all requests</button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#f7f9fb] shadow-[0px_1px_3px_rgba(15,23,42,0.05)] flex justify-around items-center py-2 pb-safe">
        <a className="flex flex-col items-center gap-1 text-[#00236f] font-bold" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[12px] leading-[16px] font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#444651] hover:text-[#00236f] transition-colors" href="#">
          <span className="material-symbols-outlined">work</span>
          <span className="text-[12px] leading-[16px] font-medium">Jobs</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#444651] hover:text-[#00236f] transition-colors" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[12px] leading-[16px] font-medium">Earnings</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#444651] hover:text-[#00236f] transition-colors" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[12px] leading-[16px] font-medium">Profile</span>
        </a>
      </nav>
    </div>
  );
}