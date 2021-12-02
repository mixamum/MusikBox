import React from "react";
const API_KEY = "fc5224d11277010e2fd758dd37ad3150";

export function Track(props) {
  const track = props.track;
  let length = "";
  //   const baseURL = "https://coverartarchive.org/release/";
  //   const unavailable =
  //     "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";

  // const trackInfo = useSelector((state) => state.trackInfo);
  function trackInfo() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${track.name}&track=${track.artist.name}&format=json`;
    fetch(url, {
      "content-type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.track.duration);
        length = data.track.duration;
      })
      .catch((e) => console.error(e));
  }

  console.log(trackInfo());

  if (!track.artist.name) {
    return (
      <div className="track-display">
        {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
        <p className="track-name">{track.name}</p>
        <p className="track-artist">{track.artist}</p>
      </div>
    );
  } else {
    return (
      <div className="track-display">
        {/* <img src={unavailable} alt={track.name}></img> */}
        <p className="track-name">{track.name}</p>
        <p className="track-artist">{track.artist.name}</p>
        <p></p>
      </div>
    );
  }
}
