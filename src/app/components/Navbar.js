"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#", label: "home" },
    { href: "#shop", label: "shop" },
    { href: "#about", label: "about" },
    { href: "#contact", label: "contact" },
  ];

  // Prevent scroll when menu is open
  useEffect(() => {
    const b = document.body;
    if (open) b.style.overflow = "hidden";
    else b.style.overflow = "";
    return () => { b.style.overflow = ""; };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full">
      <div className="px-6">
        <div className="flex items-center gap-6 py-6">
          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex flex-col gap-[6px] p-2 text-white"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Image
              src="/icon-hamburger.svg"
              alt="Open menu"
              width={24}
              height={24}
            />
          </button>

          {/* Brand */}
          <Link href="#" className="inline-flex items-center">
            <Image
              src="/logo.svg"
              alt="Room logo"
              width={55}
              height={24}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="ml-6 hidden md:block">
            <ul className="flex items-center gap-7 text-white/90">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm tracking-wide font-bold hover:underline underline-offset-8 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      <button
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        tabIndex={-1}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs z-50 bg-black text-white shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Room logo"
            width={80}
            height={24}
            priority
          />
          {/* Close X */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-3xl leading-none text-gray-300 font-normal"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-8 px-6 mt-8 text-lg font-semibold">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="lowercase tracking-wide hover:opacity-70 font-bold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
