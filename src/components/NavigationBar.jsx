import { NavLink, Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { useState } from "react";
import Modal from "../ui/Modal";
import styled from "styled-components";
import Cart from "./Cart";
function NavigationBar() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseCart = () => {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      {showModal && <Cart onClose={handleCloseCart} />}
      <nav>
        <Wrapper>
          <div className={classes.spacer}></div>
          <ul className={`${classes.links} ${classes.leftLinks}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <Link to="/" className={classes.logo}>
            Cookie Shop
          </Link>
          <ul className={classes.links}>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                onClick={() => setShowModal(true)}
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <div className={classes.burger}>+</div>
        </Wrapper>
      </nav>
    </>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: end;
  margin-top: -30px;
  font-size: 1.1rem;
  background-color: inherit;
  padding: 6px 32px 8px 32px;
  margin-left: -30px;
  margin-right: -30px;
`;
