export default function Hero(){
    return (
        <section className="w-full px-6 py-16 md:py-24 bg-zinc-900 text-white rounded-2xl mt-6 shadow-md">
            <div className="max-w-6xl mx-auto rid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Unleashed Precision. <br /> Live Your Style.
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-md">Premium anime-inspired jersey crafted for performance and presence.</p>
                    <div className="flex gap-4">
                        <button className="bg-red-500 hover:bg-red-400 transition text-white px-6 py-3 rounded-xl font-semibold">Contact Now</button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}