import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import classes from "./Header.module.css";
import NavigationBar from "./NavigationBar";
import Button from "../ui/Button";

function Header() {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.heroImageWrapper}>
          <img
            className={classes.heroImage}
            src="/images/hero-image.jpg"
            alt="cookie"
          />
          <img
            className={classes.heroImageCropped}
            src="/images/hero-image-cropped.jpg"
            alt="cookie"
          />
        </div>

        <div className={classes.figCaption}>
          <h1>Delicious Homemade Cookies</h1>
          <p>
            Indulge in our mouth-watering cookies made with the finest
            ingredients!
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
