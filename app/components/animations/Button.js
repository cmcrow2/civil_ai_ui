"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ButtonAnimation = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="relative inline-flex items-center justify-center w-36 p-2 mt-4 tracking-widest text-white"
    >
      {text}

      {/* Static white SVG border */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 144 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="140"
          height="44"
          rx="6"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Animated red SVG border on hover */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 144 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="2"
          y="2"
          width="140"
          height="44"
          rx="6"
          stroke="#D92D20"
          strokeWidth="2"
          fill="none"
          strokeDasharray="368"
          strokeDashoffset="368"
          whileHover={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.svg>
    </Link>
  );
};

export default ButtonAnimation;
