'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Booking Confirmed Successfully!');
  };

  return (
    <>
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              aria-label="Go Back" 
              className="text-gray-600 hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Book Service</h1>
          </div>
          <div className="text-2xl font-bold text-primary">
            HamroSathi
          </div>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 md:px-10 pt-8 pb-16 space-y-8">
        {/* 1. Worker Header */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-start gap-4">
          <img 
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm" 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
            alt="Ramesh Shrestha"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Ramesh Shrestha</h2>
                <p className="text-sm text-gray-600">AC Repair Expert</p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-sm font-semibold">4.8 <span className="text-sm text-gray-600 font-normal">(120 reviews)</span></span>
              </div>
              <div className="text-sm font-semibold text-emerald-700">
                Starting from Rs. 500
              </div>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-primary h-2 rounded-full w-1/3"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 2. Service Type */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Service Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['General Servicing', 'Gas Refilling', 'Deep Cleaning', 'Repair/Maintenance'].map((service, idx) => {
                const id = `service_${idx}`;
                return (
                  <div className="relative" key={idx}>
                    <input defaultChecked={idx === 0} className="peer sr-only" id={id} name="service_type" type="radio" />
                    <label className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-blue-50/50 transition-colors w-full text-left" htmlFor={id}>
                      <span className="text-base text-gray-900 font-medium">{service}</span>
                      <span className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. Date & Time */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Date & Time</h3>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 mb-2">Select Date</p>
              <div className="flex overflow-x-auto custom-scrollbar pb-2 gap-2">
                {['Today', 'Tomorrow', 'Oct 26', 'Oct 27'].map((date, idx) => (
                  <div key={idx}>
                    <input defaultChecked={idx === 0} className="peer sr-only" id={`date_${idx}`} name="booking_date" type="radio" />
                    <label className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm cursor-pointer whitespace-nowrap hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white transition-colors" htmlFor={`date_${idx}`}>
                      {date}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Select Time Slot</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['10:00 AM - 1:00 PM', '1:00 PM - 4:00 PM', '4:00 PM - 7:00 PM'].map((time, idx) => (
                  <div key={idx}>
                    <input defaultChecked={idx === 1} className="peer sr-only" id={`time_${idx}`} name="booking_time" type="radio" />
                    <label className="flex justify-center items-center px-2 py-3 border border-gray-300 rounded-lg text-sm cursor-pointer text-center hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-blue-50/50 peer-checked:text-primary peer-checked:font-semibold transition-colors" htmlFor={`time_${idx}`}>
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Service Location */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Location</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="area_tole">Area/Tole</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" id="area_tole" placeholder="e.g. New Baneshwor" type="text" />
            </div>
          </section>

          {/* 5. Your Information */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="full_name">Full Name</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" id="full_name" placeholder="Enter your full name" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="live_location">Share Live Location Link</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" id="live_location" placeholder="Enter your live location link" type="text" />
              </div>
            </div>
          </section>

          {/* 6. Payment Method */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['eSewa', 'Khalti', 'Mobile Banking', 'Cash After Service'].map((pay, idx) => {
                const id = `payment_${idx}`;
                return (
                  <div className="relative" key={idx}>
                    <input defaultChecked={idx === 0} className="peer sr-only" id={id} name="payment_method" type="radio" />
                    <label className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-blue-50/50 transition-colors w-full text-left" htmlFor={id}>
                      <span className="text-base text-gray-900 font-medium">{pay}</span>
                      <span className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 7. Bill Summary */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill Summary</h3>
            <div className="space-y-2 mb-4 text-gray-600">
              <div className="flex justify-between items-center">
                <span>Service Charge</span>
                <span>Rs. 500</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Parts Estimate</span>
                <span>TBD</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600">
                <span>Discount</span>
                <span>- Rs. 0</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-3 mb-4 flex justify-between items-center text-lg font-bold text-gray-900">
              <span>Total Amount</span>
              <span>Rs. 500</span>
            </div>
            <div className="flex gap-2">
              <input className="flex-1 p-2.5 border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Promo Code" type="text" />
              <button className="px-4 py-2.5 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors" type="button">Apply</button>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer" type="submit">
              Confirm Booking
            </button>
          </div>
        </form>
      </main>
    </>
  );
}