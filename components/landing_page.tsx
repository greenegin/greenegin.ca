'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from 'react'

const kokedamasPic = '/images/kokedamas.svg'
const karatePic = '/images/karate.svg'
const backgroundPic = '/images/ritsurin.jpg'

export function Landing_page() {
  const karateControls = useAnimationControls()
  const kokedamaControls = useAnimationControls()

  const getRandomPosition = () => {
    if (typeof window !== 'undefined') {
      return {
        x: Math.random() * window.innerWidth * 0.6 - window.innerWidth * 0.3,
        y: Math.random() * window.innerHeight * 0.3 + window.innerHeight * 0.6,
      }
    }
    return { x: 0, y: 0 }
  }

  const animate = async (controls) => {
    while (true) {
      await controls.start({
        ...getRandomPosition(),
        transition: {
          duration: 10,
          ease: "easeInOut"
        }
      })
    }
  }

  useEffect(() => {
    animate(karateControls)
    animate(kokedamaControls)
  }, [karateControls, kokedamaControls])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with muted effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPic})` }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
          style={{ lineHeight: '1.5' }}>
        DISCOVER <br /> THE <br /> ARTS OF JAPAN
      </h1>

      {/* Floating Buttons */}
      <motion.div
        animate={karateControls}
        className="absolute z-10"
        initial={{ x: -100, y: 500 }} // Default safe value
      >
        <Link href="https://instagram.com/greenegin.karate" target="_blank">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden hover:scale-110 transition-transform duration-500">
            <Image
              src={karatePic}
              alt="Karate"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </motion.div>

      <motion.div
        animate={kokedamaControls}
        className="absolute z-10"
        initial={{ x: 100, y: 500 }} // Default safe value
      >
        <Link href="https://instagram.com/greenegin.kokedamas" target="_blank">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden hover:scale-110 transition-transform duration-500">
            <Image
              src={kokedamasPic}
              alt="Kokedamas"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
