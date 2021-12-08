import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrackInfo } from "../actions";

function getJsonTrackInfo(name, artist) {
  return (
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=fc5224d11277010e2fd758dd37ad3150&artist=${artist}&track=${name}&format=json`,
      {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((result) => console.log("success======:", result))
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   return responseJson.track;
      // })
      .catch((e) => console.error(e))
  );
}

export function TrackInfo() {
  // const addFave1 = () => {
  //   dispatch(startAddingFavorites(track.name, track.artist.name));
  // };

  // const addFave2 = () => {
  //   dispatch(startAddingFavorites(track.name, track.artist));
  // };

  const s = useSelector((state) => state.search);
  const params = useParams();
  const track = s.find((t) => t.name === params.title);

  const trackI = getJsonTrackInfo(track.name, track.artist);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTrackInfo(track.name, track.artist));
  // }, [dispatch, track.artist, track.name]);

  // const info = useSelector((state) => state.trackInfo);
  // console.log(info);

  return <div>{trackI.name}</div>;
}
