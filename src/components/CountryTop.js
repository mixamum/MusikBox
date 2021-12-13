import React from "react";
import Loading from "./LoadingSpinner";

function CountryTop() {
  return (
    <div className="body">
      <div className="card-display">
        <h2 className="top-heading">Top Tracks</h2>
        {/* <Loading load={loadingTop} /> */}
        {/* {topTracks?.map((track) => (
          <Track track={track} />
        ))} */}
      </div>
    </div>
  );
}

export default CountryTop;
