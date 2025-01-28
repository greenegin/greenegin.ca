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
              style={{ lineHeight: '1.4' }}>
              DISCOVER <br /> THE <br /> ARTS OF JAPAN
          </h1>

        {/* Animated Buttons animate-float-complex-1 animate-float-complex-2*/}
          <div className="absolute inset-0 z-10">
              <Link
                  href="https://www.instagram.com/greenegin.karate"
                  className="absolute w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden cursor-pointer animate-orbit-1"
                  style={{
                      left: '10%',
                      top: '20%',
                      animationDuration: '45s',
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
                  className="absolute w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden cursor-pointer animate-orbit-2"
                  style={{
                      right: '15%',
                      bottom: '25%',
                      animationDuration: '45s',
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

        {/* Comment */}
         <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-center px-4 tracking-widest"
              We are yet to establish our perfect webpresence, meanwhile enjoy our instagram profiles.
          </h1>
    
      </div>
  )
}
