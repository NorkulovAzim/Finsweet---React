import Image1 from "../assets/img/Image 1.png";
import Image2 from "../assets/img/Image 2.png";
import Image3 from "../assets/img/Image 3.png";

import Shapes2 from "../assets/img/Shapes2.svg";
import Shapes4 from "../assets/img/Shapes4.svg";

import Sponsor1 from "../assets/logo/Logo1.svg";
import Sponsor2 from "../assets/logo/Logo2.svg";
import Sponsor3 from "../assets/logo/Logo3.svg";
import Sponsor4 from "../assets/logo/Logo4.svg";
import Sponsor5 from "../assets/logo/Logo5.svg";

const Company = () => {
  return (
    <main className="company-section">
      <div className="container">
        <div className="company-content">
          <p>Company</p>
          <h2>
            Award-winning Company <br /> seen and used by millions <br />
            around the world.
          </h2>

          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a <br /> page when looking at its layout.
            The Maker is a decentralized.
          </span>
        </div>

        <div className="company-img">
          <img src={Image1} alt="company" />
          <img src={Image2} alt="company" />
          <img src={Image3} alt="company" />
        </div>

        <div className="company-story">
          <div className="story-text">
            <p>Our Story 👇 </p>

            <h2>From Startups to Titans of Industry</h2>

            <span>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </span>
          </div>

          {/* <div className="company-stats">
            <div className="stats1">
              <div className="stats-info">
                <h3>1560+</h3>
                <img src={Shapes4} alt="" />
                <p>Project Delivered</p>
              </div>

              <div className="stats-info">
                <h3>100+</h3>
                <img src={Shapes4} alt="" />
                <p>Professional</p>
              </div>
            </div>

            <div className="stats2">
              <div className="stats-info">
                <h3>950+</h3>
                <img src={Shapes4} alt="" />
                <p>Happy Client</p>
              </div>

              <div className="stats-info">
                <h3>10 yrs</h3>
                <img src={Shapes4} alt="" />
                <p>Experience</p>
              </div>
            </div>
          </div> */}

          <div class="parent">
            <div class="div1">
              <h3>1560+</h3>
              <img src={Shapes4} alt="" />
              <p>Project Delivered</p>
            </div>
            <div class="div2">
              <h3>100+</h3>
              <img src={Shapes4} alt="" />
              <p>Professional</p>
            </div>
            <div class="div3">
              <h3>1580+</h3>
              <img src={Shapes4} alt="" />
              <p>Project Delivered </p>
            </div>
            <div class="div4">
              <h3>10 yrs</h3>
              <img src={Shapes4} alt="" />
              <p>Experience</p>
            </div>
          </div>
        </div>

        <div className="company-sponsors">
          <div class="sponsor-img">
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

export default Company;
