import { motion } from 'framer-motion'

const About = () => {
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
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-display font-bold mb-8 gradient-text"
        >
          About Me
        </motion.h1>

        <motion.div variants={itemVariants} className="card mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am <span className="font-semibold text-primary-700">P. Sreeja</span>, a B.Tech 2nd year student specializing in{' '}
            <span className="font-semibold text-primary-700">Artificial Intelligence and Machine Learning</span> at{' '}
            <span className="font-semibold text-primary-700">VNRVJIET, Hyderabad</span>. I am passionate about building data-driven and civic-tech solutions with real social impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My work focuses on leveraging AI and ML technologies to address civic challenges, creating platforms that empower citizens and support data-driven decision-making for authorities and communities.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="card">
          <h2 className="text-2xl font-display font-bold mb-6 text-primary-800">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                B.Tech (AI & ML)
              </h3>
              <p className="text-gray-600 mb-1">VNRVJIET, Hyderabad</p>
              <p className="text-sm text-gray-500">2025–2028</p>
            </div>

            <div className="border-l-4 border-accent-purple pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Diploma in Electronics Engineering
              </h3>
              <p className="text-gray-600 mb-1">GIOE</p>
              <p className="text-sm text-gray-500">2022–2025 • <span className="font-semibold text-accent-purple">98%</span></p>
            </div>

            <div className="border-l-4 border-accent-teal pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                SSC
              </h3>
              <p className="text-gray-600 mb-1">Telangana State Board</p>
              <p className="text-sm text-gray-500">2021 • <span className="font-semibold text-accent-teal">90%</span></p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
