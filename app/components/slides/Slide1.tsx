'use client'

import { motion } from 'framer-motion'

export default function Slide1() {
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
    }}>
      <motion.div
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
      >
        Web Development
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          marginTop: '2rem',
          color: '#fff',
          textAlign: 'center',
          textShadow: '0 0 20px #00ffff',
        }}
      >
        The Future is Here
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '10%',
          fontSize: '1.5rem',
          color: '#00ffff',
        }}
      >
        Press → or Space to continue
      </motion.div>

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
