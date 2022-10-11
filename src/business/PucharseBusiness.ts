import { ProductDataBase } from "../data/ProductDataBase";
import { PucharseDataBase } from "../data/PucharseDataBase";
import { invalidProduct } from "../error/CustomErrorProduct";
import { invalidAmount, invalidParams, invalidPurchases, productInCartExiste } from "../error/CustomErrorPurchase";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { PucharseInputDTO, PucharseInsert } from "../model/Pucharse";
import idGenerator from "../services/idGenerator";

export class PucharseBusiness {

    async insertPucharseBusiness (input: PucharseInputDTO) {

        try {
            const {nameProduct, price, amount, productId} = input

        if(!nameProduct || !price || !amount || !productId) {
            throw new MissingFieldsToComplet();
        }

        const productDataBase = new ProductDataBase()
        let product  = await productDataBase.getProductById(productId as string)

        if(!product) {
            throw new invalidProduct();
        }

        if(amount > product.amount) {
            throw new invalidAmount();
        }

        const totalPrice = Number(product.price * amount)

        const id = idGenerator.generate()

        const newPurchases: PucharseInsert = {
            id,
            nameProduct,
            price,
            amount,
            productId,
            totalPrice
        }

        const pucharseDataBase = new PucharseDataBase()
        let pucharse = await pucharseDataBase.getAllPucharse()

        const filterProductById = pucharse.filter((item) => {
            if(item.idDoProduto === productId) {
                return {
                    ...item
                }
            }
        })

        const newAmountProduct = {
            amount: Number(product.amount - amount)
        }


        if(!filterProductById.length) {
            await pucharseDataBase.insertPucharse(newPurchases) 
            await productDataBase.editProductAmout(newAmountProduct, productId)
        }else {
            throw new productInCartExiste()
        }
        

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getAllPucharseBusiness () {
        try {
            const pucharseDataBase = new PucharseDataBase()
            const pucharse = await pucharseDataBase.getAllPucharse()

            if(!pucharse) {
                throw new invalidPurchases();  
            }

            return pucharse
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

   async editPucharseAmoutBusiness (input: PucharseInputDTO, id: string) {

        try {

            let {amount, productId} = input

            if(!id ) {
                throw new invalidParams();

            }

            if(!amount || !productId) {
                throw new MissingFieldsToComplet();
            }

        const productDataBase = new ProductDataBase()
        const product =  await productDataBase.getProductById(productId)
        
        if(!product) {
            throw new invalidProduct();
        }

        if(amount > product.amount) {
            throw new invalidAmount();
        }

        const pucharseDataBase = new PucharseDataBase()

        let pucharse = await pucharseDataBase.getAllPucharse()
        
        const filterProductById = pucharse.filter((item) => {
            if(item.idDoProduto === productId) {
                return {
                    ...item
                }
            }
        })

        const totalPrice = Number(product.price * amount)
        
        const newPurchases: PucharseInsert = {
            productId,
            amount,
            totalPrice
        }


        if(filterProductById) {
             await pucharseDataBase.editPucharseAmout(newPurchases, id) 
        }

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
        
        async deletPucharseBusiness (id: string) {
        try {
            if(!id) {
                throw new invalidParams();  
            } 

            const pucharseDataBase = new PucharseDataBase()
            const pucharseAmount = await pucharseDataBase.getAllPucharse()

            const productDataBase = new ProductDataBase()
            const product = await productDataBase.getAllProduct()

        const filterProductById = pucharseAmount.filter((item) => {
            if(Number(item.idDoProduto === product[0].id)) {
                return {
                    ...item
                }
            }
        })

        const newAmountProduct = {
            amount: Number(product[0].amount + pucharseAmount[0].quantidade)
        }

        const idDoProduto = pucharseAmount[0].idDoProduto 

        if(filterProductById) {
            await productDataBase.editProductAmout(newAmountProduct, idDoProduto)
            await pucharseDataBase.deletPucharse(id)
        }

        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    async deletAllPucharseBusiness () {
        try {

        const pucharseDataBase = new PucharseDataBase()
         await pucharseDataBase.deletAllPucharses()

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

}

