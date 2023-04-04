import Modal from "../ui/Modal";
import styled from "styled-components";
import Button from "../ui/Button";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

// const DUMMY_CART_ITEMS = [
//   {
//     id: 1,
//     name: "Cookie1",
//     price: 2,
//     url: "/images/double-choc-chip-cookie.png",
//   },
//   {
//     id: 2,
//     name: "Cookie2",
//     price: 4,
//     url: "/images/double-choc-chip-cookie.png",
//   },
//   {
//     id: 3,
//     name: "Cookie3",
//     price: 3,
//     url: "/images/double-choc-chip-cookie.png",
//   },
//   {
//     id: 3,
//     name: "Cookie3",
//     price: 3,
//     url: "/images/double-choc-chip-cookie.png",
//   },
//   {
//     id: 3,
//     name: "Cookie3",
//     price: 3,
//     url: "/images/double-choc-chip-cookie.png",
//   },
//   {
//     id: 3,
//     name: "Cookie3",
//     price: 3,
//     url: "/images/double-choc-chip-cookie.png",
//   },
// ];

export default function Cart({ onClose }) {
  const ctx = useContext(CartContext);
  return (
    <Modal>
      <Wrapper>
        <SuperHeader>
          <div>
            <CloseCartButton onClick={onClose}>X</CloseCartButton>
          </div>
          <RightCorner>
            <span>Cart</span>
            <div>(3)</div>
          </RightCorner>
        </SuperHeader>
        <Header>CART</Header>
        <CartBody>
          <CartItems>
            {ctx.products.map((i) => (
              <CartItem>
                <img src={i.url} alt={i.name} />
                <ItemDescription>
                  <ItemName>{i.name}</ItemName>
                  <ItemQuantity>
                    <QuantityWrapper>
                      <QuantityButton>-</QuantityButton>
                      <Quantity>{i.quantity}</Quantity>
                      <QuantityButton>+</QuantityButton>
                    </QuantityWrapper>
                  </ItemQuantity>
                  <ItemPrice>${i.price}</ItemPrice>
                </ItemDescription>
              </CartItem>
            ))}
          </CartItems>
        </CartBody>
        <CartFooter>
          <TotalCost>
            <div>Subtotal:</div>
            <div>$216</div>
          </TotalCost>
          <BuyButton>Continue to Checkout</BuyButton>
        </CartFooter>
      </Wrapper>
    </Modal>
  );
}
const CloseCartButton = styled.button``;

const Quantity = styled.span`
  text-align: center;
`;

const QuantityWrapper = styled.div`
  border: 1px solid var(--color-gray-300);
  border-radius: 26px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: stretch;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 0px 15px;
`;

const RightCorner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 0.5rem;
`;

const TotalCost = styled.div`
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  font-weight: var(--font-weight-normal);
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--color-gray-500);
`;

const ItemDescription = styled.div`
  display: grid;
  grid-template-areas:
    "name price"
    "quantity price";
  justify-content: space-between;
  align-content: space-between;
`;

const ItemName = styled.span`
  grid-area: name;
  font-weight: var(--font-weight-bold);
`;

const ItemPrice = styled.div`
  grid-area: price;
`;

const ItemQuantity = styled.div`
  grid-area: quantity;
`;

const CartItems = styled.ul`
  padding-left: 0px;
  display: grid;
  grid-template-rows: repeat(auto-fill, auto);
  margin: 0px;
`;

const CartItem = styled.li`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 6rem 1fr;

  &:not(:last-of-type) {
    padding-bottom: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const BuyButton = styled(Button)`
  width: 100%;
  text-align: center;
`;
const CartFooter = styled.div`
  display: grid;
`;

const CartBody = styled.div`
  display: grid;
  overflow: auto;
  grid-template-rows: 30px 1fr;
  padding-bottom: 24px;
  padding-right: 10px;
`;

const Wrapper = styled.div`
  position: fixed;
  right: 0px;
  width: 25rem;
  height: 100%;
  background-color: var(--color-cart);
  padding: 25px 30px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;
const Header = styled.h1`
  font-size: 2rem;
  font-weight: var(--font-weight-normal);
  align-self: center;
  text-align: center;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--color-gray-500);
`;

const SuperHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
`;
