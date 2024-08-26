import React, { useEffect, useRef } from 'react'

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let vantaEffect: any

    const initVanta = () => {
      if (vantaRef.current) {
        // Ensure Vanta.js is loaded before initializing
        if (window.VANTA && window.THREE) {
          vantaEffect = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x390404,
            shininess: 10.0,
            waveHeight: 8.0,
            waveSpeed: 0.65,
            zoom: 0.84,
          })
        }
      }
    }

    initVanta()

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}

export default VantaBackground
