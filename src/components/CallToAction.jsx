import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";
import classes from "./CallToAction.module.css";

function CallToAction() {
  return (
    <SectionWrapper className={classes.sectionWrapper}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.callToActionText}>
          Indulge in the heavenly taste of our homemade cookies, crafted with
          the finest ingredients and baked with love to bring joy to every
          moment of your day
        </h1>
        <Button className={classes.button}>View menu</Button>
      </div>
    </SectionWrapper>
  );
}

export default CallToAction;
