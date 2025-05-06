import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[500px] bg-zinc-900 rounded-2xl mt-6 shadow-md overflow-hidden">
      <img src="/shirt.webp" alt="Anime Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* <Image
        src="/shirt.webp"
        alt="Gojo shirt"
        width={800}
        height={650}
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-black/60 p-6 md:p-10 rounded-xl m-4 md:m-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unleashed Precision. <br /> Live Your Style.
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mt-4">
            Premium anime-inspired jersey crafted for performance and presence.
          </p>
          <div className="mt-6">
            <button className="bg-red-500 hover:bg-red-400 transition text-white px-6 py-3 rounded-xl font-semibold">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
