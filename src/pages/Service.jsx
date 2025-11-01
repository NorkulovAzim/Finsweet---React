import Shapes from "../assets/img/Shapes.svg";

const Service = () => {
  return (
    <main className="service-section">
      <div className="container">
        <div className="service-wrap">
          <div className="service-content">
            <p>Our Services</p>

            <h2>
              We Build Software <br /> Solutionthat Solve Clients <br />{" "}
              Business Challenges
            </h2>

            <img src={Shapes} alt="" className="shapes" />

            <div className="service-request">
              <span>
                Through True Rich Attended does no end it his mother since
                favourable real <br /> had half every him case in packages
                enquire we up ecstatic.
              </span>

              <button>
                Request A Quote
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="service-list">
            <ul>
              <li>Technical support</li>
              <li>
                Development <i class="fa-solid fa-arrow-right"></i>
              </li>
              <li>AWS/Azure </li>
              <li>Consulting</li>
              <li>Information Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
