'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamasPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'

export function Landing_page() {
  return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background image with muted effect */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${backgroundPic.src})`}}
          />
          <div className="absolute inset-0 bg-black opacity-40"/>

          {/* Title */}
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
              style={{ lineHeight: '1.5' }}>
              DISCOVER <br /> THE <br /> ARTS OF JAPAN
          </h1>

          {/* Animated Buttons  animate-orbit-1 animate-orbit-2*/}
          <div className="absolute inset-0 z-10">
              <Link
                  href="https://www.instagram.com/greenegin.karate"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer"
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
                  />
              </Link>
              
              <Link
                  href="https://www.instagram.com/greenegin.kokedamas"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer"
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
                  />
              </Link>
          </div>
      </div>
  )
}
