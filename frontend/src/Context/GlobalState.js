import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../contantes/BaseUrl";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [cardProduct, setCardProduct] = useState([]);
  const [cartPurchase, setCartPurchase] = useState([]);
  const [cardProductId, setCardProductId] = useState([]);

  useEffect(() => {
    selectAllProduct();
    selectCartPuchase();
  }, [cardProduct]);

  const selectAllProduct = () => {
    axios
      .get(`${BASE_URL}/shopper/all`)
      .then((response) => {
        setCardProduct(response.data);
      })
      .catch((error) => {
        alert("Ocorreu o erro " + error.message);
      });
  };

  const selectCartPuchase = () => {
    axios
      .get(`${BASE_URL}/shopper/pucharse-all`)
      .then((response) => {
        setCartPurchase(response.data);
      })
      .catch((error) => {
        alert("Ocorreu o erro " + error.message);
      });
  };

  const states = { cardProduct, cartPurchase, cardProductId };
  const setters = {
    setCardProduct,
    setCartPurchase,
    setCardProductId
  };
  const requests = { selectCartPuchase };
  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
