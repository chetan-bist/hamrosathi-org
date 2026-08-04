"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // 1. profiles टेबलमा यो फोन नम्बर र पासवर्ड भएको युजर खोज्ने
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("phone", formData.phone)
        .eq("password", formData.password)
        .single();

      if (error || !data) {
        throw new Error("Invalid phone number or password!");
      }

      // 2. युजर भेटियो, अब user_type हेerve र कुन ड्यासबोर्डमा पठाउने निर्णय गर्ने
      const userType = data.user_type;

      alert(`Login successful! Welcome back, ${data.full_name}`);

      if (userType === "client") {
        router.push("/dashboard/client");
      } else if (userType === "pro") {
        router.push("/dashboard/pro");
      } else if (userType === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Left Promotional Panel */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-tertiary overflow-hidden flex-col justify-between p-3xl">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXxYiUQFx633VQVNy6dC_iGp5ZZdLtKXAV6omLzkyh-BlgSuk5qqOU5ynBNKujmM5B8dJ3rKA3S2XY7ntIlgrag5nktZvrIwR0WQZiCcAGaU7Skvg64u1e0oq5KZImr1eQcjAdAkzBuqp1c1MnIphgPF7q4dURBGlQ-HB_Y766h9ymb_ZILheThwrEuw_DO_stt8Y2kkiyy77-NRABlCRYyv8lNbdyknLEDR2j61v-mraWi8eY6sIg"
            alt="Professional service workers"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/50 to-transparent"></div>
        <div className="relative z-10 flex flex-col gap-xl max-w-md">
          <span className="material-symbols-outlined text-secondary-fixed text-[48px]">
            login
          </span>
          <h2 className="font-display-lg text-display-lg text-on-tertiary">
            Welcome back to HamroSathi.
          </h2>
          <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
            Access your account to manage services or connect with trusted local professionals.
          </p>
        </div>
        <div className="relative z-10">
          <p className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
            Secure Login
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest shadow-[-10px_0_30px_rgba(15,23,42,0.03)] z-10 relative">
        <div className="w-full max-w-[440px] flex flex-col gap-xl">
          <div className="flex flex-col gap-md items-center text-center">
            <div className="relative w-20 h-20 rounded-2xl shadow-sm mb-xs overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida/AP1WRLvYBSkUed6h8geU7z0NRrvCkyX6Us-Hr4_-n7fuD4QA2z9J6pexCt7U-PF-rdKCyYYcyPIk51lX4i_5JcgMGazPT96LVW21ZXy5IJ40vZJmR6SVsep4Lfp5Ck4q3Y08Gucdt3grMu6SjYn3K6jzRSa8pu7AxBTbKSwcRp-1qJy53Nt9CSXP3N5ZeO3ZlmvLTrgRqb6kVmo3H5IMHjtYQ6BBZeaOlpI7-klUwJj3TeW9wP2OHYpoysz37GA"
                alt="HamroSathi Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">
              Log In to Your Account
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter your phone number and password.
            </p>
          </div>

          {errorMsg && (
            <div className="bg-error-container text-on-error-container p-sm rounded-lg text-sm text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-lg">
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+977 9800000000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-md py-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-2 focus:ring-primary-fixed focus:outline-none transition-all placeholder:text-on-surface-variant/50"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-md py-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-2 focus:ring-primary-fixed focus:outline-none transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 mt-sm bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md hover:bg-secondary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all flex items-center justify-center gap-sm disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log In"}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          <div className="text-center pt-md border-t border-outline-variant">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have an account?{" "}
              <Link className="text-primary font-bold hover:underline ml-xs" href="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}