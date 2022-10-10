import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../contantes/BaseUrl";
import { GlobalContext } from "../../Context/GlobalContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icon from "../../asserts/icon.png";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { ComponentCart, ButtonFinalizar, ContainerInput } from "./styled";
import TextField from "@mui/material/TextField";

const CartPurchases = () => {
  const { states, setters, requests } = useContext(GlobalContext);
  const [nameInput, setNameInput] = useState("");
  const [dataInput, setDataInput] = useState("");

  useEffect(() => {
    requests.selectCartPuchase();
  }, [states.cartPurchase]);

  const addToQuantity = (idDoProduto, idDaCompra) => {
    const newAmount = Number(prompt("Adiciona quantidade!"));
    const body = {
      amount: newAmount,
      productId: idDoProduto,
    };
    axios
      .put(`${BASE_URL}/shopper/edit-amout/${idDaCompra}`, body)
      .then(() => {
        alert("Quantidade adicionada");
        
        setters.setCartPurchase(states.cart);
      })
      .catch((error) => {
        alert("Quantidade indisponível");
      });
  };

  const removePurchase = (idDaCompra) => {
    axios
      .delete(`${BASE_URL}/shopper/pucharse/${idDaCompra}`)
      .then(() => {
        setters.setCartPurchase(states.cart);
        alert("Compra removida com sucesso");
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const removeAllCart = () => {
    axios
      .delete(`${BASE_URL}/shopper/delete/pucharse`)
      .then(() => {
        setters.setCartPurchase(states.cart);
        alert("Compra Realizada com Sucesso, obrigada pela preferência!");
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    removeAllCart();
  };

  const onChangeName = (event) => {
    setNameInput(event.target.value);
  };

  const onChangeData = (event) => {
    setDataInput(event.target.value);
  };

  let preco = 0;

  const carts =
    states.cartPurchase &&
    states.cartPurchase.map((product) => {
      preco += product.total;

      return (
        <Card sx={{ maxWidth: 300 }} key={product.idDaCompra}>
          <CardMedia component="img" height="140" src={icon} alt="produto"/>
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              R${product.preco}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center" }}
            >
              {product.nomeDoProduto}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              {product.quantidade} quantidade
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ paddingTop: "35px" }}
            >
              Total: R$ {product.total},00
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ margin: "0px 10px" }}
              onClick={() =>
                addToQuantity(product.idDoProduto, product.idDaCompra)
              }
            >
              <AddIcon />
            </Button>
            <Button
              size="small"
              style={{ margin: "0px 90px" }}
              onClick={() => removePurchase(product.idDaCompra)}
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      );
    });

  return (
    <div>
      {states.cartPurchase && states.cartPurchase.length > 0 ? (
        <div>
          <ComponentCart>{carts}</ComponentCart>
          <Typography
            variant="h4"
            color="text.secondary"
            style={{ textAlign: "center", margin: "34px 0px 35px" }}
          >
            Antes de finalizar o pedido adicione e confirma as informações
            necessárias
          </Typography>
          <ContainerInput>
            <form onSubmit={onSubmitForm}>
              <TextField
                required
                onChange={onChangeName}
                value={nameInput}
                label="Nome Completo"
                defaultValue="Nome Completo"
                InputLabelProps={{ shrink: true, required: true }}
              />
              <TextField
                required
                style={{ marginLeft: "15rem" }}
                name="Data Entrega"
                label="Data Entrega"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                onChange={onChangeData}
                value={dataInput}
              />
              <Typography
                variant="body1"
                color="text.primary"
                style={{ textAlign: "center", margin: "60px 0px 30px" }}
              >
                Valor total: R$ {preco},00
              </Typography>
              <ButtonFinalizar>Finalizar Compra</ButtonFinalizar>
            </form>
          </ContainerInput>
        </div>
      ) : (
        <Typography
          variant="h3"
          color="text.primary"
          style={{ textAlign: "center", margin: "60px 0px 30px" }}
        >
          Carrinho Vazio
        </Typography>
      )}
    </div>
  );
};

export default CartPurchases;
