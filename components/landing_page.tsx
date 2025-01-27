'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import kokedamaPic from '/images/kokedamas.svg'
import karatePic from '/images/karate.svg'
import backgroundPic from '/images/ritsurin.jpg'

const useFloatingPosition = (initialX, initialY, boundaryPadding = 100) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [direction, setDirection] = useState({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });

  useEffect(() => {
    const speed = 0.5;
    const interval = setInterval(() => {
      setPosition(prev => {
        // Calculate new position
        let newX = prev.x + direction.x * speed;
        let newY = prev.y + direction.y * speed;
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        // Check boundaries and avoid center area (title)
        const centerAvoidance = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          radius: 200  // Area to avoid around title
        };

        // Bounce off walls
        if (newX <= boundaryPadding || newX >= window.innerWidth - boundaryPadding) {
          newDirectionX *= -1;
        }
        if (newY <= boundaryPadding || newY >= window.innerHeight - boundaryPadding) {
          newDirectionY *= -1;
        }

        // Avoid title area
        const distanceToCenter = Math.sqrt(
          Math.pow(newX - centerAvoidance.x, 2) + 
          Math.pow(newY - centerAvoidance.y, 2)
        );

        if (distanceToCenter < centerAvoidance.radius) {
          // Gradually steer away from center
          const angle = Math.atan2(newY - centerAvoidance.y, newX - centerAvoidance.x);
          newDirectionX = Math.cos(angle);
          newDirectionY = Math.sin(angle);
        }

        setDirection({ x: newDirectionX, y: newDirectionY });

        return {
          x: Math.max(boundaryPadding, Math.min(window.innerWidth - boundaryPadding, newX)),
          y: Math.max(boundaryPadding, Math.min(window.innerHeight - boundaryPadding, newY))
        };
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [direction, boundaryPadding]);

  return position;
}

const FloatingLink = ({ href, imageSrc, alt, initialX, initialY }) => {
  const position = useFloatingPosition(initialX, initialY);
  
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
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with muted effect */}
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
          initialX={window.innerWidth * 0.25}
          initialY={window.innerHeight * 0.25}
        />
        <FloatingLink
          href="https://www.instagram.com/greenegin.kokedamas"
          imageSrc={kokedamaPic}
          alt="Kokedamas"
          initialX={window.innerWidth * 0.75}
          initialY={window.innerHeight * 0.75}
        />
      </div>
    </div>
  );
}
