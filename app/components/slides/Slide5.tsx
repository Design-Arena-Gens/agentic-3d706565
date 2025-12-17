'use client'

import { motion } from 'framer-motion'

export default function Slide5() {
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
        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        My Music Player Project
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          width: '90%',
          maxWidth: '1200px',
          height: '600px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '3px solid',
          borderImage: 'linear-gradient(135deg, #f093fb, #f5576c) 1',
          borderRadius: '30px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(240, 147, 251, 0.3)',
        }}
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontSize: '3rem',
            color: '#fff',
            fontWeight: 'bold',
            position: 'relative',
          }}
        >
          <div style={{ textAlign: 'center', zIndex: 2 }}>
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🎵</div>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Music Player Demo</div>
            <div style={{ fontSize: '1.5rem', opacity: 0.8 }}>
              Screenshot of your music player will appear here
            </div>
            <div style={{
              marginTop: '3rem',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {['🎧', '⏯️', '🔊', '📱', '🎨', '⚡'].map((icon, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ fontSize: '3rem' }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
              zIndex: 1,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          marginTop: '3rem',
          fontSize: '1.8rem',
          color: '#f093fb',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        A modern, responsive music player with social media integration
      </motion.div>
    </div>
  )
}
