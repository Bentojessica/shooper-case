import { ProductInsert } from "../model/Product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
  private static TABLE_PRODUCT = "shopper_products";

async getProductById (id: string){
    try {
        const product = await this.getConnection()
        .select("id", "name", "price", "qty_stock as amount")
        .where({id})
        .into(ProductDataBase.TABLE_PRODUCT)

        return product[0]

    } catch (error: any) {
        throw new Error(error.message)
    }
}

async getAllProduct (){
    try {
        const product = await this.getConnection()
        .select("id","name", "price", "qty_stock as amount")

        .into(ProductDataBase.TABLE_PRODUCT)

        return product

    } catch (error: any) {
        throw new Error(error.message)
    }
}

async editProductAmout (product: ProductInsert, id: string) {
    try {
        await this.getConnection()
    .update({
        qty_stock: product.amount
    })
       .where({id})
    .into(ProductDataBase.TABLE_PRODUCT )
    } catch (error: any) {
        throw new Error(error.message)
    }

}

}

