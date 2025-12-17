'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Slide4() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    { title: 'Design', desc: 'Create stunning mockups', icon: '🎨', color: '#ff6b6b' },
    { title: 'Develop', desc: 'Build with modern tech', icon: '💻', color: '#4ecdc4' },
    { title: 'Test', desc: 'Ensure quality', icon: '🧪', color: '#45b7d1' },
    { title: 'Deploy', desc: 'Launch to production', icon: '🚀', color: '#96ceb4' },
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
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        Development Process
      </motion.h1>

      <div style={{
        display: 'flex',
        gap: '3rem',
        width: '100%',
        maxWidth: '1400px',
        justifyContent: 'center',
      }}>
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -20, rotateY: 5 }}
            style={{
              flex: 1,
              maxWidth: '300px',
              background: hoveredIndex === index
                ? `linear-gradient(135deg, ${step.color}40, ${step.color}20)`
                : 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: `3px solid ${step.color}`,
              borderRadius: '25px',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s',
            }}
          >
            <motion.div
              animate={{
                scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '5rem',
                marginBottom: '1rem',
                filter: `drop-shadow(0 0 20px ${step.color})`,
              }}
            >
              {step.icon}
            </motion.div>

            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: step.color,
              marginBottom: '1rem',
              textShadow: `0 0 20px ${step.color}`,
            }}>
              {step.title}
            </div>

            <div style={{
              fontSize: '1.3rem',
              color: '#fff',
              textAlign: 'center',
              opacity: 0.8,
            }}>
              {step.desc}
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: hoveredIndex === index ? 1 : 0 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${step.color}30, transparent)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: step.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#000',
            }}>
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
