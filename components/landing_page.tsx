'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'

const useFloatingPosition = (initialPosition, boundaryPadding = 100) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize window size and direction on client side
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    setDirection({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width === 0) return; // Don't animate until window size is available

    const speed = 0.5;
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + direction.x * speed;
        let newY = prev.y + direction.y * speed;
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        const centerAvoidance = {
          x: windowSize.width / 2,
          y: windowSize.height / 2,
          radius: 200
        };

        if (newX <= boundaryPadding || newX >= windowSize.width - boundaryPadding) {
          newDirectionX *= -1;
        }
        if (newY <= boundaryPadding || newY >= windowSize.height - boundaryPadding) {
          newDirectionY *= -1;
        }

        const distanceToCenter = Math.sqrt(
          Math.pow(newX - centerAvoidance.x, 2) + 
          Math.pow(newY - centerAvoidance.y, 2)
        );

        if (distanceToCenter < centerAvoidance.radius) {
          const angle = Math.atan2(newY - centerAvoidance.y, newX - centerAvoidance.x);
          newDirectionX = Math.cos(angle);
          newDirectionY = Math.sin(angle);
        }

        setDirection({ x: newDirectionX, y: newDirectionY });

        return {
          x: Math.max(boundaryPadding, Math.min(windowSize.width - boundaryPadding, newX)),
          y: Math.max(boundaryPadding, Math.min(windowSize.height - boundaryPadding, newY))
        };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, boundaryPadding, windowSize]);

  return position;
};

const FloatingLink = ({ href, imageSrc, alt, initialPosition }) => {
  const position = useFloatingPosition(initialPosition);
  
  return (
    <Link
      href={href}
      className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-110"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
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
  );
};

export function Landing_page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
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

      <div className="absolute inset-0 z-10">
        <FloatingLink
          href="https://www.instagram.com/greenegin.karate"
          imageSrc={karatePic}
          alt="Karate"
          initialPosition={{ x: 200, y: 200 }}
        />
        <FloatingLink
          href="https://www.instagram.com/greenegin.kokedamas"
          imageSrc={kokedamaPic}
          alt="Kokedamas"
          initialPosition={{ x: 400, y: 400 }}
        />
      </div>
    </div>
  );
}
