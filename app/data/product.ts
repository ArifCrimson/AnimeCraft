export interface Product {
    id : number;
    name: string;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Gojo Satoru Shirt",
        image: "/shirt.webp",
        description: "Premium quality shirt inspired of Jujutsu Kaisen characters named Gojo Satoru.",
    },
    {
        id: 2,
        name: "Keychains",
        image: "/rjz28.webp",
        description: "Cute and Charming Anime Keychains",
    },
    {
        id: 3,
        name: "Naruto Cosplay Accessories Set",
        image: "/accessoriesSet.webp",
        description: "Sora Tuki 55Pcs Sasori Headband Ring Necklace Bracelet Stickers Key Chain Set, Anime Fans Cosplay Accessory",
    }
];