import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Higher Degree in Multiplatform Application Development",
      institution: "European University, Madrid",
      period: "2020–2022",
      description: "Comprehensive training in software development, mobile applications, and web technologies.",
      icon: "🎓"
    },
    {
      degree: "Intermediate Degree in Microcomputer Systems and Networks",
      institution: "FP Campus",
      period: "2018–2020",
      description: "Foundation in computer systems, networking, and technical infrastructure.",
      icon: "💻"
    }
  ]

  const certifications = [
    { name: "Adobe Photoshop CC Specialization", issuer: "Adobe", year: "2019" },
    { name: "3D Printing with CURA and Rhinoceros", issuer: "Technical Certification", year: "2019" },
    { name: "Blockchain", issuer: "Blockchain Valencia", year: "2018" },
    { name: "Arduino", issuer: "Technical Certification", year: "2018" }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-transparent to-violet-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-text-light' : 'text-gray-800'
          }`}>
            Education & <span className="text-violet-secondary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-secondary to-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-semibold mb-8 text-center lg:text-left ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? 'text-text-light' : 'text-gray-800'
                      }`}>
                        {edu.degree}
                      </h4>
                      <p className="text-blue-accent font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>
                        {edu.period}
                      </p>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-text-muted' : 'text-gray-600'
                      }`}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={`text-2xl font-semibold mb-8 text-center lg:text-left ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Certifications
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="card"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`text-lg font-semibold mb-1 ${
                        isDarkMode ? 'text-text-light' : 'text-gray-800'
                      }`}>
                        {cert.name}
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-text-muted' : 'text-gray-600'
                      }`}>
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-violet-secondary/20 text-violet-secondary rounded-full text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
