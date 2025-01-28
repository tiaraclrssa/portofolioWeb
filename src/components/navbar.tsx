"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-yellow-50 shadow-md text-gray-900" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="h-[80px] flex justify-between items-center px-10 lg:px-20">
        <h1 className="font-bold text-2xl">ArsclrPortofolio.</h1>
        <nav className="space-x-10 text-md">
          <Link href={"/"}>Home</Link>
          <Link href="#AboutMe">About Me</Link>
          <Link href="#ContactMe">Contact Me</Link>
        </nav>
        <Image
          className="rounded-bl-full rounded-ss-full rounded-se-full rounded-br-full"
          src="/avatar.png"
          alt="avatar"
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
