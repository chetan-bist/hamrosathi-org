"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RegisterWorkerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    citizenshipNum: "",
    address: "",
    expertise: "",
    experience: "",
  });

  const [citizenshipFile, setCitizenshipFile] = useState<File | null>(null);
  const [proofFile, setProofFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      let citizenshipUrl = "";
      let proofUrl = "";

      // 1. Upload Citizenship Document if available
      if (citizenshipFile) {
        const fileName = `${Date.now()}_${citizenshipFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("worker-documents")
          .upload(`citizenship/${fileName}`, citizenshipFile);

        if (uploadError) throw uploadError;
        
        const { data: publicURLData } = supabase.storage
          .from("worker-documents")
          .getPublicUrl(`citizenship/${fileName}`);
        
        citizenshipUrl = publicURLData.publicUrl;
      }

      // 2. Upload Professional Proof Document if available
      if (proofFile) {
        const fileName = `${Date.now()}_${proofFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("worker-documents")
          .upload(`proof/${fileName}`, proofFile);

        if (uploadError) throw uploadError;

        const { data: publicURLData } = supabase.storage
          .from("worker-documents")
          .getPublicUrl(`proof/${fileName}`);
        
        proofUrl = publicURLData.publicUrl;
      }

      // 3. Insert Data into Supabase Table
      const { error: dbError } = await supabase.from("worker_registrations").insert([
        {
          full_name: formData.fullName,
          contact_number: formData.contactNumber,
          citizenship_number: formData.citizenshipNum,
          address: formData.address,
          expertise: formData.expertise,
          experience: formData.experience,
          citizenship_doc_url: citizenshipUrl,
          proof_doc_url: proofUrl,
        },
      ]);

      if (dbError) throw dbError;

      alert("Registration submitted successfully! We will review your documents.");
      router.push("/dashboard/client");
    } catch (err: any) {
      console.error("Error registering worker:", err.message);
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col text-on-surface">
      {/* TopNavBar */}
      <nav className="bg-surface-container-lowest border-b border-outline-variant shadow-sm sticky top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-[1280px] mx-auto">
          <Link href="/dashboard/client" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">HamroSathi</span>
          </Link>
          <div className="flex items-center">
            <Link className="font-label-md text-label-md text-primary hover:text-secondary transition-colors px-4 py-2" href="/dashboard/client">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-10">
        <div className="w-full max-w-[800px] bg-surface-container-lowest rounded-lg border border-outline-variant shadow-md overflow-hidden">
          <div className="bg-surface-container-lowest px-6 py-8 border-b border-outline-variant text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface">Register as Worker</h1>
            <p className="text-sm text-on-surface-variant mt-2 max-w-lg mx-auto">
              Join our trusted network of verified professionals. Complete the form below to start receiving service requests.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 flex flex-col gap-6">
            {errorMessage && (
              <div className="bg-error-container text-on-error-container p-4 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface" htmlFor="fullName">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">person</span>
                  <input
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-lg pl-12 pr-4 py-3 text-on-surface focus:outline-none focus:border-primary"
                    id="fullName"
                    placeholder="e.g. Ram Bahadur Thapa"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface" htmlFor="contactNumber">Contact Number</label>
                <div className="relative flex">
                  <div className="flex items-center justify-center bg-surface-container-low border border-outline border-r-0 rounded-l-lg px-4 h-[46px]">
                    <span className="material-symbols-outlined text-outline">call</span>
                    <span className="text-sm text-on-surface-variant ml-1">+977</span>
                  </div>
                  <input
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-r-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary"
                    id="contactNumber"
                    placeholder="98XXXXXXXX"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Citizenship Number */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface" htmlFor="citizenshipNum">Citizenship / eNID Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">badge</span>
                  <input
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-lg pl-12 pr-4 py-3 text-on-surface focus:outline-none focus:border-primary"
                    id="citizenshipNum"
                    placeholder="XX-XX-XX-XXXXX"
                    type="text"
                    value={formData.citizenshipNum}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Current Address */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface" htmlFor="address">Current Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-4 text-outline">location_on</span>
                  <textarea
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-lg pl-12 pr-4 py-3 text-on-surface focus:outline-none focus:border-primary resize-none"
                    id="address"
                    placeholder="Street, Ward No, Municipality, District"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Primary Skill */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface" htmlFor="expertise">Primary Skill / Expertise</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">handyman</span>
                  <select
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-lg pl-12 pr-10 py-3 text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    id="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select your trade</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="masonry">Masonry</option>
                    <option value="painting">Painting</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface" htmlFor="experience">Years of Experience</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">work_history</span>
                  <select
                    required
                    className="w-full bg-surface-container-lowest border border-outline rounded-lg pl-12 pr-10 py-3 text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select experience level</option>
                    <option value="1-2">1 - 2 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5-10">5 - 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Citizenship Photo Upload */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface">Citizenship / eNID Document</label>
                <div className="drop-zone border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer relative overflow-hiden h-[140px]">
                  <input
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => e.target.files && setCitizenshipFile(e.target.files[0])}
                  />
                  <div className="flex flex-col items-center gap-2 pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[24px]">upload_file</span>
                    <p className="font-label-md text-on-surface text-center">
                      {citizenshipFile ? citizenshipFile.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs text-on-surface-variant">Front and Back (JPG, PNG up to 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Proof Photo Upload */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface">Professional ID / Certification Proof</label>
                <div className="drop-zone border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer relative overflow-hiden h-[140px]">
                  <input
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => e.target.files && setProofFile(e.target.files[0])}
                  />
                  <div className="flex flex-col items-center gap-2 pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[24px]">workspace_premium</span>
                    <p className="font-label-md text-on-surface text-center">
                      {proofFile ? proofFile.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs text-on-surface-variant">Training certificate, union card, etc. (JPG, PNG up to 5MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-outline-variant mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary font-label-md py-4 rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
              <p className="text-center text-xs text-on-surface-variant mt-3">
                By submitting, you agree to undergo a background verification process.
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full mt-12 border-t border-outline-variant py-6 px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <div className="font-bold text-primary text-base">HamroSathi</div>
          <div>© 2026 HamroSathi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}