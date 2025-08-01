"use client"

import { motion } from "framer-motion"
import { Users, MapPin, ShoppingCart } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Konexea - Social Media Platform",
      description:
        "Next-generation social media application integrating social networking, AI-powered assistance, and e-commerce functionality",
      problem: "Platform fragmentation, impersonal connections, siloed AI integration, disconnected commerce",
      motive: "Create unified digital experience for creators, learners, and everyday users",
      techStack: ["Flutter", "Supabase", "Firebase", "Google Gemini AI", "Material Design 3"],
      features: ["AI Chat Assistant", "Real-time Messaging", "E-Commerce Hub", "Weekly AI Insights"],
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      image: "/social-media-app-interface.png",
    },
    {
      title: "Madadgar - Community Aid Platform",
      description: "Community-driven aid and resource sharing platform for seamless local help and assistance",
      problem:
        "Fragmented aid systems, lack of trust and verification, geographic disconnect, educational resource gaps",
      motive: "Build trusted, accessible platform for neighborly help and community education",
      techStack: ["Flutter", "Firebase", "Cloud Firestore", "Geolocator", "Material Design 3"],
      features: [
        "Location-based matching",
        "Multi-tier verification",
        "Real-time chat",
        "Educational resource sharing",
      ],
      icon: Users,
      gradient: "from-green-500 to-teal-500",
      image: "/community-aid-app-interface.png",
    },
    {
      title: "Tour Guide - Travel Planning Platform",
      description: "Intelligent travel planning and local guide discovery platform with AI-powered assistance",
      problem: "Fragmented travel planning, lack of verified local guides, limited authentic local experiences",
      motive: "Transform travel planning through intelligent AI assistance and verified local expertise",
      techStack: ["Flutter", "Supabase", "Google Maps API", "Gemini AI", "Material Design 3"],
      features: ["AI travel assistant", "QR code verification", "Local guide marketplace", "Digital memory management"],
      icon: MapPin,
      gradient: "from-blue-500 to-cyan-500",
      image: "/travel-planning-app.png",
    },
    {
      title: "ShopEase - E-commerce Platform",
      description: "Full-featured e-commerce mobile application with AI-powered shopping assistant",
      problem: "Complex shopping experiences, lack of personalized recommendations, poor customer support",
      motive: "Deliver seamless shopping experience with intelligent AI assistance",
      techStack: ["Flutter", "Firebase/Supabase", "Gemini AI", "Provider state management"],
      features: ["AI chatbot assistant", "Product discovery", "Shopping cart", "Secure checkout"],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
      image: "/ecommerce-app-interface.png",
    },
    {
      title: "BLYND - Modern Social Media Platform",
      description:
        "Modern social media application built with Flutter, featuring a sleek Instagram-inspired UI and robust backend integration for seamless social experiences.",
      problem: "Complex social media development, poor user engagement, security vulnerabilities, scalability issues",
      motive:
        "Create a secure, scalable social platform with modern UI/UX and real-time features for authentic social connections",
      techStack: ["Flutter 3.19.0", "Firebase 10.8.0", "Supabase 2.3.4", "Dart", "MIT License"],
      features: ["Real-time feed updates", "Secure authentication", "Social connections", "Post creation & engagement"],
      icon: Users,
      gradient: "from-pink-500 to-purple-500",
      image: "/social-media-blynd-interface.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions that showcase our expertise in creating transformative digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  {/* Problem & Motive */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="text-red-400 font-semibold mb-2">Problem Solved</h4>
                      <p className="text-gray-300 text-sm">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <h4 className="text-green-400 font-semibold mb-2">Our Motive</h4>
                      <p className="text-gray-300 text-sm">{project.motive}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-slate-700/50 text-gray-300 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
