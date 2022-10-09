import { Request, Response } from "express"
import { PucharseBusiness } from "../business/PucharseBusiness"
import { PucharseInputDTO, PucharseInsert } from "../model/Pucharse"

export class PucharseController  {

    async insertPucharseController (req: Request, res: Response) {
    try {
        const {nameProduct, price, amount, productId } = req.body
        const input: PucharseInputDTO = {
            nameProduct,
            price,
            amount,
            productId
        }

        const pucharseBusiness = new PucharseBusiness()
        await pucharseBusiness.insertPucharseBusiness(input)

        res.status(201).send({
            message: `Successfully registered pruchases `
        })

    } catch (error: any) {
        res.status(500).send({ error: error.message })
    }
    }

    async getAllPucharseController (req: Request, res: Response) {
        try {
            const pucharseBusiness = new PucharseBusiness()
            const pucharse = await pucharseBusiness.getAllPucharseBusiness()

            res.status(200).send(pucharse)
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

   async editPucharseAmoutController (req: Request, res: Response) {
        try {

            const {amount, productId} = req.body

            const id = req.params.id 

            const input: PucharseInsert = {
                amount, 
                productId
            }
    
            const pucharseBusiness = new PucharseBusiness()
            await pucharseBusiness.editPucharseAmoutBusiness(input, id)
    
            res.status(201).send({
                message: `Successfully edit Amount `
            })
    
        } catch (error: any) {
            res.status(500).send({ error: error.message })
        }
        }

        async deletPucharseController (req: Request, res: Response) {
            try {
    
                const id = req.params.id
        
                const pucharseBusiness = new PucharseBusiness()
                await pucharseBusiness.deletPucharseBusiness(id)
                
                res.status(201).send({
                    message: `Successfully delete product do carrinho `
                })
        
            } catch (error: any) {
                res.status(500).send({ error: error.message })
            }
            }


            async deletAllPucharseController (req: Request, res: Response) {
                try {
            
                    const pucharseBusiness = new PucharseBusiness()
                    await pucharseBusiness.deletAllPucharseBusiness()
                    
                    res.status(201).send({
                        message: `Successfully delete`
                    })
            
                } catch (error: any) {
                    res.status(500).send({ error: error.message })
                }
                }

}

