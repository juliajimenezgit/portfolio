import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-gradient-to-t from-blue-primary/10 to-transparent border-t ${
      isDarkMode ? 'border-white/10' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-2">
              <img
                src="/logo_portfolio_remove_bg.png"
                alt="Julia Jiménez Ayuso"
                className="h-16 w-auto mx-auto md:mx-0"
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Julia Jiménez Ayuso
            </h3>
            <p className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>
              Software Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#home" className={`hover:text-blue-accent transition-colors duration-300 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                Home
              </a>
              <a href="#about" className={`hover:text-blue-accent transition-colors duration-300 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                About
              </a>
              <a href="#experience" className={`hover:text-blue-accent transition-colors duration-300 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                Experience
              </a>
              <a href="#skills" className={`hover:text-blue-accent transition-colors duration-300 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                Skills
              </a>
              <a href="#contact" className={`hover:text-blue-accent transition-colors duration-300 ${
                isDarkMode ? 'text-text-muted' : 'text-gray-600'
              }`}>
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-text-light' : 'text-gray-800'
            }`}>
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/juliajimenezayuso/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-primary/20 text-blue-accent rounded-full hover:bg-blue-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:juliajimenezayuso72@gmail.com"
                className="p-3 bg-violet-secondary/20 text-violet-secondary rounded-full hover:bg-violet-secondary/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-8 pt-8 border-t text-center ${
            isDarkMode ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          <p className={isDarkMode ? 'text-text-muted' : 'text-gray-600'}>
            © {currentYear} Julia Jiménez Ayuso. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
