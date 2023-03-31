import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import SectionWrapper from "../ui/SectionWrapper";
import classes from "./Blog.module.css";

function Blog() {
  return (
    <SectionWrapper className={classes.container}>
      <MaxWidthWrapper>
        <section className="blog">
          <div className="container">
            <h2>From Our Blog</h2>
            <div className="blog-posts">
              <div className="blog-post">
                <img src="blog1.jpg" alt="Blog Post" />
                <h3>How to Make Perfect Chocolate Chip Cookies</h3>
                <p>
                  Learn the secrets to making the perfect chocolate chip cookie
                  in this step-by-step guide.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
              <div className="blog-post">
                <img src="blog2.jpg" alt="Blog Post" />
                <h3>10 Cookie Recipes to Try at Home</h3>
                <p>
                  Looking for some new cookie recipes to try? Check out our list
                  of the top 10 cookie recipes.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}

export default Blog;
