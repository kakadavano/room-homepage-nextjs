"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    id: 2,
    image: "/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any Questions? Don't hesitate to contact us today."
  },
  {
    id: 3,
    image: "/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text:
      "Our modern furniture store provied a high level quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  const s = slides[idx];

  return (
    <section className="w-full relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
      {/* left */}
      <div className="relative h-[54vh] min-h-[360px] lg:h-[65vh] sm:h-[75vh]">
        <Image
          src={s.image}
          alt={s.title}
          fill
          priority
          className="object-cover"
        />

        {/* arrow controls: overlaps */}
        <div className="absolute flex bottom-0 right-0 z-10 lg:-right-37">
          <button
            aria-label="Previous"
            onClick={prev}
            className="h-17 w-18.5 bg-black text-white grid place-items-center hover:bg-neutral-800 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="h-17 w-18.5 bg-black text-white grid place-items-center hover:bg-neutral-800 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* right */}
      <div className="relative bg-white flex items-center">
        <div className="p-15 lg:p-25 container-pad py-12 lg:py-0">
          <h1 className="font-[var(--font-spartan)] text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
            {s.title}
          </h1>
          <p className="mt-6 text-sm text-gray-500 leading-7 max-w-[52ch]">
            {s.text}
          </p>

          <Link
            href="#shop"
            className="mt-8 inline-flex items-center gap-4 tracking-[0.5em] uppercase text-sm font-semibold text-black hover:text-gray-500"
          >
            Shop now
            <span aria-hidden>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
