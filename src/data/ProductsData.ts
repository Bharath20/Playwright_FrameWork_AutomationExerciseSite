import { Product } from "../models/product";

export class ProductsData {

    static getProductDetails(): Product {
        return {
            productName: "Blue Top"
        };
    }
}