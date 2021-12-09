import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { startDeleteFave, startLoadingFaves } from "../actions";

export function FaveTrack(props) {
  const track = props.track;
  console.log(track);
  console.log(track.song_name, track.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingFaves());
  });

  const deleteFave = () => {
    dispatch(startDeleteFave(track.id));
    <Navigate to="/favorites" />;
  };

  return (
    <div className="track-display">
      <div className="track-info">
        <p className="track-name">{track.song_name}</p>
        <p className="track-artist">{track.artist_name}</p>
      </div>
      <div className="fave-button">
        <button className="removeFave" onClick={deleteFave}>
          &#9733;
        </button>
      </div>
    </div>
  );
}
