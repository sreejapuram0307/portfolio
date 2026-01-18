import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI & ML',
      skills: [
        'Supervised Learning',
        'Regression',
        'Classification',
        'LSTM',
        'Time Series Forecasting',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data Science',
      skills: [
        'Data Cleaning',
        'Feature Engineering',
        'Model Evaluation',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
      color: 'from-indigo-500 to-purple-500',
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

  const cardVariants = {
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 gradient-text">
          Skills
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Technical expertise across AI, ML, and data science
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center text-white font-bold text-xl`}>
              {category.title[0]}
            </div>
            <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
