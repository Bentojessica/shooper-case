import { PucharseInsert } from "../model/Pucharse";
import { BaseDataBase } from "./BaseDataBase";

export class PucharseDataBase extends BaseDataBase {
    private static TABLE_PUCHARSE = "shopper_pucharse";

    async insertPucharse (pucharse: PucharseInsert) {
        try {
            await this.getConnection()
        .insert({
            id: pucharse.id,
            product_name: pucharse.nameProduct,
            product_id: pucharse.productId,
            price: pucharse.price,
            amount: pucharse.amount,
            total: pucharse.totalPrice
        })
        .into(PucharseDataBase.TABLE_PUCHARSE )

        
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    async getAllPucharse () {
        try {
        const pucharse = await this.getConnection()

        .select("shopper_pucharse.id as idDaCompra", "shopper_pucharse.price as preco",
        "shopper_pucharse.amount as quantidade","shopper_products.name as nomeDoProduto", "shopper_pucharse.product_id as idDoProduto",
        "shopper_pucharse.total as total")
        .into(PucharseDataBase.TABLE_PUCHARSE )
        .join("shopper_products","shopper_pucharse.product_id", "shopper_products.id")

            return pucharse

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

   async editPucharseAmout (pucharse: PucharseInsert, id: string) {
        try {
            await this.getConnection()
        .update({
            product_id: pucharse.productId,
            amount: pucharse.amount,
            total: pucharse.totalPrice
        })
           .where({"shopper_pucharse.id": id})
        .into(PucharseDataBase.TABLE_PUCHARSE )
        } catch (error: any) {
            throw new Error(error.message)
        }

    }


    async deletPucharse (id: string) {
        try {
         await this.getConnection()
        .delete()
        .where({"shopper_pucharse.id": id})
        .into(PucharseDataBase.TABLE_PUCHARSE)

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    async deletAllPucharses () {
        try {
         await this.getConnection()
        .delete()
        .into(PucharseDataBase.TABLE_PUCHARSE)

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

}

