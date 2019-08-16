import { Merchant } from "./merchant";

export class Product{
    productId: number;
    productName: string;
    merchant: Merchant;
    tag: string[];
    company: string;
    photo: string;
    description: string;
    quantity: number;
    category: string;
    subcategory: string;
    soldQuantities: number;
    price: number;
    releaseDate: Date;
}