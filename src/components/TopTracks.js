import React from "react";
import { Track } from "./Track";

function TopTracks(props) {
  const tracks = props.tracks;
  return (
    <div className="body">
      <div className="card-display">
        <h2 className="top-heading">Top Tracks</h2>
        {tracks?.map((track) => (
          <Track track={track} />
        ))}
      </div>
    </div>
  );
}

export default TopTracks;
