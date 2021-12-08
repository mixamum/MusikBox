import React from "react";
import { useDispatch } from "react-redux";
import { startAddingFavorites } from "../actions";
import { Link } from "react-router-dom";

export function Track(props) {
  const track = props.track;
  const dispatch = useDispatch();

  //   const baseURL = "https://coverartarchive.org/release/";

  const addFave1 = () => {
    dispatch(startAddingFavorites(track.name, track.artist.name));
  };

  const addFave2 = () => {
    dispatch(startAddingFavorites(track.name, track.artist));
  };

  //Search Return
  if (!track.artist.name) {
    return (
      <div className="track-display">
        {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
        <div className="track-info">
          <Link to={`/search/${track.name}`}>
            <p className="track-name">{track.name}</p>
          </Link>
          <p className="track-artist">{track.artist}</p>
        </div>
        <div className="fave-button">
          <button className="addFave" onClick={addFave2}>
            &#11088;
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="track-display">
        {/* <img src={baseURL + track.mbid} alt={track.name}></img> */}
        <div className="track-info">
          <p className="track-name">{track.name}</p>
          <p className="track-artist">{track.artist.name}</p>
        </div>
        <div className="fave-button">
          <button className="addFave" onClick={addFave1}>
            &#11088;
          </button>
        </div>
      </div>
    );
  }
}
