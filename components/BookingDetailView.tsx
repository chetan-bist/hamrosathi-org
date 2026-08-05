import Image from "next/image";

interface BookingDetailViewProps {
  booking: any;
  onBack: () => void;
}

export default function BookingDetailView({ booking, onBack }: BookingDetailViewProps) {
  return (
    <div className="flex-1 overflow-y-auto w-full bg-background min-h-screen">
      <div className="p-4 md:p-8 max-w-6xl mx-auto pb-16">
        
        {/* Back Button / Breadcrumbs */}
        <nav className="flex items-center gap-1 font-semibold text-sm text-on-surface-variant mb-6">
          <button onClick={onBack} className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined text-[16px]">chevron_left</span> My Bookings
          </button>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">Booking {booking.id}</span>
        </nav>

        {/* Booking Header & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">{booking.title}</h2>
            <p className="text-sm md:text-base text-on-surface-variant">Booking ID: {booking.id}</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-sm">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            {booking.status}
          </div>
        </div>

        {/* Grid Layout adjusted to prevent clipping */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Schedule & Location Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <h3 className="text-base font-semibold">Service Schedule</h3>
                </div>
                <div className="text-sm text-on-surface flex flex-col gap-1">
                  <span><strong>Date:</strong> {booking.date}</span>
                  <span><strong>Time:</strong> {booking.time}</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="text-base font-semibold">Service Location</h3>
                </div>
                <p className="text-sm text-on-surface leading-relaxed">
                  123 Heritage Lane, Apt 4B<br />
                  Patan, Lalitpur 44700<br />
                  Nepal
                </p>
              </div>
            </div>

            {/* Professional Profile Card */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden relative border-2 border-primary-container shadow-sm flex-shrink-0">
                <Image fill alt="Professional" className="object-cover" src={booking.avatar} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-on-surface">{booking.provider}</h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-on-surface-variant text-sm mt-1 mb-3">
                  <span className="flex items-center text-[#fbbf24]"><span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span></span>
                  <span>{booking.reviews}</span>
                  <span className="inline-flex items-center gap-1 text-secondary ml-2 font-medium text-xs">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Verified Pro
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto px-5 py-2 bg-primary-container text-on-primary-container rounded-lg text-xs md:text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">chat</span> Message
              </button>
            </div>

            {/* Client Notes */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-on-surface">
                <span className="material-symbols-outlined text-outline text-[18px]">note</span>
                <h3 className="text-base font-semibold">Client Notes</h3>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant bg-surface p-3.5 rounded-lg border border-surface-container-high leading-relaxed">
                &quot;Please focus heavily on the kitchen grease and ensure the balcony is swept and mopped. We have a small friendly dog.&quot;
              </p>
            </div>
          </div>

          {/* Right Column (Payment & Actions) */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm">
              <h3 className="text-base font-semibold text-on-surface mb-4">Payment Summary</h3>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-on-surface-variant mb-4 border-b border-surface-container-high pb-4">
                <div className="flex justify-between"><span>Base Price (4 hrs)</span><span>Rs. 2,000</span></div>
                <div className="flex justify-between"><span>Cleaning Supplies</span><span>Rs. 500</span></div>
                <div className="flex justify-between"><span>Taxes (13% VAT)</span><span>Rs. 325</span></div>
              </div>
              <div className="flex justify-between items-center text-base md:text-lg font-semibold text-on-surface mb-4">
                <span>Total</span><span>Rs. 2,825</span>
              </div>
              <div className="flex items-center gap-2 text-secondary text-xs font-semibold bg-secondary-container/20 p-2.5 rounded-lg justify-center text-center">
                <span className="material-symbols-outlined text-[14px]">credit_card</span> Paid via Credit Card (ending in 4242)
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full py-2.5 border border-outline text-on-surface rounded-lg text-xs md:text-sm font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">edit_calendar</span> Reschedule
              </button>
              <button className="w-full py-2.5 border border-error text-error rounded-lg text-xs md:text-sm font-semibold hover:bg-error-container transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">cancel</span> Cancel Booking
              </button>
              <div className="mt-1 text-center">
                <a href="#" className="text-xs text-primary hover:underline inline-flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">help_outline</span> Need Help &amp; Support?
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}