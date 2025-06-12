import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Campus Creator Club" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold text-gray-900">Campus Creator Club</span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-semibold">DOWNLOAD</Button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center max-w-5xl leading-tight text-gray-900 mb-6">
          Where College Creators{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Connect, Grow, and Earn
          </span>
        </h1>

        <p className="text-center text-gray-600 max-w-2xl text-xl leading-relaxed mb-12 font-medium">
          Connect with college creators nationwide, access exclusive brand deals, and level up your content through
          webinars with top creators.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[200px] shadow-lg transition-colors">
              <div className="text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-100 font-semibold">Download on the</div>
                <div className="text-xl font-bold text-white">App Store</div>
              </div>
            </div>
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[200px] shadow-lg transition-colors">
              <div className="text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-100 font-semibold">Get it on</div>
                <div className="text-xl font-bold text-white">Google Play</div>
              </div>
            </div>
          </Link>
        </div>

        {/* App Screenshots with Device Frames */}
        <div className="relative w-full max-w-6xl">
          {/* Desktop Layout - Phones closer together */}
          <div className="hidden md:flex justify-center items-center relative">
            {/* Left Image - Dashboard */}
            <div className="transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 -mr-10 z-10">
              <div className="relative">
                <PhoneFrame>
                  <Image
                    src="/app-dashboard-new.png"
                    alt="Dashboard Screen"
                    width={280}
                    height={560}
                    className="w-full h-full object-cover"
                  />
                </PhoneFrame>
              </div>
            </div>

            {/* Center Image - Community (Featured) */}
            <div className="transform scale-110 z-20 hover:scale-115 transition-all duration-500">
              <div className="relative">
                <PhoneFrame featured>
                  <Image
                    src="/app-community-blue.png"
                    alt="Community Screen"
                    width={320}
                    height={640}
                    className="w-full h-full object-cover"
                  />
                </PhoneFrame>
              </div>
            </div>

            {/* Right Image - Campaigns */}
            <div className="transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 -ml-10 z-10">
              <div className="relative">
                <PhoneFrame>
                  <Image
                    src="/app-campaigns-new.png"
                    alt="Campaigns Screen"
                    width={280}
                    height={560}
                    className="w-full h-full object-cover"
                  />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Improved visibility */}
          <div className="md:hidden flex justify-center items-center relative h-[400px] mt-10">
            {/* Left Image - Dashboard */}
            <div className="absolute left-[5%] z-10 transform -rotate-6 scale-[0.65]">
              <PhoneFrame>
                <Image
                  src="/app-dashboard-new.png"
                  alt="Dashboard Screen"
                  width={280}
                  height={560}
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>

            {/* Center Image - Community (Featured) */}
            <div className="absolute z-30 transform scale-[0.75]">
              <PhoneFrame featured>
                <Image
                  src="/app-community-blue.png"
                  alt="Community Screen"
                  width={320}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>

            {/* Right Image - Campaigns */}
            <div className="absolute right-[5%] z-20 transform rotate-6 scale-[0.65]">
              <PhoneFrame>
                <Image
                  src="/app-campaigns-new.png"
                  alt="Campaigns Screen"
                  width={280}
                  height={560}
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function PhoneFrame({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <div className={`relative ${featured ? "drop-shadow-2xl" : "drop-shadow-xl"}`}>
      {/* Phone Frame */}
      <div className={`relative bg-gray-900 rounded-[2.5rem] p-2 ${featured ? "ring-4 ring-blue-500/20" : ""}`}>
        {/* Screen */}
        <div className="relative bg-black rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-black rounded-b-2xl px-6 py-1">
              <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full">{children}</div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-32 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-full"></div>
        <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-full"></div>
        <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-r-full"></div>
        <div className="absolute right-0 top-28 w-1 h-16 bg-gray-700 rounded-l-full"></div>
      </div>
    </div>
  )
}
