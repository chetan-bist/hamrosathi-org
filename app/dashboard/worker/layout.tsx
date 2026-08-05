"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function WorkerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [userName, setUserName] = useState("Ramesh Worker");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_type", "worker")
          .limit(1)
          .single();

        if (data && data.full_name) {
          setUserName(data.full_name);
        }
      } catch (err) {
        console.error("Error fetching worker profile:", err);
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
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest text-primary font-body-md w-full border-b border-outline-variant shadow-sm sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 h-20">
        <div className="flex items-center gap-8 h-full">
          <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
              handyman
            </span>{" "}
            HamroSathi
          </div>
          <div className="hidden md:flex relative items-center max-w-md w-[400px]">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant pointer-events-none">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-2 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary text-on-surface focus:bg-surface-container-lowest transition-colors h-10 outline-none placeholder:text-on-surface-variant font-body-sm text-body-sm"
              placeholder="Search tasks, clients..."
              type="text"
            />
          </div>
        </div>
        <nav className="hidden md:flex h-full items-center gap-2">
          <button aria-label="Notifications" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors relative cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          
          <button 
            onClick={() => router.push("/dashboard/worker/messages")}
            aria-label="Messages" 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors relative cursor-pointer ${
              pathname === "/dashboard/worker/messages"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/messages" ? '"FILL" 1' : '"FILL" 0' }}>chat</span>
          </button>

          <button aria-label="User Profile" className="ml-2 w-10 h-10 rounded-full overflow-hidden border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer active:scale-95 relative">
            <Image
              fill
              className="object-cover"
              alt="Worker Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVj8cjFiJWi_24JXLVbvyd6W4QhXP47sDtyOZsDR5BwdxuJnVGwmUdfE0-KHmaLLwYrGoXFI4ePpaXbCv-AudbIqYln0zL51X4Z5rHdYcSdX2RFu0oiVDOr-Mc79YZTH0sPbac1sPEvzvq6y_I21x1ake7WsFsavzdI4KyBJknS-zFEzG9RiM2YA3rG_WV9i1jEU1Ob4ESp-2pol5YQ2SkHGVdiRW9VMc76XbJDInUyKs5mAO4Jgi"
            />
          </button>
        </nav>
      </header>

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col w-64 bg-surface h-[calc(100vh-80px)] border-r border-outline-variant sticky top-20 flex-shrink-0">
          <div className="p-4 py-6 flex flex-col items-center border-b border-outline-variant/50">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-surface-container-lowest shadow-sm">
              <Image
                fill
                className="object-cover"
                alt="Profile picture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVj8cjFiJWi_24JXLVbvyd6W4QhXP47sDtyOZsDR5BwdxuJnVGwmUdfE0-KHmaLLwYrGoXFI4ePpaXbCv-AudbIqYln0zL51X4Z5rHdYcSdX2RFu0oiVDOr-Mc79YZTH0sPbac1sPEvzvq6y_I21x1ake7WsFsavzdI4KyBJknS-zFEzG9RiM2YA3rG_WV9i1jEU1Ob4ESp-2pol5YQ2SkHGVdiRW9VMc76XbJDInUyKs5mAO4Jgi"
              />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface text-center">
              {loading ? "Loading..." : userName}
            </h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant text-center flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                verified
              </span>
              Verified Provider
            </p>
          </div>

          <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker" ? '"FILL" 1' : '"FILL" 0' }}>
                dashboard
              </span>
              Dashboard
            </Link>

            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker/jobs" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker/jobs"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/jobs" ? '"FILL" 1' : '"FILL" 0' }}>
                work_history
              </span>
              Job Requests
            </Link>

            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker/tasks" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker/tasks"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/tasks" ? '"FILL" 1' : '"FILL" 0' }}>
                task_alt
              </span>
              Active Tasks
            </Link>

            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker/earnings" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker/earnings"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/earnings" ? '"FILL" 1' : '"FILL" 0' }}>
                payments
              </span>
              Earnings
            </Link>

            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker/messages" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker/messages"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/messages" ? '"FILL" 1' : '"FILL" 0' }}>
                chat
              </span>
              Messages
            </Link>

            <Link 
              className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                pathname === "/dashboard/worker/profile" 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`} 
              href="/dashboard/worker/profile"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/profile" ? '"FILL" 1' : '"FILL" 0' }}>
                account_circle
              </span>
              Profile
            </Link>

            <div className="mt-auto border-t border-outline-variant/50 pt-2 flex flex-col gap-1">
              <Link 
                className={`flex items-center gap-4 rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out ${
                  pathname === "/dashboard/worker/settings" 
                    ? "bg-primary-container text-on-primary-container" 
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`} 
                href="/dashboard/worker/settings"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/dashboard/worker/settings" ? '"FILL" 1' : '"FILL" 0' }}>
                  settings
                </span>
                Settings
              </Link>
              
              <button onClick={handleLogout} className="w-full flex items-center gap-4 text-on-surface-variant hover:bg-surface-container-high rounded-lg px-4 py-2 font-label-md text-label-md transition-all duration-200 ease-in-out text-left cursor-pointer">
                <span className="material-symbols-outlined">logout</span>
                Logout
              </button>
            </div>
          </nav>

          <div className="p-4">
            <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">bolt</span>
              View New Leads
            </button>
          </div>
        </aside>

        {/* Dynamic Main Content Area */}
        <main className={`flex-1 overflow-x-hidden ${pathname === "/dashboard/worker/messages" ? "p-0" : "p-4 md:p-10"}`}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm w-full py-8 px-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-outline-variant mt-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-4 md:mb-0">HamroSathi Worker</div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
          <Link className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Terms of Service</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Help Center</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Contact Support</Link>
        </div>
        <div>
          © 2026 HamroSathi Marketplace. All rights reserved.
        </div>
      </footer>
    </div>
  );
}