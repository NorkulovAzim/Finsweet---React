import CareerImg from "../assets/img/CareerImg.svg";

const Career = () => {
  return (
    <main className="career-section">
      <div className="container">
        <div className="career-content">
          <p>CAREER AT FINSWEET</p>
          <h2>
            We hired people who are <br /> Always Passionate about <br /> what
            they do
          </h2>

          <span>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </span>
        </div>

        <div className="career-img">
          <img src={CareerImg} alt="" />
        </div>

        <div className="career-options">
          <a href="#">See Our open positions</a>
          <p>👇</p>
        </div>
      </div>
    </main>
  );
};

export default Career;
