import React from "react";
import { useSelector } from "react-redux";
import "./TrackInfo.css";

export function TrackInfo() {
  // const s = useSelector((state) => state.search);
  // const params = useParams();
  // const track = s.find((t) => t.name === params.title);

  const info = useSelector((state) => state.trackInfo);

  console.log(info);
  // console.log(albumImg[2]["#text"]);

  if (!info.wiki) {
    return (
      <div>
        <h1>{info.name}</h1>
        <p>{info.artist.name}</p>
      </div>
    );
  } else if (!info.album.image) {
    return (
      <div>
        <h1>{info.name}</h1>
        <p>{info.artist.name}</p>
        <p>{info.wiki.content}</p>
        <p>{info.wiki.published}</p>
        <p>{info.wiki.summary}</p>
      </div>
    );
  } else {
    const albumImg = info.album.image;

    return (
      <div className="body">
        <div className="musicInfo">
          <h1 className="Song-Name">{info.name}</h1>
          <p className="Artist-Name">{info.artist.name}</p>
          <p className="Wiki-Content">{info.wiki.content}</p>
          <p className="Wiki-pub">{info.wiki.published}</p>
          <p className="Wiki-Summary">{info.wiki.summary}</p>
        </div>
        <div className="albumCover">
          <img src={albumImg[2]["#text"]} alt="Album Cover"></img>
        </div>
      </div>
    );
  }
}
