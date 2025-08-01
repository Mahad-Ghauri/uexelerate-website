"use client"

import { motion } from "framer-motion"
import { Target, Eye, Lightbulb, Rocket, Award, Users } from "lucide-react"

const About = () => {
  const pitchLines = [
    "Where innovation meets execution",
    "Crafting digital experiences that matter",
    "Your trusted partner in digital acceleration",
    "Building tomorrow's software today",
  ]

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Rocket },
    { number: "5+", label: "Years Experience", icon: Target },
  ]

  return (
    <section id="about" className="py-20 relative">
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
              About Uexelerate
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mission */}
            <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To accelerate digital transformation through innovative, scalable, and maintainable software solutions
                  that empower businesses to thrive in the digital age.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Leading the future of software development with cutting-edge technology and exceptional user
                  experiences that set new industry standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pitch Lines */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <Lightbulb className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">What Defines Us</h3>
            </div>

            {pitchLines.map((line, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-xl bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <p className="text-lg text-gray-300 font-medium">{line}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
