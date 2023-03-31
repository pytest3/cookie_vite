import MaxWidthWrapper from "../ui/MaxWidthWrapper";

function Testimonial() {
  return (
    <MaxWidthWrapper>
      <section id="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <img src="customer1.jpg" alt="Customer" />
            <p>
              "These are the best cookies I've ever had! I can't stop eating
              them."
            </p>
            <p className="customer">- Sarah Johnson</p>
          </div>
          <div className="testimonial">
            <img src="customer2.jpg" alt="Customer" />
            <p>
              "I ordered cookies for my office party and everyone loved them!
              I'll definitely be ordering again."
            </p>
            <p className="customer">- John Smith</p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Testimonial;
