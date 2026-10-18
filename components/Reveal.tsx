'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number // en secondes
  className?: string
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: Props) {
  // Respecte le réglage "réduire les animations" du téléphone / PC
  const reduce = useReducedMotion()

  const offset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -40 },
    right: { x: 40 },
    none: {},
  }[direction]

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}