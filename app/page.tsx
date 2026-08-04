import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-[1280px] mx-auto left-0 right-0">
        <div className="flex items-center gap-md">
          <a className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed" href="#">
            HamroSathi
          </a>
        </div>
        <div className="hidden md:flex flex-1 max-w-md mx-lg justify-center relative">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="w-full pl-xl pr-sm py-sm rounded-full border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-body-sm"
            placeholder="Search for services..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-sm">
          <Link href="/login" className="text-primary dark:text-primary-fixed font-headline-sm text-headline-sm hover:text-secondary dark:hover:text-secondary-fixed transition-colors cursor-pointer px-md py-sm">
            Login
          </Link>
          <Link className="font-label-md text-label-md dark:text-primary-fixed text-primary hover:text-secondary hover:underline transition-colors" href="/signup">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="mt-16 pt-3xl max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-3xl py-3xl">
          <div className="flex-1 space-y-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface">
              Verified Professionals for every task
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Find trusted local experts for cleaning, repairs, moving, and more. Secure, reliable, and verified by HamroSathi.
            </p>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col sm:flex-row gap-md">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  className="w-full pl-xl pr-sm py-sm rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary text-body-md"
                  placeholder="What do you need help with?"
                  type="text"
                />
              </div>
              <button className="bg-primary text-on-primary font-label-md text-label-md rounded-lg px-lg py-sm hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap">
                Find a Pro
              </button>
            </div>
            <div className="flex items-center gap-md text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span>Verified Pros</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lock
                </span>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-outline-variant relative">
            <Image
              fill
              className="object-cover"
              alt="Professional tradesperson"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgH05SsR3Xgp_-DUtKS4v6SPv9imoiYwlT-yAmjDOVzvx6shbEN4_4qF5cOO8Eyuna0-6OQmw0CAY5zaST-70jYQ9s4mbBy_WI_aMJJ5hMaav0ElWQnuggy-va4zTfsyaf3uZ3v3K_eXZK1b15W5fbg9jCCHyvP4jDsbZoo5m9pZqQxSQi-CEM14pKlh13R_8d4PwtHkkJrduf75jVKEKy8a-4DKpWt0q5qjwTgIt-jfeXkDuGeEAH"
            />
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-3xl">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Popular Services</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
              Find exactly what you need from our verified pros.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {[
              { name: "Cleaning", icon: "cleaning_services" },
              { name: "Plumbing", icon: "plumbing" },
              { name: "Electrical", icon: "electrical_services" },
              { name: "Moving", icon: "local_shipping" },
            ].map((cat, idx) => (
              <a
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col items-center text-center gap-md hover:shadow-md hover:-translate-y-1 transition-all group"
                href="#"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface">{cat.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-3xl bg-surface-container-low -mx-margin-mobile md:-mx-margin-desktop px-margin-mobile md:px-margin-desktop rounded-3xl my-3xl">
          <div className="text-center mb-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">How HamroSathi Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
              Simple steps to get your task done or start earning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3xl">
            {/* For Clients */}
            <div className="bg-surface-container-lowest rounded-2xl p-xl shadow-sm border border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">person</span>
                For Clients
              </h3>
              <ul className="space-y-lg">
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Search for a Pro</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Describe your task and find verified professionals in your area.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Book & Secure Payment</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Choose a pro, confirm details, and pay securely through the platform.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Get it Done</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">The pro completes the task. Review and release payment once satisfied.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Pros */}
            <div className="bg-surface-container-lowest rounded-2xl p-xl shadow-sm border border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary">work</span>
                For Professionals
              </h3>
              <ul className="space-y-lg">
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Create a Profile</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sign up, list your skills, and get verified to build trust.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Receive Requests</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Get notified when clients in your area need your specific services.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Work & Earn</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Complete jobs, get paid securely, and build your reputation.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-lg pt-lg border-t border-outline-variant text-center">
                <button className="bg-secondary text-on-secondary font-label-md text-label-md rounded-lg px-lg py-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm w-full sm:w-auto">
                  Join as a Pro Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center gap-md py-3xl px-margin-desktop bg-surface-container-high border-t border-outline-variant">
        <div className="font-headline-sm text-headline-sm font-bold text-on-surface">HamroSathi</div>
        <div className="flex gap-lg flex-wrap justify-center">
          <a className="text-on-surface-variant  hover:text-primary  font-body-sm text-body-sm" href="#">Terms of Service</a>
          <a className="text-on-surface-variant  hover:text-primary  font-body-sm text-body-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant  hover:text-primary  font-body-sm text-body-sm" href="#">Become a Partner</a>
          <a className="text-on-surface-variant  hover:text-primary  font-body-sm text-body-sm" href="#">Help Center</a>
        </div>
        <div className="text-on-surface-variant  font-body-sm text-body-sm opacity-100">
          © 2026 HamroSathi. Secure & Verified Services.
        </div>
      </footer>
    </>
  );
}