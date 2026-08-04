export default function ClientBookingsPage() {
  return (
    <div className="flex bg-background text-on-surface min-h-screen w-full">
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col w-full">
        {/* Page Canvas */}
        <main className="flex-1 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-[32px] lg:leading-[40px] font-bold text-on-surface mb-1">
              My Bookings
            </h2>
            <p className="text-sm text-on-surface-variant">
              Manage your upcoming and past service requests.
            </p>
          </div>

          {/* Booking Tabs */}
          <div className="flex gap-4 border-b border-outline-variant mb-8 overflow-x-auto pb-[1px]">
            <button className="text-sm font-semibold text-primary border-b-2 border-primary pb-2 px-2 whitespace-nowrap cursor-pointer">
              Upcoming (2)
            </button>
            <button className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors pb-2 px-2 whitespace-nowrap cursor-pointer">
              Past (12)
            </button>
            <button className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors pb-2 px-2 whitespace-nowrap cursor-pointer">
              Cancelled (1)
            </button>
          </div>

          {/* Bookings List (Bento-style Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Booking Card 1 (Upcoming - Confirmed) */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                      cleaning_services
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">Deep Home Cleaning</h3>
                    <p className="text-sm text-on-surface-variant">Booking ID: #HS-4921</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-medium border border-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Confirmed
                </span>
              </div>

              <div className="flex items-center gap-4 py-3 border-y border-surface-variant">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant relative flex-shrink-0">
                  <img
                    alt="Professional Avatar"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC-anKdkSj9hk-czTowe_TZYJfj9nle7U4v1iWPJkctMRmPIwHEeJpKnKI5-x4IK1ADDiSPK1OR_JuT5gnvqP6V_geyfV4dtd0x4uKYnJtyQt62ehCQfWzYA7B0B3-4gx8wqCTI8NukaIU1Pqiz5ttZoieDqB79voDiUBEHisFNKWOomVSsF6Q5VAVwgpxZVm-Yug4uoOW3CEJFPKUNeCRM0w1COsnopZLbnytAaU0t2iYqs9ZGrBo"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface flex items-center gap-1">
                    Sunita Maharjan
                    <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: '"FILL" 1' }} title="Verified Professional">
                      verified
                    </span>
                  </p>
                  <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    <span>4.9 (120 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Oct 24, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>10:00 AM</span>
                </div>
              </div>

              <div className="mt-auto flex gap-2 pt-2">
                <button className="flex-1 bg-surface-container-lowest border border-outline text-primary text-sm font-semibold py-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                  Reschedule
                </button>
                <button className="flex-1 bg-primary text-on-primary text-sm font-semibold py-2 rounded-lg hover:bg-primary-container transition-colors shadow-sm cursor-pointer">
                  View Details
                </button>
              </div>
            </div>

            {/* Booking Card 2 (Upcoming - Pending) */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                      plumbing
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">Pipe Leak Repair</h3>
                    <p className="text-sm text-on-surface-variant">Booking ID: #HS-4935</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium border border-outline-variant">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  Pending
                </span>
              </div>

              <div className="flex items-center gap-4 py-3 border-y border-surface-variant">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-dashed border-outline-variant bg-surface-container-low flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-outline">person_search</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Assigning Professional...</p>
                  <p className="text-sm text-on-surface-variant">Usually takes 15-30 mins</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Oct 25, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>2:30 PM</span>
                </div>
              </div>

              <div className="mt-auto flex gap-2 pt-2">
                <button className="flex-1 bg-surface-container-lowest border border-outline text-error text-sm font-semibold py-2 rounded-lg hover:bg-error-container transition-colors cursor-pointer">
                  Cancel
                </button>
                <button className="flex-1 bg-primary text-on-primary text-sm font-semibold py-2 rounded-lg hover:bg-primary-container transition-colors shadow-sm cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}