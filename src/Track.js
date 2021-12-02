import React from "react";

export function Track(props) {
  const track = props.track;
  //   const baseURL = "https://coverartarchive.org/release/";
  //   const unavailable =
  //     "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";

  if (!track.artist.name) {
    return (
      <div>
        {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
        <p>{track.name}</p>
        <p>{track.artist}</p>
      </div>
    );
  } else {
    return (
      <div>
        {/* <img src={unavailable} alt={track.name}></img> */}
        <p>{track.name}</p>
        <p>{track.artist.name}</p>
      </div>
    );
  }
}
