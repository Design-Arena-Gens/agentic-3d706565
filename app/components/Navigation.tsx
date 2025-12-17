'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number) => void
}

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev, onGoTo }: NavigationProps) {
  return (
    <>
      <motion.button
        onClick={onPrev}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: 'fixed',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          background: 'rgba(0, 255, 255, 0.1)',
          border: '2px solid #00ffff',
          color: '#00ffff',
          fontSize: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px #00ffff' }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </motion.button>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          background: 'rgba(0, 255, 255, 0.1)',
          border: '2px solid #00ffff',
          color: '#00ffff',
          fontSize: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px #00ffff' }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </motion.button>

      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '1rem',
      }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onGoTo(index)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              width: currentSlide === index ? '40px' : '15px',
              height: '15px',
              borderRadius: '10px',
              background: currentSlide === index
                ? 'linear-gradient(90deg, #00ffff, #ff00ff)'
                : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <div style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 100,
        fontSize: '1.5rem',
        color: '#00ffff',
        fontWeight: 'bold',
        textShadow: '0 0 10px #00ffff',
      }}>
        {currentSlide + 1} / {totalSlides}
      </div>
    </>
  )
}
