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

  // prevent scroll when menu is open
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
            {/* <span className="block h-[2px] w-6 bg-current"></span>
            <span className="block h-[2px] w-6 bg-current"></span>
            <span className="block h-[2px] w-6 bg-current"></span> */}
          </button>

          {/* Brand */}
          
          <Link href="#">
            <Image
              src="/logo.svg"
              alt="Room logo"
              width={55}
              height={7}
              priority
            />
          </Link>


          {/* <Link href="#" className="text-white text-2xl font-semibold tracking-wide">
            room
          </Link> */}

          {/* Desktop nav */}
          <nav className="ml-6 hidden md:block">
            <ul className="flex items-center gap-7 text-white/90">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm tracking-wide hover:underline underline-offset-8 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop on/off */}
      <button
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        tabIndex={-1}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Dropdown */}
      <div
        className={`fixed top-0 inset-x-0 z-50 md:hidden transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white shadow-sm">
          <div className="h-22 px-2">
            <div className="relative h-full flex items-center justify-center">
              {/* Close X */}
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute left-6 text-5xl leading-none text-gray-300"
              >
                &times;
              </button>

              {/* Centered links */}
              <ul className="flex items-center gap-8 text-black font-semibold">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="lowercase text-sm tracking-wide hover:opacity-70 font-extrabold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
