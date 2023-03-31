import styled from "styled-components";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  document.body.style.overflow = "hidden";

  return createPortal(
    <Wrapper>{children}</Wrapper>,
    document.getElementById("overlay")
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--color-modal);
  z-index: 1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
