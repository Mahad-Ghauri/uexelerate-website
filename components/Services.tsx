"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Brain, Palette, Layout, WorkflowIcon as Wordpress, Shield, ArrowRight } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "MEAN/MERN Web Development",
      description:
        "Static blogs, portfolio websites, SaaS products, and full-stack web applications with modern frameworks.",
      features: ["React/Angular", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Flutter Mobile Development",
      description: "Cross-platform mobile app development and deployment for iOS and Android with native performance.",
      features: ["Cross-platform", "Native Performance", "Material Design", "App Store Deployment"],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Brain,
      title: "Flutter + AI Integration",
      description: "AI-powered mobile applications with smart features and intelligent user experiences.",
      features: ["OpenAI Integration", "Gemini AI", "Claude AI", "Smart Features"],
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Palette,
      title: "Logo Designing",
      description: "Brand identity and visual design with creative logo solutions that represent your brand perfectly.",
      features: ["Brand Identity", "Vector Graphics", "Multiple Formats", "Brand Guidelines"],
      gradient: "from-green-500 to-lime-500",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "User interface and experience design with comprehensive design systems and interactive prototypes.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-lime-500 to-yellow-500",
    },
    {
      icon: Wordpress,
      title: "WordPress Development",
      description: "Custom WordPress solutions with theme and plugin development for scalable content management.",
      features: ["Custom Themes", "Plugin Development", "E-commerce", "Performance Optimization"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security Audits & Penetration Testing",
      description: "Application security assessment with vulnerability testing and comprehensive security reporting.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Reports", "Compliance"],
      gradient: "from-orange-500 to-red-500",
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
    <section id="services" className="py-20 relative">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development services designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
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
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
