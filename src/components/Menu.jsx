import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import SectionWrapper from "../ui/SectionWrapper";
import COOKIES_DATA from "../data/CookiesData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Menu() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <ProductHeader>Meet Our Favourites.</ProductHeader>
        <ProductSubHeader>
          When we set out to bake a cookie, we aimed for perfection. Our passion
          for quality ingredients and love for baking come together to create a
          moment of pure bliss in every delicious bite
        </ProductSubHeader>
        <CookieList>
          {COOKIES_DATA.slice(0, 3).map(({ id, name, price, url }) => (
            <Cookie key={id}>
              <ImageWrapper>
                <Link to={`/product-details/${id}`}>
                  <CookieImage src={url} />
                </Link>
              </ImageWrapper>
              <CookieDescription>
                <Link to={id}>{name}</Link>
                <div>${price}</div>
              </CookieDescription>
            </Cookie>
          ))}
        </CookieList>
        <ShopAllButton>Shop All</ShopAllButton>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

export default Menu;

const ShopAllButton = styled(Button)`
  margin-bottom: clamp(50px, calc(7vw + 1rem), 200px);
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  padding-top: clamp(50px, calc(8vw +2rem), 200px);
`;

const ProductHeader = styled.h2`
  /* font-size: clamp(1rem, calc(0.5vw + 1rem), 2rem) */
  font-size: clamp(2.5rem, 4vw, 3rem);
  text-align: center;
  line-height: 1;
`;

const ProductSubHeader = styled.h3`
  background-color: inherit;
  text-align: center;
  /* font-size: calc((0.8 - 1) * 1.2vw + 1rem); */
  font-size: clamp(0.8rem, calc(0.3vw + 1rem), 2rem);
  font-weight: var(--font-weight-light);
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
  /* text-transform: uppercase;  */
`;

const CookieList = styled.ul`
  text-decoration: none;
  display: grid;
  margin: 0;
  padding-inline-start: 0px;
  padding-block-end: 32px;

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
