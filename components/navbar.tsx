"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-center items-center h-16 px-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo2.svg"
            alt="Representação tipográfica da marca FURIA Esports, com a palavra 'FURIA' em letras maiúsculas pretas e estilizadas, com cortes angulados e aparência agressiva"
            width={500}
            height={500}
            className="size-8 md:size-[32px]"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
