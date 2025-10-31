import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribe-box">
          <div className="subscribe-text">
            <h3>NEWSLETTER</h3>

            <h2>
              Subscribe our News Letter <br /> to get Latest Updates.
            </h2>
          </div>

          <div className="subscribe-form">
            <input type="text" placeholder="Paresh@Pixeto.com" />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-text">
            <h2>Let's make something special</h2>

            <p>Let's talk! 🤙 </p>

            <a href="tel:020 7993 2905">020 7993 2905</a>
            <a href="mailto:hi@finsweet.com">hi@finsweet.com</a>
          </div>

          <div className="footer-link">
            <div className="bold-link">
              <Link to="/">Home</Link>
              <Link to="/Service">Service</Link>
              <Link to="/Company">Company</Link>
              <Link to="/Career ">Career </Link>
              <Link to="/Blog">Blog</Link>
            </div>

            <div className="service-link">
              <Link to="/">Service</Link>
              <Link to="/">Technical support</Link>
              <Link to="/">Testing</Link>
              <Link to="/">Development </Link>
              <Link to="/">AWS/Azure </Link>
              <Link to="/">Consulting</Link>
              <Link to="/">Information Technology</Link>
            </div>

            <div className="resource-link">
              <Link to="/">Resourses</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Testimonial</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of use</Link>
              <Link to="/Blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
