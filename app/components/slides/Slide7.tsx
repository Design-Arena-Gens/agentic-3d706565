'use client'

import { motion } from 'framer-motion'

export default function Slide7() {
  const socialLinks = [
    { name: 'GitHub', icon: '💻', color: '#333' },
    { name: 'LinkedIn', icon: '💼', color: '#0077b5' },
    { name: 'Twitter', icon: '🐦', color: '#1da1f2' },
    { name: 'Instagram', icon: '📷', color: '#e4405f' },
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
      <motion.div
        initial={{ scale: 0, rotateZ: -180 }}
        animate={{ scale: 1, rotateZ: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '300% 300%',
          animation: 'gradient 3s ease infinite',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        Thank You!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '800px',
        }}
      >
        Let's build the future of the web together
      </motion.div>

      <div style={{
        display: 'flex',
        gap: '3rem',
        marginBottom: '4rem',
      }}>
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.3,
              rotateZ: 10,
              boxShadow: `0 20px 40px ${social.color}80`,
            }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: `${social.color}20`,
              border: `3px solid ${social.color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '3rem' }}
            >
              {social.icon}
            </motion.div>
            <div style={{
              fontSize: '0.9rem',
              color: social.color,
              marginTop: '0.5rem',
              fontWeight: 'bold',
            }}>
              {social.name}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          fontSize: '1.8rem',
          color: '#00ffff',
          textAlign: 'center',
          textShadow: '0 0 20px #00ffff',
        }}
      >
        Questions?
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.2), transparent)',
          zIndex: -1,
        }}
      />

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
