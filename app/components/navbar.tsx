'use client';
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Krona_One } from "next/font/google";

const krona = Krona_One({
    subsets: ['latin'],
    weight: '400',
  })

export default function Navbar(){
    const [darkMode, setDarkMode] = useState(true);

    return(
        <nav className="bg-gray-950 px-6 py-4 flex justify-between items-center text-white shadow-sm">
            <div className="text-2xl font-bold tracking-wide">
                AnimeCraft
            </div>

            <ul className={`flex gap-6 text-sm md:text-base ${krona.className}`}>
                <li className="hover:text-red-500 transition cursor-pointer">Home</li>
                <li className="hover:text-red-500 transition cursor-pointer">Products</li>
                <li className="hover:text-red-500 transition cursor-pointer">Contact</li>
            </ul>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-zinc-700 transition" aria-label="Toggle dark mode"> {darkMode ? <Moon size={20} /> : <Sun size={20}/>} </button>
        </nav>
    )
}