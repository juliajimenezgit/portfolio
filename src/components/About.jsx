import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-blue-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-heading mb-6 ${
            isDarkMode ? 'text-text-light' : 'text-gray-800'
          }`}>
            About <span className="text-blue-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-accent to-violet-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md mx-auto lg:mx-0 h-80 lg:h-96"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Imagen de big-data comentada - descomenta si quieres usarla */}
                  {/* <img
                    src="/big-data.jpg"
                    alt="Julia Jiménez Ayuso - Software Developer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent"></div> */}
                  
                  {/* Logo dinámico que ocupa todo el espacio disponible */}
                  <img
                    src={isDarkMode ? "/logo_portfolio_dark.png" : "/logo_portfolio.png"}
                    alt="Julia Jiménez Ayuso - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-secondary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="card">
              <h3 className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-text-light' : 'text-gray-800'
              }`}>
                Software Developer
              </h3>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                I am a Software Developer with a strong foundation in full-stack development, 
                AI model integration, and server administration. I'm passionate about creating 
                reliable, user-centered digital experiences and continuously improving my 
                technical skills. I enjoy working collaboratively to achieve ambitious goals.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-accent mb-2">3+</div>
                  <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-secondary mb-2">10+</div>
                  <div className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>Technologies</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-primary/20 text-blue-accent rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="px-4 py-2 bg-violet-secondary/20 text-violet-secondary rounded-full text-sm font-medium">
                  AI Integration
                </span>
                <span className="px-4 py-2 bg-blue-accent/20 text-blue-accent rounded-full text-sm font-medium">
                  Server Administration
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
