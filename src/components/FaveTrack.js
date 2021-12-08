import React from "react";
import { useDispatch } from "react-redux";
import { startDeleteFave } from "../actions";

// import { useDispatch } from "react-redux";
// import { startAddingFavorites } from "../actions";

export function FaveTrack(props) {
  const track = props.track;
  console.log(track);
  const dispatch = useDispatch();

  return (
    <div className="track-display">
      {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
      <div className="track-info">
        <p className="track-name">{track.song_name}</p>
        <p className="track-artist">{track.artist_name}</p>
      </div>
      <div className="fave-button">
        <button className="removeFave" onclick={console.log("clicked unFave")}>
          &#9733;
        </button>
      </div>
    </div>
  );
}
