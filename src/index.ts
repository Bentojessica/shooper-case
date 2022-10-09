import { app } from "./controller/app";
import { productRouter } from "./router/ProductRouter";
import { pucharseRouter } from "./router/PucharseRouter";

app.use("/shopper", productRouter)
app.use("/shopper", pucharseRouter)