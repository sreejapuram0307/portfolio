import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
        >
          <span className="gradient-text">P. Sreeja</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium mb-4"
        >
          AI & ML Undergraduate | Civic-Tech Builder
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          "I build intelligent systems that solve real-world civic and social problems."
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button to="/projects" variant="primary">
            View Projects
          </Button>
          <Button to="/about" variant="secondary">
            About Me
          </Button>
          <Button to="/contact" variant="secondary">
            Contact
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold gradient-text mb-2">AI & ML</div>
            <p className="text-gray-600 text-sm">Machine Learning Solutions</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Civic-Tech</div>
            <p className="text-gray-600 text-sm">Social Impact Projects</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Data Science</div>
            <p className="text-gray-600 text-sm">Data-Driven Insights</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
