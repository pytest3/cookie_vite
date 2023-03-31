import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import SectionWrapper from "../ui/SectionWrapper";
import classes from "./AboutUs.module.css";
import Button from "../ui/Button";
function AboutUs() {
  return (
    <SectionWrapper id="about" className={classes.container}>
      <MaxWidthWrapper className={classes.maxWidthWrapper}>
        <div className={classes.imageWrapper}>
          <img src="/images/about-us-4x.jpg" alt="stack of cookies"></img>
        </div>
        <div className={classes.rightPortion}>
          <h2 className={classes.header}>STORIES BEHIND THE BAKERS</h2>
          <p className={classes.aboutText}>
            We are a small family-owned bakery that specializes in delicious
            homemade cookies. All of our cookies are made from scratch using the
            finest ingredients, and we take pride in providing our customers
            with the best possible quality.
          </p>
          <Button className={classes.button}>Learn More</Button>
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}

export default AboutUs;
