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
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-black border border-gray-600 rounded-xl px-5 py-3 flex items-center gap-3 min-w-[200px]">
              <div className="text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Download on the</div>
                <div className="text-xl font-semibold text-white">App Store</div>
              </div>
            </div>
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-black rounded-xl px-5 py-3 flex items-center gap-3 min-w-[200px]">
              <Image src="/google-play-black-bg.png" alt="Google Play" width={32} height={32} className="w-8 h-8" />
              <div>
                <div className="text-xs text-gray-400 font-medium">GET IT ON</div>
                <div className="text-xl font-semibold text-white">Google Play</div>
              </div>
            </div>
          </Link>
        </div>

        {/* App Screenshots with Perfect Frames */}
        <div className="relative w-full max-w-6xl">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-center relative">
            {/* Left Image - Dashboard */}
            <div className="transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 -mr-16 z-10">
              <PhoneFrame>
                <Image
                  src="/dashboard-screen.png"
                  alt="Dashboard Screen"
                  fill
                  className="object-cover rounded-[36px]"
                  priority
                />
              </PhoneFrame>
            </div>

            {/* Center Image - Community (Featured) */}
            <div className="transform scale-110 z-20 hover:scale-115 transition-all duration-500">
              <PhoneFrame>
                <Image
                  src="/community-screen.png"
                  alt="Community Screen"
                  fill
                  className="object-cover rounded-[36px]"
                  priority
                />
              </PhoneFrame>
            </div>

            {/* Right Image - Campaigns */}
            <div className="transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 -ml-16 z-10">
              <PhoneFrame>
                <Image
                  src="/campaigns-screen.png"
                  alt="Campaigns Screen"
                  fill
                  className="object-cover rounded-[36px]"
                  priority
                />
              </PhoneFrame>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex justify-center items-center relative">
            <div className="relative h-[500px] w-full flex justify-center">
              {/* Left Image - Dashboard */}
              <div className="absolute transform -rotate-6 z-10" style={{ left: "calc(50% - 100px)" }}>
                <PhoneFrameMobile>
                  <Image
                    src="/dashboard-screen.png"
                    alt="Dashboard Screen"
                    fill
                    className="object-cover rounded-[24px]"
                    priority
                  />
                </PhoneFrameMobile>
              </div>

              {/* Center Image - Community (Featured) */}
              <div className="absolute transform scale-110 z-20">
                <PhoneFrameMobile>
                  <Image
                    src="/community-screen.png"
                    alt="Community Screen"
                    fill
                    className="object-cover rounded-[24px]"
                    priority
                  />
                </PhoneFrameMobile>
              </div>

              {/* Right Image - Campaigns */}
              <div className="absolute transform rotate-6 z-10" style={{ right: "calc(50% - 100px)" }}>
                <PhoneFrameMobile>
                  <Image
                    src="/campaigns-screen.png"
                    alt="Campaigns Screen"
                    fill
                    className="object-cover rounded-[24px]"
                    priority
                  />
                </PhoneFrameMobile>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Phone frame component for desktop
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-black rounded-[40px] p-[3px] overflow-hidden"
      style={{ width: "270px", height: "550px" }}
    >
      <div className="relative bg-white rounded-[38px] overflow-hidden h-full w-full">{children}</div>
    </div>
  )
}

// Phone frame component for mobile (smaller)
function PhoneFrameMobile({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-black rounded-[28px] p-[2px] overflow-hidden"
      style={{ width: "180px", height: "370px" }}
    >
      <div className="relative bg-white rounded-[26px] overflow-hidden h-full w-full">{children}</div>
    </div>
  )
}
