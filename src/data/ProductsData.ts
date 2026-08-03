import { Product ,WriteReviewData} from "../models/product";

export class ProductsData {

    static TC09_getProductDetails(): Product {
        return {
            productName: "Blue Top"
        };
    }

    static TC21_getProductDetails(): WriteReviewData {
        return {
            productName: "Green Side Placket Detail T-Shirt",
            name:"Test User",
            email:"testuser@gmail.com",
            message:"Review message testing"
        };
    }
}