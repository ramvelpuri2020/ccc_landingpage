import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Campus Creator Club - Where College Creators Connect, Grow, and Earn",
  description:
    "Connect with college creators nationwide, access exclusive brand deals, and level up your content through webinars with top creators.",
  keywords: "college creators, brand deals, content creation, influencer marketing, student creators",
  openGraph: {
    title: "Campus Creator Club",
    description: "Where college creators connect, grow, and earn",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
