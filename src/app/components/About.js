import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr]">
      {/* left */}
      <div className="relative h-72 sm:h-96 lg:h-[320px]">
        <Image
          src="/image-about-dark.jpg"
          alt="Dark living room"
          fill
          className="object-cover"
        />
      </div>

      {/* middle */}
      <div className="bg-white lg:h-[320px]">
        <div className="p-15 pt-20 py-12">
          <h2 className="tracking-[0.35em] uppercase text-sm font-extrabold text-gray-800">
            About our furniture
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-7">
            Our multifunctional collection blends design and function to suit your
            individual taste. Make each room unique, or pick a cohesive theme that
            best expresses your interests and what inspires you. Find the furniture
            pieces you need, from traditional to contemporary styles or anything in
            between. Product specialists are available to help you create your dream
            space.
          </p>
        </div>
      </div>

      {/* right */}
      <div className="relative h-72 sm:h-96 lg:h-[320px]">
        <Image
          src="/image-about-light.jpg"
          alt="White chair"
          fill
          className="object-cover opacity-70"
        />
      </div>
    </section>
  );
}

export default About;