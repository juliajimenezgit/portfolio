import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Volunteering = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const volunteerExperiences = [
    {
      title: "Director",
      organization: "Red Cross Getafe",
      period: "2019–2022",
      description: "Led Youth Department projects, managed teams, and resolved conflicts effectively. Developed leadership skills and community engagement.",
      responsibilities: [
        "Led Youth Department projects",
        "Managed teams of volunteers",
        "Resolved conflicts effectively",
        "Organized community events",
        "Mentored new volunteers"
      ],
      icon: "🎯",
      color: "blue-accent"
    },
    {
      title: "Volunteer",
      organization: "Red Cross Madrid",
      period: "2018–2019",
      description: "Supported pediatric hospital programs and administrative tasks. Gained experience in healthcare support and community service.",
      responsibilities: [
        "Supported pediatric hospital programs",
        "Assisted with administrative tasks",
        "Provided emotional support to families",
        "Organized fundraising activities",
        "Collaborated with healthcare professionals"
      ],
      icon: "❤️",
      color: "violet-secondary"
    }
  ]

  return (
    <section id="volunteering" className="section-padding bg-gradient-to-b from-transparent to-blue-primary/5">
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
            Volunteer <span className="text-blue-accent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-violet-secondary mx-auto rounded-full"></div>
          <p className={`text-lg mt-4 max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-muted' : 'text-gray-600'
          }`}>
            Contributing to community development and social impact through volunteer work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="card h-full"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold mb-2 ${
                      isDarkMode ? 'text-text-light' : 'text-gray-800'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`text-xl text-${exp.color} font-medium mb-1`}>
                      {exp.organization}
                    </p>
                    <p className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <p className={`mb-6 leading-relaxed ${
                  isDarkMode ? 'text-text-muted' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>
                
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-text-light' : 'text-gray-800'
                  }`}>
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + respIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                        <span className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="card max-w-4xl mx-auto text-center">
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Community Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-accent mb-2">4+</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-secondary mb-2">2</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-primary mb-2">Leadership</div>
                <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Director Role</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Volunteering
