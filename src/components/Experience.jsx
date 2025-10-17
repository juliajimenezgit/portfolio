import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Software Developer",
      company: "Técnicas Reunidas",
      period: "June 2023 – Present",
      description: "Full-stack development with focus on Python, AI integration, and modern web technologies.",
      technologies: ["Python", "Frontend Design", "Backend Development", "REST API", "AI Models"],
      color: "blue-accent"
    },
    {
      title: "Junior Developer",
      company: "Quid Qualitas",
      period: "March 2022 – June 2023",
      description: "Contributed to software development lifecycle, web and backend systems, and integration testing.",
      technologies: ["Software Development", "Web Systems", "Backend", "Integration Testing", "Client Updates"],
      color: "violet-secondary"
    },
    {
      title: "Web Designer",
      company: "Freelance",
      period: "June 2021 – February 2022",
      description: "Designed and maintained custom websites with focus on SEO optimization and hosting management.",
      technologies: ["Web Design", "SEO Optimization", "Hosting Management", "Custom Websites"],
      color: "blue-primary"
    }
  ]

  return (
    <section id="experience" className="section-padding">
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
            Work <span className="text-blue-accent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-violet-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-semibold mb-2 ${
                        isDarkMode ? 'text-text-light' : 'text-gray-800'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-accent font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>
                        {exp.period}
                      </p>
                    </div>
                    <div className={`w-4 h-4 rounded-full bg-${exp.color}`}></div>
                  </div>
                  
                  <p className={`mb-6 leading-relaxed ${
                    isDarkMode ? 'text-text-muted' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline connector */}
              <div className="hidden lg:flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full bg-${exp.color} mb-4`}></div>
                {index < experiences.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-accent/50 to-violet-secondary/50"></div>
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
