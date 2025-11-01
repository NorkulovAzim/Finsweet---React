import { Link } from "react-router-dom";
import Shapes1 from "../assets/img/Shapes1.svg";
import FooterLogo from "../assets/logo/FooterLogo.svg";
import Facebook from "../assets/logo/Negative.svg";

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
            <h2>
              Let's make <br /> something special
            </h2>

            <h4>Let's talk! 🤙 </h4>

            <a href="tel:020 7993 2905">020 7993 2905</a>
            <a href="mailto:hi@finsweet.com">hi@finsweet.com</a>
          </div>

          <div className="footer-link">
            <div className="link-1">
              <Link to="/">Home</Link>
              <Link to="/Service">Service</Link>
              <Link to="/Company">Company</Link>
              <Link to="/Career ">Career </Link>
              <Link to="/Blog">Blog</Link>
            </div>

            <div className="link-2">
              <Link to="/">Service</Link>
              <Link to="/">Technical support</Link>
              <Link to="/">Testing</Link>
              <Link to="/">Development </Link>
              <Link to="/">AWS/Azure </Link>
              <Link to="/">Consulting</Link>
              <Link to="/">Information Technology</Link>
            </div>

            <div className="link-2">
              <Link to="/">Resourses</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Testimonial</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of use</Link>
              <Link to="/Blog">Blog</Link>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="address">
            <p>
              DLF Cybercity, Bhubaneswar,
              <br /> India, &52050
            </p>
          </div>

          <div className="contact-btn">
            <img src={Shapes1} alt="" />
            <Link to="/">
              Contact Us <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-wrap">
            <div className="footer-logo">
              <Link to="/">
                <img src={FooterLogo} alt="" />
              </Link>

              <p>©2021 Finsweet</p>
            </div>

            <div className="footer-social">
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
