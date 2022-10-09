import axios from "axios";
import { useContext } from "react";
import { BASE_URL } from "../../contantes/BaseUrl";
import { GlobalContext } from "../../Context/GlobalContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ComponentCard } from "./styled";
import icon from "../../asserts/icon.png"

const Products = () => {
  const { states } = useContext(GlobalContext);

  const onClickAddPuscharse = (product) => {
    const body = {
      nameProduct: product.name,
      productId: product.id,
      price: product.price,
      amount: 1,
    };

    axios
      .post(`${BASE_URL}/shopper/insert-pucharse`, body)
      .then((response) => {
        alert("Adicionado no Carrinho");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const product = states.cardProduct.map((item) => {
    return (
      <Card
        Card
        variant="outlined"
        style={{ boxShadow: "2px 2px 2px gray" }}
        key={item.id}
      >
        <CardContent>
          <img src={icon} alt='logo shopper'/>
          <Typography sx={{ fontSize: 14 }} color="body2" gutterBottom>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            R${item.price}
          </Typography>
          <Typography color="text.secondary">
            {item.amout} disponíveis
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{ marginLeft: "110px" }}
            onClick={() => onClickAddPuscharse(item)}
          >
            <ShoppingBasketIcon />
          </Button>
        </CardActions>
      </Card>
    );
  });

  return <ComponentCard>{product}</ComponentCard>;
};

export default Products;
