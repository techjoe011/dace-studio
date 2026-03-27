import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')

      setIsHovering(!!isInteractive)
    }

    const handleMouseLeaveWindow = () => {
      setIsVisible(false)
    }

    const handleMouseEnterWindow = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
    }
  }, [])

  const cursorSpring = useSpring(
    { x: mousePos.x, y: mousePos.y },
    { stiffness: 600, damping: 30, restDelta: 0.001 }
  )

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
      border: "0px solid rgba(0, 0, 0, 0)"
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
      border: "0px solid rgba(0, 0, 0, 0)"
    }
  }

  // Render cursor on md+ screens even for coarse pointers (hybrid devices) to avoid hidden system cursor
  if (typeof window !== 'undefined') {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const isSmallScreen = window.innerWidth < 768
    if (isCoarse && isSmallScreen) return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100000] hidden md:block"
      style={{
        x: cursorSpring.x,
        y: cursorSpring.y,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0
      }}
      animate={isHovering ? "hover" : "default"}
      variants={variants}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  )
}
