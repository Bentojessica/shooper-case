import { useNavigate} from "react-router-dom"
import shopper from "../../asserts/shopper.png"
import {ImagemLogo, ContainerHeader, Button} from "./styled"
import {goToCart, goToHome} from "../../router/coordinator"
import { useState } from "react"

export const Header = () => {
    const [buttonText, setButtonText] = useState("Home" ? "Home" : "Carrinho")
    const navigate = useNavigate()


    const buttonAction = () => {
        switch(buttonText) {
            case "Carrinho":
                setButtonText("Home")
                goToCart(navigate)
            break;
            case "Home":
                setButtonText("Carrinho")
                goToHome(navigate)
            break;
        }
    }
    return (
        <ContainerHeader>
            <ImagemLogo src={shopper} alt="logo shopper"/>
            <Button onClick={buttonAction}>{buttonText}</Button>
        </ContainerHeader>
    )
}