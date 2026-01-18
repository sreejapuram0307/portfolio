import { motion } from 'framer-motion'
import Button from '../components/Button'

const Contact = () => {
  const contactMethods = [
    {
      type: 'Email',
      value: 'sreejapuram@gmail.com',
      href: 'mailto:sreejapuram@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: 'Mobile',
      value: '+91 9550363968',
      href: 'tel:+919550363968',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      type: 'LinkedIn',
      value: 'sreeja-puram-b807a92bb',
      href: 'https://www.linkedin.com/in/sreeja-puram-b807a92bb/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Let's build technology that truly matters.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card text-center group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.type}</h3>
              <p className="text-gray-600 text-sm break-all">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card bg-gradient-to-br from-primary-50 to-blue-50 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4 text-primary-800">
            Open to Opportunities
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm always interested in collaborating on projects that leverage AI and ML to create positive social impact. Whether it's civic-tech solutions, data science challenges, or innovative applications, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="mailto:sreejapuram@gmail.com"
              variant="primary"
            >
              Send Email
            </Button>
            <Button
              href="https://www.linkedin.com/in/sreeja-puram-b807a92bb/"
              variant="secondary"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
