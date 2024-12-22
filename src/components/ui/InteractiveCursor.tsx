import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#FF0000] mix-blend-difference pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicking ? 0.8 : 1,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#FF0000] mix-blend-difference pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.5 : 1,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}