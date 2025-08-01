"use client"

import { motion } from "framer-motion"
import { Award, Code, Zap, Layers, Brain, Shield, CheckCircle } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Premium Quality Delivery",
      description: "Top 1% development standards with meticulous attention to detail and industry best practices.",
      features: ["Code Reviews", "Quality Assurance", "Performance Testing", "User Experience Focus"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Clean & Maintainable Code",
      description: "Scalable architecture following industry best practices for long-term sustainability.",
      features: ["SOLID Principles", "Design Patterns", "Documentation", "Modular Architecture"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development approach with efficient project management and rapid iterations.",
      features: ["Agile Methodology", "Sprint Planning", "Continuous Integration", "Regular Updates"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Comprehensive Services",
      description: "End-to-end solution provider with multi-technology expertise under one roof.",
      features: ["Full-Stack Development", "Mobile Apps", "UI/UX Design", "DevOps"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI Integration Expertise",
      description: "Cutting-edge AI implementations that prepare your solutions for the future.",
      features: ["OpenAI Integration", "Gemini AI", "Claude AI", "Custom AI Solutions"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description: "Built-in security measures with regular security audits and compliance checks.",
      features: ["Security Audits", "Penetration Testing", "Data Protection", "Compliance"],
      gradient: "from-red-500 to-pink-500",
    },
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what sets us apart and makes us the preferred choice for premium software development
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{reason.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {reason.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className={`w-4 h-4 text-green-400`} />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Project?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied clients who have experienced the Uexelerate difference. Let's build something
              extraordinary together.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
