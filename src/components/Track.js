import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrackInfo, startAddingFavorites } from "../actions";
// import { Link } from "react-router-dom";

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

  // const getTI = () => {
  //   dispatch(getTrackInfo(track.name, track.artist));
  // };

  // const getTI2 = () => {
  //   dispatch(getTrackInfo(track.name, track.artist.name));
  // };

  useEffect(() => {
    dispatch(getTrackInfo(track.name, track.artist));
  }, [dispatch, track.artist, track.name]);

  //Search Return
  if (!track.artist.name) {
    return (
      <div className="track-display">
        <div className="track-info">
          {/* <Link to={`/search/${track.name}`} onClick={getTI}> */}
          <p className="track-name">{track.name}</p>
          {/* </Link> */}

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
