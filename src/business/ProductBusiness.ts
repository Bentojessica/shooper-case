import { ProductDataBase } from "../data/ProductDataBase";
import { invalidParams } from "../error/CustomErrorProduct";

export class ProductBusiness {
    async getProductByIdBusiness (id: string) {
        try {
            if(!id) {
                throw new invalidParams();
            }

            const productDataBase = new ProductDataBase()
            const product = await productDataBase.getProductById(id)

            return product
    
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getAllProductBusiness () {
        try {

            const productDataBase = new ProductDataBase()
            const product = await productDataBase.getAllProduct()
            
            return product
    
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
