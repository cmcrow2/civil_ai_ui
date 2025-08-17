"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-white font-exo text-md">
      <div className="flex h-14 items-center justify-between px-3 leading-none relative">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              width={48}
              height={48}
              alt="Paige.ai logo"
              src="/logo.svg"
              className="block w-10 bg-white rounded-full border-black border"
            />
            <span className="text-xl font-exo">P.AI.GE</span>
          </Link>

          <nav className="flex items-center gap-4 font-extralight">
            <Link href="/demo" className="h-10 flex items-center">
              demo
            </Link>
            <Link href="/about" className="h-10 flex items-center">
              about
            </Link>
          </nav>
        </div>

        <button
          ref={buttonRef}
          className="pr-1 flex items-center"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Open user menu"
        >
          <User size={24} />
        </button>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute bg-white h-32 w-32 top-16 right-2 text-center rounded-sm shadow-lg"
          >
            <div className="h-32 flex flex-col justify-center divide-y divide-gray-300">
              <Link
                href="/signin"
                className="w-full py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                log in
              </Link>
              <Link
                href="/signin"
                className="w-full py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                sign up
              </Link>
              <button
                className="w-full py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
