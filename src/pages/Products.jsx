import COOKIES_DATA from "../data/CookiesData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  return (
    <CookieList>
      <ProductHeader>Meet Our</ProductHeader>
      <ProductHeaderEnd>Favourites</ProductHeaderEnd>
      {COOKIES_DATA.slice(0, 6).map(({ id, name, price, url }) => (
        <Cookie key={id}>
          <ImageWrapper>
            <CookieImage src={url} />
          </ImageWrapper>
          <CookieDescription>
            <Link to={id}>{name}</Link>
            <div>${price}</div>
          </CookieDescription>
        </Cookie>
      ))}
    </CookieList>
  );
};

export default Products;

const ProductHeader = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3rem);
  text-align: center;
  background-color: #ece8d6;
`;

const ProductHeaderEnd = styled(ProductHeader)`
  background-color: inherit;
  align-self: center;
  white-space: nowrap;
`;

const CookieList = styled.ul`
  padding: clamp(50px, calc(7vw + 1rem), 200px) 0px;
  text-decoration: none;
  display: grid;
  /**
   * User input values.
   */
  --grid-layout-gap: 40px 20px;
  --grid-column-count: 4;
  --grid-item--min-width: 235px;
  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-template-rows: 1fr;
  grid-gap: var(--grid-layout-gap);

  /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
  /* gap: 40px 20px; */
`;

const ImageWrapper = styled.div`
  padding: clamp(25px, calc(1vw+1rem), 40px);
  background-color: #ece8d6;
`;

const Cookie = styled.li`
  list-style-type: none;
`;

const CookieDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CookieImage = styled.img`
  background-color: inherit;
  width: 100%;
`;
