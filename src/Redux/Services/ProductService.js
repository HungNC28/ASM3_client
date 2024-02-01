import { baseService } from "./baseService";

export class ProductService extends baseService {
    constructor() {
        super();
    }
    getAllProduct = () => {
        return this.get("/product/all");
    };
    getProductDetail = (id) => {
        return this.get(`/product/detail?id=${id}`);
    };
}

export const productService = new ProductService();
