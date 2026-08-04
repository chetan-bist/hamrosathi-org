export default function DiscoverPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row w-full">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen w-full">
        {/* Content Canvas */}
        <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row gap-6">
          
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">filter_list</span> Filters
              </h2>

              {/* Category Filter */}
              <div className="mb-4 border-b border-outline-variant pb-4">
                <h3 className="text-sm font-semibold text-on-surface-variant mb-2">Category</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-on-surface hover:text-primary transition-colors">
                    <input type="checkbox" className="rounded border-outline text-primary focus:ring-primary" />
                    Cleaning
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-on-surface hover:text-primary transition-colors">
                    <input type="checkbox" defaultChecked className="rounded border-outline text-primary focus:ring-primary" />
                    Plumbing
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-on-surface hover:text-primary transition-colors">
                    <input type="checkbox" className="rounded border-outline text-primary focus:ring-primary" />
                    Electrical
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-on-surface hover:text-primary transition-colors">
                    <input type="checkbox" className="rounded border-outline text-primary focus:ring-primary" />
                    Moving
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-4 border-b border-outline-variant pb-4">
                <h3 className="text-sm font-semibold text-on-surface-variant mb-2">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Min" className="w-full p-1 text-sm border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary" />
                  <span className="text-on-surface-variant">-</span>
                  <input type="number" placeholder="Max" className="w-full p-1 text-sm border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-sm font-semibold text-on-surface-variant mb-2">Minimum Rating</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-base text-outline-variant">star</span>
                  <span className="text-sm text-on-surface-variant ml-1">4.0+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Plumbing Professionals</h2>
                <p className="text-base text-on-surface-variant mt-1">124 experts found near you</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-on-surface-variant">Sort by:</span>
                <select className="border border-outline-variant rounded bg-surface-container-lowest text-sm p-1 focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>Recommended</option>
                  <option>Highest Rated</option>
                  <option>Lowest Price</option>
                </select>
              </div>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              
              {/* Worker Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-surface-container">
                    <img alt="Rajesh Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1HRON5ORKg9Y2CJT0x_p_jXsgUP3B1eX4ijRPEG68HFJ6_yQOcg2gW57fCHpGAqpusXiNghgfKYD4E3E5gAtO4mlGLginT_SklZ18NK1IWo-fVTL6aGnYbCkZLDxHDqz8HaHGsxiD19nOZ9X0XcHtA2Nak6kTXpzYD3nRx8GYl5o2fQzzYpMJ5qalq4NctvM_e-ulF_ITtBLITatlG2r8K_2P6jd6v3HElzP3_E8T9UWJfGMe5q7l" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Rajesh Sharma</h3>
                      <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant">Master Plumber</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      <span className="text-xs font-bold text-on-surface">4.9</span>
                      <span className="text-xs text-on-surface-variant">(142)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Expert in pipe repairs, installations, and emergency water damage control. 10+ years experience in the valley.</p>
                <div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <span className="text-xs text-on-surface-variant">Starting from</span>
                    <div className="text-lg text-on-surface font-bold">Rs. 500<span className="text-sm font-normal text-on-surface-variant">/hr</span></div>
                  </div>
                  <button className="bg-primary text-on-primary text-sm px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer">View Profile</button>
                </div>
              </div>

              {/* Worker Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-surface-container">
                    <img alt="Sita Thapa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2NQJy8gQglzvBaqMRFniTvkDNdwopmmqV9G6pM6-21r4s5js4kOr28ap5Esn6IRbhgDdV7kUUYE9cEU3sJjRBuSDuY7SUqRqfRh4sWTu5FFE2EVBegrlEGD8455s2-rXIuoMDQN8P7yap_qbg8NemrLDSPAGluBi5uiu7HkK4ixKO_vIKARQ9mW9ZXiwyx7ETVK1agvqgYrdR3MyfV9Uqowe_KNMZ2uAHgwLpwNBqGZ5_zdgyZLvo" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Sita Thapa</h3>
                      <div className="flex items-center gap-1 bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full">
                        <span className="text-xs">New</span>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant">General Plumbing</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      <span className="text-xs font-bold text-on-surface">4.5</span>
                      <span className="text-xs text-on-surface-variant">(12)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Quick and reliable fixes for leaky faucets and minor blockages. Available for weekend appointments.</p>
                <div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <span className="text-xs text-on-surface-variant">Starting from</span>
                    <div className="text-lg text-on-surface font-bold">Rs. 300<span className="text-sm font-normal text-on-surface-variant">/hr</span></div>
                  </div>
                  <button className="bg-primary text-on-primary text-sm px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer">View Profile</button>
                </div>
              </div>

              {/* Worker Card 3 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-surface-container">
                    <img alt="Bikash Rai" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdrlO-Pjm0Knh9aoWOEDfGEBlta5WQNpgHQb1ifW-KkAorsJf2JDG2h9xVSwwieqeBgOM5SNgWTuQ9Y0h9h6O8UDDQxnhgd4G_P27BH8dhWYBb2HPLyjc6NPvKvO7qdQDTQfVBKDduYkA7bxAM_HUtd_xbtj80Vr6_EV4xSm8iLcGz-gheFHwNxp9bVmuXz9GsL8qAT2d6j2XduIPhrn1v7zJUOnVfPvC8DqXUAIK3Yr2QW7YYvJ1B" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Bikash Rai</h3>
                      <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant">Commercial Plumbing</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      <span className="text-xs font-bold text-on-surface">4.8</span>
                      <span className="text-xs text-on-surface-variant">(89)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Specializing in large scale installations and commercial maintenance contracts. Fully insured and bonded.</p>
                <div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <span className="text-xs text-on-surface-variant">Starting from</span>
                    <div className="text-lg text-on-surface font-bold">Rs. 800<span className="text-sm font-normal text-on-surface-variant">/hr</span></div>
                  </div>
                  <button className="bg-primary text-on-primary text-sm px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer">View Profile</button>
                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center gap-2">
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant disabled:opacity-50 cursor-pointer" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary text-sm flex items-center justify-center font-medium">1</button>
              <button className="w-8 h-8 rounded hover:bg-surface-container-low text-on-surface text-sm flex items-center justify-center font-medium">2</button>
              <button className="w-8 h-8 rounded hover:bg-surface-container-low text-on-surface text-sm flex items-center justify-center font-medium">3</button>
              <span className="text-on-surface-variant">...</span>
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low text-on-surface-variant cursor-pointer">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}