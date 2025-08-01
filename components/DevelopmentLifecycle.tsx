"use client"

import { motion } from "framer-motion"
import { Users, FileText, CheckCircle, Code, TestTube, Rocket, Monitor, Shield, ArrowRight, Clock } from "lucide-react"

const DevelopmentLifecycle = () => {
  const phases = [
    {
      icon: Users,
      title: "Requirements Gathering",
      description: "Client consultation and needs analysis with comprehensive project scope definition",
      details: [
        "Stakeholder interviews",
        "Business requirements analysis",
        "Technical feasibility study",
        "Project scope documentation",
      ],
      gradient: "from-blue-500 to-cyan-500",
      duration: "1-2 weeks",
    },
    {
      icon: FileText,
      title: "Analysis & Planning",
      description: "Technical architecture design and detailed project timeline creation",
      details: [
        "System architecture design",
        "Technology stack selection",
        "Database design",
        "Project timeline creation",
      ],
      gradient: "from-cyan-500 to-teal-500",
      duration: "1-2 weeks",
    },
    {
      icon: CheckCircle,
      title: "Client Review & Approval",
      description: "Prototype presentation and comprehensive feedback incorporation",
      details: ["Prototype development", "Client presentation", "Feedback collection", "Requirement refinement"],
      gradient: "from-teal-500 to-green-500",
      duration: "3-5 days",
    },
    {
      icon: Code,
      title: "Development Phase",
      description: "Agile development methodology with regular progress updates and iterations",
      details: ["Sprint planning", "Feature development", "Code reviews", "Progress reporting"],
      gradient: "from-green-500 to-lime-500",
      duration: "4-12 weeks",
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing protocols with bug fixing and performance optimization",
      details: ["Unit testing", "Integration testing", "Performance testing", "Bug fixing"],
      gradient: "from-lime-500 to-yellow-500",
      duration: "1-2 weeks",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Production deployment with comprehensive performance monitoring setup",
      details: ["Production setup", "Database migration", "Performance monitoring", "Backup configuration"],
      gradient: "from-yellow-500 to-orange-500",
      duration: "3-5 days",
    },
    {
      icon: Monitor,
      title: "Post-Deployment Testing",
      description: "Live environment validation and comprehensive user acceptance testing",
      details: ["Live environment testing", "User acceptance testing", "Performance validation", "Issue resolution"],
      gradient: "from-orange-500 to-red-500",
      duration: "1 week",
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Vulnerability assessment and security compliance verification",
      details: ["Security scanning", "Penetration testing", "Compliance verification", "Security documentation"],
      gradient: "from-red-500 to-pink-500",
      duration: "1 week",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
              Development Lifecycle
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 8-step methodology ensures successful project delivery with transparency and quality at every
            stage
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transform md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-4 z-10">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${phase.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <phase.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Phase Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-800">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{phase.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>

                      {/* Details */}
                      <div className="space-y-2">
                        {phase.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                            <span className="text-sm text-gray-400">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow for desktop */}
                    {index < phases.length - 1 && (
                      <div
                        className={`hidden md:block absolute top-1/2 ${
                          index % 2 === 0 ? "-right-4" : "-left-4"
                        } transform -translate-y-1/2`}
                      >
                        <ArrowRight className={`w-6 h-6 text-cyan-400 ${index % 2 === 1 ? "rotate-180" : ""}`} />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience our proven development methodology that has delivered successful projects for clients
              worldwide. Let's discuss your project requirements and timeline.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentLifecycle
