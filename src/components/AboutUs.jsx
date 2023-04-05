import classes from "./AboutUs.module.css";
import Button from "../ui/Button";
import styled from "styled-components";

function AboutUs() {
  return (
    <Wrapper>
      <div className={classes.imageWrapper}>
        <img src="/images/about-us-4x.jpg" alt="stack of cookies"></img>
      </div>
      <div className={classes.rightPortion}>
        <h2 className={classes.header}>STORIES BEHIND THE BAKERS</h2>
        <p className={classes.aboutText}>
          We are a small family-owned bakery that specializes in delicious
          homemade cookies. All of our cookies are made from scratch using the
          finest ingredients, and we take pride in providing our customers with
          the best possible quality.
        </p>
        <Button className={classes.button}>Learn More</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 6vw;
  flex-wrap: wrap;
  background-color: var(--color-creamV1);
  margin-left: -30px;
  margin-right: -30px;

  @media (max-width: 500px) {
    margin: 0px;
  }
`;

export default AboutUs;
