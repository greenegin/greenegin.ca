'use client';

import Link from 'next/link';
import Image from 'next/image';
import kokedamasPic from '/images/kokedamas.svg';
import karatePic from '/images/karate.svg';
import backgroundPic from '/images/ritsurin.jpg';
import { motion } from 'framer-motion';

export function Landing_page() {
  // Define the floating animation
  const floatTransition = {
    y: {
      duration: 2,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with muted effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPic.src})` }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <h1
        className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
        style={{ lineHeight: '1.5' }}
      >
        DISCOVER <br /> THE <br /> ARTS OF JAPAN
      </h1>

      {/* Animated Buttons */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer"
          style={{
            left: '10%',
            top: '20%',
          }}
          animate={{
            y: ['0%', '-10%', '0%'],
          }}
          transition={floatTransition}
        >
          <Link
            href="https://www.instagram.com/greenegin.karate"
            aria-label="Discover Karate Lessons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={karatePic}
              alt="Karate"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 128px, 256px"
              className="opacity-100"
            />
          </Link>
        </motion.div>

        <motion.div
          className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer"
          style={{
            right: '15%',
            bottom: '25%',
          }}
          animate={{
            y: ['0%', '-10%', '0%'],
          }}
          transition={{
            y: {
              duration: 3,
              yoyo: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <Link
            href="https://www.instagram.com/greenegin.kokedamas"
            aria-label="Discover Handmade Kokedamas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={kokedamasPic}
              alt="Kokedamas"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 128px, 256px"
              className="opacity-100"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
