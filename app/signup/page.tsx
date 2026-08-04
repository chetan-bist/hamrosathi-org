"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    userType: "client",
    fullName: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // सिधै profiles टेबलमा डेटा इन्सर्ट गर्ने (इमेल र Auth को झन्झट नै छैन)
      const { error: insertError } = await supabase.from("profiles").insert([
        {
          full_name: formData.fullName,
          phone: formData.phone,
          password: formData.password, // नोट: प्रोडक्सनमा पासवर्ड ह्यास (hash) गरेर राख्नुपर्छ
          user_type: formData.userType,
        },
      ]);

      if (insertError) {
        if (insertError.code === "23505") {
          throw new Error("This phone number is already registered!");
        }
        throw insertError;
      }

      alert("Account created successfully!");
      router.push("/login");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Left Promotional Panel (Desktop only) */}
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
            verified_user
          </span>
          <h2 className="font-display-lg text-display-lg text-on-tertiary">
            Verified professionals for your peace of mind.
          </h2>
          <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
            Join thousands of homeowners who trust HamroSathi to connect them with top-rated, secure local services.
          </p>
        </div>
        <div className="relative z-10">
          <p className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
            Secure &amp; Encrypted
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
              Create an Account
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Securely join our trusted community.
            </p>
          </div>

          {errorMsg && (
            <div className="bg-error-container text-on-error-container p-sm rounded-lg text-sm text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSignup} className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <span className="font-label-sm text-label-sm text-on-surface">
                I want to join as a:
              </span>
              <div className="grid grid-cols-2 gap-md">
                {/* Client Option */}
                <label className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="userType" 
                    value="client"
                    checked={formData.userType === "client"}
                    onChange={handleChange}
                    className="peer sr-only" 
                  />
                  <div className="h-full border-2 border-outline-variant rounded-xl p-md flex flex-col items-center justify-center gap-sm transition-all duration-200 peer-checked:border-[#00236f] peer-checked:bg-[#dce1ff] hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-[#00164e]">
                      person
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant peer-checked:text-[#00164e]">
                      Client
                    </span>
                  </div>
                </label>

                {/* Service Pro Option */}
                <label className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="userType" 
                    value="pro"
                    checked={formData.userType === "pro"}
                    onChange={handleChange}
                    className="peer sr-only" 
                  />
                  <div className="h-full border-2 border-outline-variant rounded-xl p-md flex flex-col items-center justify-center gap-sm transition-all duration-200 peer-checked:border-[#00236f] peer-checked:bg-[#dce1ff] hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-[32px] text-on-surface-variant peer-checked:text-[#00164e]">
                      engineering
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant peer-checked:text-[#00164e]">
                      Service Pro
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-md py-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-body-md focus:border-primary focus:ring-2 focus:ring-primary-fixed focus:outline-none transition-all placeholder:text-on-surface-variant/50"
                />
              </div>

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

            <div className="flex items-start gap-sm mt-sm">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer"
              />
              <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="terms">
                I agree to the{" "}
                <Link className="text-primary hover:underline font-medium" href="#">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="text-primary hover:underline font-medium" href="#">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 mt-sm bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md hover:bg-secondary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all flex items-center justify-center gap-sm disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          <div className="text-center pt-md border-t border-outline-variant">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?{" "}
              <Link className="text-primary font-bold hover:underline ml-xs" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}