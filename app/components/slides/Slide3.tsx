'use client'

import { motion } from 'framer-motion'

export default function Slide3() {
  const features = [
    'Responsive Design',
    'Modern UI/UX',
    'Fast Performance',
    'SEO Optimized',
    'Cross-Browser Compatible',
    'Mobile-First Approach',
  ]

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      padding: '4rem',
    }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        Key Features
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        width: '100%',
        maxWidth: '1000px',
      }}>
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotateZ: index % 2 === 0 ? -45 : 45 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
            whileHover={{
              scale: 1.05,
              rotateZ: 2,
              boxShadow: '0 25px 50px rgba(0, 255, 255, 0.3)',
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #667eea, #764ba2) 1',
              borderRadius: '15px',
              padding: '2.5rem',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
              }}
            />
            {feature}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
