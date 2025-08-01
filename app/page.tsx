"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack"
import About from "@/components/About"
import WhyChooseUs from "@/components/WhyChooseUs"
import Contact from "@/components/Contact"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import ParticleBackground from "@/components/ParticleBackground"
import DevelopmentLifecycle from "@/components/DevelopmentLifecycle"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-slate-900 overflow-x-hidden">
      <ParticleBackground />

      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% ${backgroundY}, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />

      <Header />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <DevelopmentLifecycle />
      <About />
      <WhyChooseUs />
      <Contact />
      <FloatingWhatsApp />
    </div>
  )
}
