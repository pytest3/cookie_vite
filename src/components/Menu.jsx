import Products from "../pages/Products";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import SectionWrapper from "../ui/SectionWrapper";
import classes from "./Menu.module.css";
function Menu() {
  return (
    <SectionWrapper className={classes.container}>
      <MaxWidthWrapper>
        <Products></Products>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}

export default Menu;
