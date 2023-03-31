import MaxWidthWrapper from "../ui/MaxWidthWrapper";

function Footer() {
  return (
    <MaxWidthWrapper>
      <footer>
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>
                We are a small family-owned bakery that specializes in delicious
                homemade cookies. All of our cookies are made from scratch using
                the finest ingredients.
              </p>
            </div>
            <div className="footer-column">
              <h3>Connect with Us</h3>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <p>123 Main St Anytown, USA 555-123-4567</p>
              <p>&copy; 2023 My Bakery. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}

export default Footer;
