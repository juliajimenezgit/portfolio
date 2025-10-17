import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "PHP", "XML", "HTML", "CSS"],
      color: "blue-accent"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Angular", "PyTorch", "TensorFlow"],
      color: "violet-secondary"
    },
    {
      title: "Web Technologies",
      skills: ["WordPress", "PrestaShop", "HTML5", "Tailwind CSS"],
      color: "blue-primary"
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL"],
      color: "blue-accent"
    },
    {
      title: "Cloud & Hosting",
      skills: ["PLESK", "CDMON", "Acens", "AWS"],
      color: "violet-secondary"
    },
    {
      title: "Design & Visualization",
      skills: ["Photoshop", "Canva", "Tableau"],
      color: "blue-primary"
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum"],
      color: "blue-accent"
    },
    {
      title: "Soft Skills",
      skills: ["Effective Communication", "Critical Thinking", "Time Management", "Conflict Resolution"],
      color: "violet-secondary"
    }
  ]

  return (
    <section id="skills" className="section-padding">
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
            Technical <span className="text-blue-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-violet-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card group"
            >
              <div className="text-center">
                <h3 className={`text-lg font-semibold text-${category.color} mb-4 ${
                  isDarkMode ? 'group-hover:text-text-light' : 'group-hover:text-gray-800'
                } transition-colors duration-300`}>
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                      className={`px-3 py-2 bg-${category.color}/20 text-${category.color} rounded-lg text-sm font-medium hover:bg-${category.color}/30 transition-colors duration-300`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Skills Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-accent mb-2">7+</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-secondary mb-2">4+</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-primary mb-2">3+</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-accent mb-2">4+</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Soft Skills</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
