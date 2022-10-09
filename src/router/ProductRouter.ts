import { Router } from "express";
import { ProductController } from "../controller/ProductController";

export const productRouter = Router()

const productController = new ProductController()

productRouter.get("/product/:id", productController.getProductByIdController)
productRouter.get("/all", productController.getAllProduct)