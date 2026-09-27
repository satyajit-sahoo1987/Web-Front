import "./CountryDetailShimmer.css";
const CountryDetailShimmer = () => {
  return (
    <div className="country-details-container">

      {/* Back and Forward buttons */}
      <div className="navigation-container">
        <div className="shimmer-button"></div>
        <div className="shimmer-button"></div>
      </div>

      {/* Flag and details */}
      <div className="country-details">

        <div className="shimmer-flag"></div>

        <div className="details-text-container">

          <div className="shimmer-title"></div>

          <div className="details-text">

            <div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>

            <div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>

          </div>

          {/* Border countries */}
          <div className="shimmer-border">
            <div className="shimmer-line"></div>

            <div className="shimmer-badges">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CountryDetailShimmer;