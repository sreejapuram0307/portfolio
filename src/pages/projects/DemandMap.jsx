import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DemandMap = () => {
  const features = [
    {
      title: 'Citizen Reporting',
      description: 'Users can report missing facilities and civic needs through an intuitive interface.',
    },
    {
      title: 'Location Aggregation',
      description: 'Demands are aggregated location-wise to identify high-priority areas.',
    },
    {
      title: 'Color-Coded Visualization',
      description: 'Interactive map with color-coded zones showing demand intensity and patterns.',
    },
    {
      title: 'Role-Based Dashboards',
      description: 'Separate dashboards for citizens, authorities, and vendors with relevant insights.',
    },
  ]

  const impactPoints = [
    'Data-driven decision making for municipal authorities',
    'Vendor opportunity identification in underserved areas',
    'Transparent demand visualization for better resource allocation',
    'Citizen engagement in civic infrastructure planning',
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 gradient-text">
            DemandMap
          </h1>
          <p className="text-xl text-gray-600 mb-2">Citizen-Driven, Location-Based Demand Platform</p>
          <p className="text-sm text-gray-500">NeedSpotter</p>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-display font-bold mb-4 text-primary-800">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Designed a civic-tech platform enabling citizens to report missing facilities, aggregating demand location-wise and visualizing it through a color-coded map to support data-driven decision-making by authorities and vendors.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-display font-bold mb-6 text-primary-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-display font-bold mb-4 text-primary-800">System Flow</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Citizen Reports Demand</h4>
                <p className="text-gray-600">Users submit facility requests with location data</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Location Aggregation</h4>
                <p className="text-gray-600">System aggregates demands by geographic location</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Map Visualization</h4>
                <p className="text-gray-600">Color-coded map displays demand intensity zones</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dashboard Access</h4>
                <p className="text-gray-600">Authorities and vendors access role-specific insights</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Civic Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card bg-gradient-to-br from-primary-50 to-blue-50"
        >
          <h2 className="text-2xl font-display font-bold mb-4 text-primary-800">Civic Impact</h2>
          <ul className="space-y-3">
            {impactPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DemandMap
