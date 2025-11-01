const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for doesn’t exist or may have been
          moved.
        </p>
        <a href="/" className="back-home-btn">
          Go Back Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
