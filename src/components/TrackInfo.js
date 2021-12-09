import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrackInfo } from "../actions";

// export function getJsonTrackInfo(name, artist) {
//   return fetch(
//     `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=fc5224d11277010e2fd758dd37ad3150&artist=${artist}&track=${name}&format=json`,
//     {
//       headers: { "Content-Type": "application/json" },
//     }
//   )
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson.track);
//       return responseJson.track;
//     })
//     .catch((e) => console.error(e));
// }

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrackInfo());
  }, [dispatch]);

  const trackI = useSelector((state) => state.trackInfo);

  // const info = useSelector((state) => state.trackInfo);
  // console.log(info);
  // const albumImg = trackI.album.image;
  console.log(trackI);
  // console.log(trackI.album.image);
  // console.log(albumImg[1]);
  return (
    <div>
      {/* <h1>{trackI.name}</h1>
      <p>{trackI.artist.name}</p>
      <p>{trackI.wiki.content}</p>
      <p>{trackI.wiki.published}</p>
      <p>{trackI.wiki.summary}</p> */}
      {/* <img src={trackI.album.image}></img> */}
    </div>
  );
}
