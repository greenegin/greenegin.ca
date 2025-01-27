'use client'

import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import kokedamaPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'

const FloatingLink = ({ href, imageSrc, alt, initial }) => {
  const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 500, bottom: 500 });

  useEffect(() => {
    // Update constraints after component mounts
    setConstraints({
      top: 0,
      left: 0,
      right: window.innerWidth - 256,
      bottom: window.innerHeight - 256
    });

    const handleResize = () => {
      setConstraints({
        top: 0,
        left: 0,
        right: window.innerWidth - 256,
        bottom: window.innerHeight - 256
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={initial}
      animate={{
        x: [initial.x - 50, initial.x + 50, initial.x - 50],
        y: [initial.y - 50, initial.y + 50, initial.y - 50],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
      className="absolute w-32 h-32 md:w-64 md:h-64"
      drag
      dragConstraints={constraints}
      dragElastic={0.2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="block w-full h-full rounded-full overflow-hidden cursor-pointer"
        aria-label={`Discover ${alt}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{objectFit: 'cover'}}
          sizes="(max-width: 768px) 128px, 256px"
        />
      </Link>
    </motion.div>
  );
};

export function Landing_page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show a static version during SSR
  if (!isMounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${backgroundPic.src})`}}
        />
        <div className="absolute inset-0 bg-black opacity-40"/>
        <h1 
          className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
          style={{ lineHeight: '1.5' }}
        >
          DISCOVER <br /> THE <br /> ARTS OF JAPAN
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundPic.src})`}}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-4xl md:text-6xl font-bold text-center px-4 tracking-widest"
        style={{ lineHeight: '1.5' }}
      >
        DISCOVER <br /> THE <br /> ARTS OF JAPAN
      </motion.h1>

      <div className="absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <FloatingLink
            href="https://www.instagram.com/greenegin.karate"
            imageSrc={karatePic}
            alt="Karate"
            initial={{ x: 200, y: 200 }}
          />
          <FloatingLink
            href="https://www.instagram.com/greenegin.kokedamas"
            imageSrc={kokedamaPic}
            alt="Kokedamas"
            initial={{ x: 800, y: 500 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
