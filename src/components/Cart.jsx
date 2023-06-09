import Modal from "../ui/Modal";
import styled from "styled-components";
import Button from "../ui/Button";
import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../store/cart-context";
import { Link } from "react-router-dom";

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
  const cartCtx = useContext(CartContext);
  const cartDispatchCtx = useContext(CartDispatchContext);
  return (
    <Modal>
      <Wrapper>
        <SuperHeader>
          <div>
            <CloseCartButton onClick={onClose}>X</CloseCartButton>
          </div>
          <RightCorner>
            <span>Cart</span>
            <div>({cartCtx.totalCartQuantity})</div>
          </RightCorner>
        </SuperHeader>
        <Header>CART</Header>
        <CartBody>
          <CartItems>
            {cartCtx.products.map((i) => (
              <CartItem key={i.id}>
                <img src={i.url} alt={i.name} />
                <ItemDescription>
                  <ItemName>{i.name}</ItemName>
                  <ItemQuantity>
                    <QuantityWrapper>
                      <QuantityButton
                        onClick={() =>
                          cartDispatchCtx({
                            type: "DECREMENT",
                            id: i.id,
                            quantity: i.quantity,
                          })
                        }
                      >
                        -
                      </QuantityButton>
                      <Quantity>{i.quantity}</Quantity>
                      <QuantityButton
                        onClick={() =>
                          cartDispatchCtx({
                            type: "INCREMENT",
                            id: i.id,
                            quantity: i.quantity,
                          })
                        }
                      >
                        +
                      </QuantityButton>
                    </QuantityWrapper>
                  </ItemQuantity>
                  <ItemPrice>${i.price}</ItemPrice>
                </ItemDescription>
              </CartItem>
            ))}
          </CartItems>
          {cartCtx.totalCartQuantity === 0 && (
            <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          )}
        </CartBody>
        <CartFooter>
          {cartCtx.totalCartQuantity !== 0 && (
            <TotalCost>
              <div>Subtotal:</div>
              <div>${cartCtx.totalCost.toFixed(2)}</div>
            </TotalCost>
          )}
          {cartCtx.totalCartQuantity === 0 ? (
            <Link to="/products">
              <ContinueShoppingButton onClick={onClose}>
                Continue Shopping
              </ContinueShoppingButton>
            </Link>
          ) : (
            <BuyButton>Continue to Checkout</BuyButton>
          )}
        </CartFooter>
      </Wrapper>
    </Modal>
  );
}

const EmptyCartMessage = styled.div`
  justify-self: center;
  color: var(--color-gray-700);
`;

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
`;

const ItemDescription = styled.div`
  display: grid;
  grid-template-areas:
    "name price"
    "quantity price";
  justify-content: space-between;
  align-content: space-between;
  gap: 0px 16px;
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
  width: 110px;
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
  gap: 20px;
  grid-template-columns: 6rem 1fr;

  &:not(:last-of-type) {
    padding-bottom: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:last-of-type {
    padding-bottom: 24px;
  }
`;

const BuyButton = styled(Button)`
  width: 100%;
  text-align: center;
`;

const ContinueShoppingButton = styled(BuyButton)``;

const CartFooter = styled.div`
  display: grid;
`;

const CartBody = styled.div`
  display: grid;
  overflow: auto;
  grid-template-rows: 30px 1fr;
  padding-bottom: 24px;
  padding-right: 10px;
  border-bottom: 1px solid var(--color-gray-500);
  margin-bottom: 24px;
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
