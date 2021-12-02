import React from "react";

export function Tag(props) {
  const tag = props.tag;
  //   const baseURL = "https://coverartarchive.org/release/";
  //   const unavailable =
  //     "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";

  return (
    <div>
      <p>{tag.name}</p>
      <p>{tag.taggings}</p>
    </div>
  );
}
