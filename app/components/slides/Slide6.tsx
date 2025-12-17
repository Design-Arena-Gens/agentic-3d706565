'use client'

import { motion } from 'framer-motion'

export default function Slide6() {
  const features = [
    { icon: '🎵', title: 'Audio Playback', desc: 'Seamless music streaming' },
    { icon: '🎨', title: 'Beautiful UI', desc: 'Modern & intuitive design' },
    { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
    { icon: '🔗', title: 'Social Links', desc: 'Integrated social media' },
    { icon: '⚡', title: 'Fast', desc: 'Optimized performance' },
    { icon: '🎯', title: 'User-Friendly', desc: 'Easy to navigate' },
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
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #fa709a 0%, #fee140 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        Project Features
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem',
        width: '100%',
        maxWidth: '1300px',
      }}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              scale: 0,
              rotateX: -180,
              rotateY: -180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              type: 'spring',
            }}
            whileHover={{
              scale: 1.1,
              rotateZ: 5,
              boxShadow: '0 30px 60px rgba(250, 112, 154, 0.4)',
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(250, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #fa709a, #fee140) 1',
              borderRadius: '25px',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                fontSize: '4.5rem',
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 0 20px rgba(250, 112, 154, 0.8))',
              }}
            >
              {feature.icon}
            </motion.div>

            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fa709a',
              marginBottom: '0.5rem',
              textShadow: '0 0 20px rgba(250, 112, 154, 0.5)',
            }}>
              {feature.title}
            </div>

            <div style={{
              fontSize: '1.3rem',
              color: '#fff',
              opacity: 0.8,
              textAlign: 'center',
            }}>
              {feature.desc}
            </div>

            <motion.div
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '5px',
                background: 'linear-gradient(90deg, #fa709a, #fee140)',
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          marginTop: '3rem',
          padding: '1.5rem 3rem',
          background: 'linear-gradient(90deg, #fa709a, #fee140)',
          borderRadius: '50px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#000',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(250, 112, 154, 0.5)',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(250, 112, 154, 0.7)' }}
        whileTap={{ scale: 0.95 }}
      >
        View Live Demo →
      </motion.div>
    </div>
  )
}
