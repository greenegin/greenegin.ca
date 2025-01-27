'use client'

import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'
import { Zen_Kaku_Gothic_New } from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

/*

*/
export function Landing_page() {
  return (
      <div className={`relative min-h-screen flex flex-col justify-between overflow-hidden ${zenKaku.className}`}>
          {/* Background image with muted effect */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{backgroundImage: `url(${backgroundPic.src})`}}
          />
        <div className="absolute inset-0 bg-black opacity-40"/>

          <h1 className="text-[#FFF3C7] relative z-10 text-5xl md:text-7xl font-bold text-amber-300 text-center px-4 pt-12 md:pt-16 tracking-wide">
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
              </Link>
          </div>
      </div>
  )
}
