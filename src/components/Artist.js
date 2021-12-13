import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopSongsByArtist } from "../actions";

export function Artist(props) {
  const artist = props.artist;
  const dispatch = useDispatch();

  const getS = () => {
    dispatch(getTopSongsByArtist(artist.name));
  };

  return (
    <div className="track-display">
      <Link to={`/artists/${artist.name}`} onClick={getS}>
        <p className="track-name">{artist.name}</p>
      </Link>
      <p className="track-artist">{artist.listeners}</p>
    </div>
  );
}
