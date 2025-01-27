'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamasPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'
import { motion } from "framer-motion"

export function Landing_page() {
  return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background image with muted effect */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${backgroundPic.src})`}}
          />
          <div className="absolute inset-0 bg-black opacity-40"/>

          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
              style={{ lineHeight: '1.5' }}>
              DISCOVER <br /> THE <br /> ARTS OF JAPAN
          </h1>

        {/* Animated Buttons */}
          <div className="absolute inset-0 z-10">
              <Link
                  href="https://www.instagram.com/greenegin.karate"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer animate-float-complex-1"
                  style={{
                      left: '10%',
                      top: '20%',
                      animationDuration: '60s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite'
                  }}
                  aria-label="Discover Karate Lessons"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Image
                      src={karatePic}
                      alt="Karate"
                      fill
                      style={{objectFit: 'cover'}}
                      sizes="(max-width: 768px) 128px, 256px"
                      className="opacity-100"
                  />
              </Link>
              <Link
                  href="https://www.instagram.com/greenegin.kokedamas"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer animate-float-complex-2"
                  style={{
                      right: '15%',
                      bottom: '25%',
                      animationDuration: '70s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite'
                  }}
                  aria-label="Discover Handmade Kokedamas"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Image
                      src={kokedamasPic}
                      alt="Kokedamas"
                      fill
                      style={{objectFit: 'cover'}}
                      sizes="(max-width: 768px) 128px, 256px"
                      className="opacity-100"
                  />
              </Link>
          </div>
       


        {/*Moving Buttons 
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 15, ease: "easeOut" }}
          >
            <Link href="https://instagram.com/greenegin.karate" target="_blank">
              <Image
                src={karatePic}
                alt="Karate"
                width={150}
                height={150}
                className="hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 15, ease: "easeOut" }}
          >
            <Link href="https://instagram.com/greenegin.kokedamas" target="_blank">
              <Image
                src={kokedamasPic}
                alt="Kokedamas"
                width={150}
                height={150}
                className="hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </motion.div>
        </div>
        */}
 
        
      </div>
  )
}
