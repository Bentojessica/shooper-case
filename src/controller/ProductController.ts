import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {

    async getProductByIdController (req: Request, res: Response) {
        try {
            const id = req.params.id

            const productBusiness = new ProductBusiness()
            const product = await productBusiness.getProductByIdBusiness(id)

            res.status(200).send(product)
    
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    async getAllProduct (req: Request, res: Response) {
        try {

            const productBusiness = new ProductBusiness()
            const product = await productBusiness.getAllProductBusiness()

            res.status(200).send(product)
    
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

}
