import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      id: 'demandmap',
      title: 'DemandMap',
      subtitle: 'NeedSpotter',
      description: 'Citizen-driven, location-based demand platform for aggregating and visualizing civic facility needs.',
      path: '/projects/demandmap',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'civsure',
      title: 'CIVSURE',
      subtitle: 'Crime Reporting Platform',
      description: 'Anonymous crime reporting and legal assistance platform with AI-powered chatbot and emergency alerts.',
      path: '/projects/civsure',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'traffic',
      title: 'Traffic Light Simulator',
      subtitle: 'Python Simulation',
      description: 'Real-world traffic signal simulation with configurable timing controls and realistic signal logic.',
      path: '/projects/traffic',
      gradient: 'from-teal-500 to-green-500',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 gradient-text">
          Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring the intersection of AI, civic-tech, and social impact
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <Link to={project.path}>
              <div className="card h-full cursor-pointer overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                    {project.title[0]}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                    View Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
