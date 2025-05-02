import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 flex justify-center py-10 px-4">
      <div className="w-full max-w-7xl bg-zinc-800 rounded-2xl shadow-lg p-6 md:p-10">
        <Navbar />
      </div>
    </main>
  );
}
