import React from "react";

export function Artist(props) {
  const artist = props.artist;
  //   const baseURL = "https://coverartarchive.org/release/";
  //   const unavailable =
  //     "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";

  return (
    <div className="artist-display">
      {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
      <p className="artist-name">{artist.name}</p>
      <p className="artist-listeners">{artist.listeners}</p>
    </div>
  );
}