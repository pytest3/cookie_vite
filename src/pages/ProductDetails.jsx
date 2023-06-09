import styled from "styled-components";
import Button from "../ui/Button";
import COOKIES_DATA from "../data/CookiesData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartDispatchContext } from "../store/cart-context";

export default function ProductDetails() {
  const { productId } = useParams();
  const CartDispatchCtx = useContext(CartDispatchContext);

  const { id, name, price, description, url } = COOKIES_DATA.find((i) => {
    return i.id === +productId;
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    CartDispatchCtx({
      type: "ADD",
      id: id,
      name: name,
      price: price,
      quantity: +e.target.quantity.value,
      url: url,
    });
  };

  return (
    <Wrapper>
      <ProductImage src={url}></ProductImage>
      <OrderForm onSubmit={formSubmitHandler}>
        <Name>{name}</Name>
        <Price>${price}</Price>
        <Description>{description}</Description>
        <QuantityWrapper>
          <QuantityLabel htmlFor="quantity">Quantity</QuantityLabel>
          <QuantityInput
            id="quantity"
            name="quantity"
            type="number"
            min="0"
            defaultValue={1}
          ></QuantityInput>
        </QuantityWrapper>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </OrderForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 500px;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`;
const ProductImage = styled.img``;
const Name = styled.h1``;
const Price = styled.div``;
const Description = styled.div``;
const OrderForm = styled.form`
  display: grid;
  gap: 25px;
`;
const QuantityWrapper = styled.div`
  display: grid;
  gap: 5px;
`;
const QuantityLabel = styled.label``;
const QuantityInput = styled.input`
  width: 100px;
`;
const AddToCartButton = styled(Button)`
  width: 300px;
  text-align: center;
`;
