import styled from "styled-components";
import Button from "../ui/Button";
import COOKIES_DATA from "../data/CookiesData";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const formSubmitHandler = () => {};
  const { productId } = useParams();

  const { name, price, description, url } = COOKIES_DATA.find((i) => {
    return i.id === +productId;
  });

  return (
    <Wrapper>
      <ProductImage src={url}></ProductImage>
      <OrderForm onSubmit={formSubmitHandler}>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Description>{description}</Description>
        <QuantityLabel htmlFor="quantity">Quantity</QuantityLabel>
        <ProductQuantity
          id="quantity"
          name="quantity"
          type="number"
          min="0"
        ></ProductQuantity>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </OrderForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;
const ProductImage = styled.img``;
const Name = styled.h1``;
const Price = styled.div``;
const Description = styled.div``;
const OrderForm = styled.form`
  display: grid;
  gap: 20px;
`;
const QuantityLabel = styled.label``;
const ProductQuantity = styled.input`
  width: 100px;
`;
const AddToCartButton = styled(Button)`
  width: 300px;
`;
