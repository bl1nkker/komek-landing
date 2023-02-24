const Banner = () => {
  return (
    <section className="banner d-flex flex-column justify-content-center align-items-start p-5">
      <div className="banner-text d-flex flex-column justify-content-center align-items-start">
        <p>We do it for people in need</p>
        <h1 className="text-start banner-title">
          Donation has never been easier, and so satisfying! Komek (in Kazakh
          "help") - a passive donation app
        </h1>
        <a className="btn btn-outline-success mt-3" href="#form">
          Join Us
        </a>
      </div>
    </section>
  );
};

export default Banner;
