import { products } from "@/app/data/product";

export default function Product(){
    return (
        <section className="w-full px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured Craft
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
                <div key={p.id} className="bg-zinc-800 overflow-hidden shadow-lg hover:shadow-red-500 transition">
                    <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
                    <div className="p-6 space-y-2">
                        <h3 className="text-xl">
                            {p.name}
                        </h3>
                        <p className="text-sm">{p.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}