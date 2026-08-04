"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ClientDashboard() {
  const router = useRouter();
  const pathname = usePathname(); // हालको active path पत्ता लगाउन
  const [userName, setUserName] = useState("John Doe");
  const [loading, setLoading] = useState(true);

  // युजरको डेटा Supabase बाट लोड गर्ने
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_type", "client")
          .limit(1)
          .single();

        if (data && data.full_name) {
          setUserName(data.full_name);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-body-md">
      

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-10 overflow-x-hidden">
          {/* Welcome Section */}
          <section className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">
              Hello, {userName.split(" ")[0]}! 👋
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">What can we help you with today?</p>
            
            <div className="mt-6 md:hidden">
              <div className="relative items-center w-full mb-4">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full focus:ring-2 focus:ring-primary text-on-surface h-12 outline-none placeholder:text-on-surface-variant shadow-sm font-body-md text-body-md"
                  placeholder="Search for a service..."
                  type="text"
                />
              </div>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
              <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">cleaning_services</span>
                Cleaning
              </button>
              <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">plumbing</span>
                Plumbing
              </button>
              <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">electrical_services</span>
                Electrical
              </button>
              <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">ac_unit</span>
                AC Repair
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Bookings */}
              <section>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="font-headline-md text-headline-md text-on-surface">Active Bookings</h2>
                  <Link className="font-label-sm text-label-sm text-primary hover:underline underline-offset-4" href="#">
                    View All
                  </Link>
                </div>
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                  <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[24px]">cleaning_services</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Deep Home Cleaning</h3>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
                          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          Tomorrow, 10:00 AM
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              fill
                              className="object-cover"
                              alt="Cleaner"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsskWKSgCmRz63MEGjgJBqKliICutWuKWM61SP5vxgQtt7zhyomgWaiIJRpa8MuzR3xXL_L5Jmdt7puyQvYi87wSmHrx_fmD_l9tTBJaAuiUuQ53AgraRahBx1LKaatA0RaMdldHUU59WQskiL3FoQBOvswJu5GNqC-KhiEO4PpbVGDlGwI7RJCwPYXpQZ_SSWhrLNK0kb-Jx2MdgsML-jDEWbAADD3edlL7WBeV78s1-hqGD_aEh5"
                            />
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface">Anita R.</span>
                          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                              check_circle
                            </span>
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-auto flex gap-2">
                      <button className="flex-1 md:flex-none px-4 py-2 bg-surface-container-lowest border border-outline text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors text-center cursor-pointer">
                        Reschedule
                      </button>
                      <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md transition-all text-center cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recommended for You */}
              <section>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Recommended for You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Card 1 */}
                  <Link className="group bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full" href="#">
                    <div className="h-32 bg-surface-container w-full relative overflow-hidden">
                      <Image
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Pest Control"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuASTJS4Kh_UqRFd4lDVO7CPygz3Zf8JQ91wwYjKHFMdlBrB1vKeVs51URvvZS-HNdboUbYQ0GjpxiH0gYDbcxqCISXUKqbpivni3ULF45wOOZwpwP-8FcodfAlGj7TDvxUZfIBoIsvng_aFTIt9wCaiFQ5ChOBuqFAYcHd-6cSBRXBt-jRHQbvEB6v7MHCJAqOnW65rHCYwY0RWanxwbCZsSV717mkb3gbCYm9PtJDlpoEDSbu-k1Cs"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Pest Control</h3>
                        <span className="flex items-center text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>
                            star
                          </span>
                          4.8
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">
                        Complete interior and exterior pest management.
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-surface-variant">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Starts at</span>
                        <span className="font-label-md text-label-md text-primary">$49</span>
                      </div>
                    </div>
                  </Link>

                  {/* Card 2 */}
                  <Link className="group bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full" href="#">
                    <div className="h-32 bg-surface-container w-full relative overflow-hidden">
                      <Image
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Interior Painting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5tC-r-531ardEHhlqQ2W2corbCAnjsFsdlrzGoI_MXj53icGbS-k6soLSmvnWm7izRHO6DeqzJEYFc9mI6fl0pwv_aCRoB9eElgnAU6kv87CB9jrpT37Q7ac3x7y5V13ROtMsvYJvU5mkdlVgkGlrR4bFoOBrUY-dnjKZPBRbvYinr7KErWh-C-VMWP6_94pJgWuL_2MYzaCiprVmNn2-Wu6oJ2sZT0Q7KL6vwmp17ZjMyA47nAU"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Interior Painting</h3>
                        <span className="flex items-center text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>
                            star
                          </span>
                          4.9
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">
                        Refresh your space with professional painters.
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-surface-variant">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Starts at</span>
                        <span className="font-label-md text-label-md text-primary">$199</span>
                      </div>
                    </div>
                  </Link>

                  {/* Card 3 */}
                  <Link className="group bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full" href="#">
                    <div className="h-32 bg-surface-container w-full relative overflow-hidden">
                      <Image
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="AC Repair"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMM0CxjvCDbuczHXc7b3zCgsEe9pOXkEIWG-QyfqiiDe_I5UyO67A6YxsmSPBWNna0Ldz9CeKh6FJC8P4Fc3IsX-XXdSQ8j7Sj-5MaEdE9KeXxDws-4-LC2H7RWVjlvYKFwmriZ15vH9Sp_jpUoL5TSdzm9_EvY5hvsM1VA7DFFp--m2JyyftMLt446CUFYi8eC9lnlMOvPBW3zm0y3oy_5YVtR1vvv7UuSO4nqHQ634N--MCOz5LQ"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">AC Repair &amp; Svc</h3>
                        <span className="flex items-center text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>
                            star
                          </span>
                          4.7
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">
                        Keep cool with expert maintenance and repair.
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-surface-variant">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Starts at</span>
                        <span className="font-label-md text-label-md text-primary">$79</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-6">
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex gap-2 items-start">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">receipt_long</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface">Invoice <span className="font-label-sm">#INV-0982</span> generated</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Yesterday</p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">star_rate</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface">You rated <span className="font-label-sm">Mark T.</span> 5 stars</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Oct 12, 2023</p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <div className="relative w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                      <Image
                        fill
                        className="object-cover rounded-full"
                        alt="Plumber"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_1Q35qVz0a27dN4h7q2ZwK8kCY67Z0EplgST0mrH7gxnYI92Tgcsbh0DbFEbtV3i23UxxKHi9v89fP8kTSIPunzOzwKlBkpTtYTfbSypn3XBypqRnfvagmLiRMezGTxY8iXsu7GN1yas2EofEqE-XKVLDYcLDtfBrCwekmP-zxvzmRLEFcrDGaH5f_3Be-Ad5KY5Wj1jd8pIHz_NU5H7soyQvNTvkzOc0hmQ4RsuNckRrh4IP-IHF"
                      />
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface">Plumbing checkup completed</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Oct 10, 2023</p>
                      <button className="mt-1 text-primary font-label-sm text-label-sm hover:underline cursor-pointer">Rebook Pro</button>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 pt-2 border-t border-surface-variant text-primary font-label-sm text-label-sm hover:underline text-center cursor-pointer">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}