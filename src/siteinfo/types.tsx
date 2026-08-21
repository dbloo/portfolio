export interface Product {
    id: number;
    name: string;
    slug: string;
    medium: string;
    size: string;
    price: string;
    prints: {sizes: string, price: string}[];
    image: string;
    description: string;
}
