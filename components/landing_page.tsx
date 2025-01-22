'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.jpg'
import karatePic from '/images/karate.jpg'
import backgroundPic from '/images/ritsurin.jpg'
import { Zen_Kaku_Gothic_New } from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function Landing_page() {
  return (
      <div className={`relative min-h-screen flex flex-col justify-between overflow-hidden ${zenKaku.className}`}>
          {/* Background image with muted effect */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${backgroundPic.src})`}}
          />
        <div className="absolute inset-0 bg-black opacity-40"/>

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Circles */}
              <div
                  className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-amber-300 opacity-20 animate-float-slow"></div>
            {/*
              <div
                  className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-pink-300 opacity-15 animate-float-slower"></div>
              <div
                  className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-blue-300 opacity-20 animate-pulse"></div>
              */}
          </div>

          <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-amber-300 text-center px-4 pt-12 md:pt-16 tracking-wide">
              DISCOVER <br /> THE <br /> ARTS OF JAPAN
          </h1>

          <div className="flex-grow relative z-10 w-full">
              <Link
                  href="https://www.instagram.com/greenegin.karate"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer transition-all hover:scale-105 animate-float-complex-1 hover:shadow-lg"
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
                  />
                  <div
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100">
                      <div className="text-center">
                          <p className="text-amber-300 text-xl md:text-3xl font-semibold">Karate</p>
                          <p className="text-amber-300 text-lg md:text-2xl">Lessons</p>
                      </div>
                  </div>
              </Link>
              <Link
                  href="https://www.instagram.com/greenegin.kokedamas"
                  className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer transition-all hover:scale-105 animate-float-complex-2 hover:shadow-lg"
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
                      src={kokedamaPic}
                      alt="Kokedamas"
                      fill
                      style={{objectFit: 'cover'}}
                      sizes="(max-width: 768px) 128px, 256px"
                  />
                  <div
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100">
                      <div className="text-center">
                          <p className="text-amber-300 text-xl md:text-3xl font-semibold">Handmade</p>
                          <p className="text-amber-300 text-lg md:text-2xl">Kokedamas</p>
                      </div>
                  </div>
              </Link>
          </div>
      </div>
  )
}
