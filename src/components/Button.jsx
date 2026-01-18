import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ to, href, children, variant = 'primary', className = '', onClick }) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClasses = `${baseClasses} ${className}`

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export default Button
