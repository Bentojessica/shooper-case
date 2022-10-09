import error from "../asserts/error.png"
import {ContanierError} from "./styled"

export const Error = () => {
    return (
        <ContanierError>
            <img src={error} alt='Pagina não encontrada'/>
        </ContanierError>
    )
}