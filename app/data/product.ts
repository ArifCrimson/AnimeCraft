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
    }
];