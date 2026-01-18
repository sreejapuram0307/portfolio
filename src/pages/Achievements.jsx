import { motion } from 'framer-motion'

const Achievements = () => {
  const achievements = [
    {
      title: 'CMR Hackfest 3.0',
      subtitle: 'National Level Hackathon',
      award: '3rd Prize',
      description: 'Secured 3rd position in a national-level hackathon, showcasing innovative problem-solving skills.',
      icon: '🏆',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Diploma in Electronics',
      subtitle: 'GIOE',
      award: '98%',
      description: 'Outstanding academic performance with 98% marks in Electronics Engineering.',
      icon: '🎓',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      title: 'SSC',
      subtitle: 'Telangana State Board',
      award: '90%',
      description: 'Strong foundation with 90% marks in Secondary School Certificate.',
      icon: '📚',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      title: 'Volunteer',
      subtitle: 'ISTE & Krithomedha',
      award: 'Active Member',
      description: 'Contributing to technical societies and AIML department initiatives.',
      icon: '🤝',
      gradient: 'from-pink-400 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
          Achievements
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Milestones and accomplishments in academics and beyond
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{achievement.icon}</div>
                <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white font-bold text-sm`}>
                  {achievement.award}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-gray-900">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-3 font-medium">{achievement.subtitle}</p>
              <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Achievements
