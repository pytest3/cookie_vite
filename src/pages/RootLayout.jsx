import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function RootLayout() {
  return (
    <Wrapper>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </Wrapper>
  );
}

export default RootLayout;

const Wrapper = styled.div`
  padding: 30px;
  background-color: var(--color-background);

  @media (max-width: 550px) {
    padding: 30px 0px;
  }
`;
