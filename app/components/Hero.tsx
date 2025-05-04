import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 bg-zinc-900 rounded-4xl mt-6 shadow-md overflow-hidden">
      <img src="/shirt.webp" alt="Anime Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* <Image
        src="/shirt.webp"
        alt="Gojo shirt"
        width={800}
        height={650}
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unleashed Precision. <br /> Live Your Style.
          </h1>
          <p className="text-zinc-400 text-lg max-w-md">
            Premium anime-inspired jersey crafted for performance and presence.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500 hover:bg-red-400 transition text-white px-6 py-3 rounded-xl font-semibold">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
