import HomeImg from "../assets/img/Header Image.svg";
import Shapes from "../assets/img/Shapes.svg";
import Sponsor1 from "../assets/logo/Logoipsum.svg";
import Sponsor2 from "../assets/logo/Logoipsum1.svg";
import Sponsor3 from "../assets/logo/Logoipsum2.svg";
import Sponsor4 from "../assets/logo/Logoipsum3.svg";
import Sponsor5 from "../assets/logo/Logoipsum4.svg";

const Home = () => {
  return (
    <main className="home-page">
      <div className="container">
        <div className="home-wrap">
          <div className="home-content">
            <h2>Transform Your Idea Into Reality with Finsweet</h2>

            <p>
              The entire Finsweet team knows what's good with Webflow and <br />{" "}
              you can too with 1 week and a good attitude.
            </p>

            <img className="shapes" src={Shapes} alt="Shapes" />

            <button>
              Request Quote
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="home-img">
            <img src={HomeImg} alt="Home" />
          </div>
        </div>

        <div className="home-sponsors">
          <div className="sponsor-text">
            <p>Our Clients</p>
            <span>We've Worked with</span>
          </div>

          <div className="sponsor-logos">
            <img src={Sponsor1} alt="Sponsor 1" />
            <img src={Sponsor2} alt="Sponsor 2" />
            <img src={Sponsor3} alt="Sponsor 3" />
            <img src={Sponsor4} alt="Sponsor 4" />
            <img src={Sponsor5} alt="Sponsor 5" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
