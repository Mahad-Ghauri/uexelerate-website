import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uexelerate - Premium Software Development | You accelerate with Uexelerate",
  description:
    "Leading software development organization specializing in MEAN/MERN, Flutter, AI integration, UI/UX design, and security audits. Where innovation meets execution.",
  keywords:
    "software development, web development, mobile apps, Flutter, React, Node.js, AI integration, UI/UX design, security audits",
  authors: [{ name: "Uexelerate" }],
  openGraph: {
    title: "Uexelerate - Premium Software Development",
    description: "You accelerate with Uexelerate - Premium software development services",
    url: "https://uexelerate.com",
    siteName: "Uexelerate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uexelerate - Premium Software Development",
    description: "You accelerate with Uexelerate - Premium software development services",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
