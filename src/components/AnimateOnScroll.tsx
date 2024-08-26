import React, { ReactNode, useEffect, useRef, useState } from 'react'

const AnimateOnScroll = ({
  children,
  className = '',
  ...props
}: {
  children: ReactNode
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false) // New state to control animation class
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true) // Start animation when visible
          setIsVisible(true) // Keep element visible
        } else {
          setShouldAnimate(false) // Remove animation when not visible
          setIsVisible(false) // Hide element when out of view
        }
      },
      {
        threshold: 0.1, // Adjust this to control when the animation triggers
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll flex justify-center items-center ${shouldAnimate ? 'visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimateOnScroll
