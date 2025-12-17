'use client'

import { motion } from 'framer-motion'

export default function Slide2() {
  const technologies = [
    { name: 'HTML5', color: '#e34c26', icon: '🌐' },
    { name: 'CSS3', color: '#264de4', icon: '🎨' },
    { name: 'JavaScript', color: '#f0db4f', icon: '⚡' },
    { name: 'React', color: '#61dafb', icon: '⚛️' },
    { name: 'Node.js', color: '#68a063', icon: '🚀' },
    { name: 'Next.js', color: '#000000', icon: '▲' },
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
        initial={{ opacity: 0, y: -100, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        Core Technologies
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.15,
              rotateY: 10,
              boxShadow: `0 20px 60px ${tech.color}80`,
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${tech.color}`,
              borderRadius: '20px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                fontSize: '5rem',
                marginBottom: '1rem',
              }}
            >
              {tech.icon}
            </motion.div>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: tech.color,
              textShadow: `0 0 20px ${tech.color}`,
            }}>
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
