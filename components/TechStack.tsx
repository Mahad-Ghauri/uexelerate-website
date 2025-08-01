"use client"

import { motion } from "framer-motion"
import { Database, Globe, Smartphone, Brain, Cloud, GitBranch, Palette, Shield } from "lucide-react"
import { useEffect, useState } from "react"

interface FloatingIcon {
  id: number
  left: number
  top: number
  duration: number
  delay: number
}

const TechStack = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([])

  const primaryStack = [
    { name: "MEAN Stack", icon: Globe, description: "MongoDB, Express.js, Angular, Node.js" },
    { name: "Flutter & Dart", icon: Smartphone, description: "Cross-platform mobile development" },
    { name: "Node.js", icon: Database, description: "Server-side JavaScript runtime" },
    { name: "AI Chatbots", icon: Brain, description: "OpenAI, Gemini, Claude integration" },
  ]

  const secondaryStack = [
    { name: "GitHub & Git", icon: GitBranch, description: "Version control and collaboration" },
    { name: "GitLab", icon: GitBranch, description: "DevOps and CI/CD platform" },
    { name: "Firebase", icon: Cloud, description: "Backend-as-a-Service platform" },
    { name: "Supabase", icon: Database, description: "Open source Firebase alternative" },
    { name: "Google Cloud", icon: Cloud, description: "Cloud computing services" },
    { name: "AWS", icon: Cloud, description: "Amazon Web Services" },
    { name: "Material Design 3", icon: Palette, description: "Modern design system" },
    { name: "Provider State", icon: Shield, description: "Flutter state management" },
  ]

  // Generate floating icons only on client side to avoid hydration mismatch
  useEffect(() => {
    const newFloatingIcons: FloatingIcon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setFloatingIcons(newFloatingIcons)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our innovative solutions
          </p>
        </motion.div>

        {/* Primary Stack */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Primary Technologies
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {primaryStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Stack */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Supporting Technologies
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {secondaryStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-4 rounded-xl bg-slate-800/30 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                      <tech.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-gray-400 text-xs">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((icon) => (
            <motion.div
              key={icon.id}
              className="absolute w-8 h-8 opacity-10"
              style={{
                left: `${icon.left}%`,
                top: `${icon.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: icon.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: icon.delay,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack