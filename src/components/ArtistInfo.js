import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Track } from "./Track";

function ArtistInfo() {
  const songs = useSelector((state) => state.topSongsByArtist);
  const params = useParams();
  const name = params.name;

  return (
    <>
      <div className="top">
        <div className="musicImg">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/211210/5d85ec547aa9615c6c345a53243f6bfb.png"
              alt="MusikBox"
              border="0"
              width="15%"
              className="musikBoxLogo"
            />
          </a>
        </div>
        <div className="searchbar">
          <form action="/search">
            <input
              type="text"
              id="textbox"
              placeholder="Search..."
              name="search"
              className="searchField"
            ></input>
            <Link to={`/search/`}>
              <input
                type="image"
                alt="Search Button"
                id="search-button"
                // onClick={onSearch}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmiHfL1W75k3vCuOSfQh-hL4y6M-D3__C_A&usqp=CAU"
              />
            </Link>
          </form>
        </div>
        <div className="favorites">
          <Link to={`/favorites`}>
            <button>Favorites</button>
          </Link>
        </div>
      </div>
      <div className="sub-bar">
        <Link to={"/artists"}>
          <button className="popular-artists">Popular Artists</button>
        </Link>
        <button>Music By Genre</button>
      </div>
      <div className="body">
        <div className="card-display">
          <h2 className="top-heading">Top Tracks for {name}</h2>
          {songs?.map((track) => (
            <Track id={track.id} track={track} />
          ))}
        </div>
      </div>
      <footer>
        <p>
          Made using{" "}
          <a href="https://www.last.fm/api#getting-started">Last.fm database</a>
        </p>
        <p>Developed by Maxim Untilov</p>
      </footer>
    </>
  );
}

export default ArtistInfo;
