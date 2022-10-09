import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { Error } from "../pages/Error"
import { Header } from "../components/Header/Header"
export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}