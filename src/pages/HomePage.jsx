import { Fragment } from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Products from "./Products";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <CallToAction />

      <AboutUs />
      <Products></Products>

      <Testimonial />
      <Blog />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
