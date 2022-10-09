import { Router } from "express"
import { PucharseController } from "../controller/PucharseController"

export const pucharseRouter = Router()

const pucharseController = new PucharseController()

pucharseRouter.get("/pucharse-all", pucharseController.getAllPucharseController)
pucharseRouter.delete("/pucharse/:id", pucharseController.deletPucharseController)
pucharseRouter.post("/insert-pucharse", pucharseController.insertPucharseController)
pucharseRouter.put("/edit-amout/:id", pucharseController.editPucharseAmoutController)
pucharseRouter.delete("/delete/pucharse", pucharseController.deletAllPucharseController)

