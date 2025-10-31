import HomeImg from "../assets/img/Header Image.svg";
import Shapes from "../assets/img/Shapes.svg";

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
      </div>
    </main>
  );
};

export default Home;
