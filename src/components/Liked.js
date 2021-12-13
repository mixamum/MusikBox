import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaveTrack } from "./FaveTrack";
import { useDispatch, useSelector } from "react-redux";
import { search, startLoadingFaves } from "../actions";
import Loading from "./LoadingSpinner";

export function Liked(props) {
  let faveSongs = props.liked.results;
  const [title, setTitle] = useState("");
  const loadingSearch = useSelector((state) => state.loadingSearch);
  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(search(title));
  };

  useEffect(() => {
    dispatch(startLoadingFaves());
  });
  if (faveSongs === undefined || faveSongs.length === 0) {
    return (
      <div className="searchResults">
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
                onChange={(event) => setTitle(event.target.value)}
              ></input>
              <Link to={`/search/`}>
                <input
                  type="image"
                  alt="Search Button"
                  id="search-button"
                  onClick={onSearch}
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
        <div className="body">
          <div className="card-display">
            <p className="empty-favorites">
              Add Songs to your favorites to see them here!
            </p>
          </div>
        </div>
        <footer>
          <p>
            Made using{" "}
            <a href="https://www.last.fm/api#getting-started">
              Last.fm database
            </a>
          </p>
          <p>Developed by Maxim Untilov</p>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="searchResults">
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
              ></input>
              <Link to={`/search/`}>
                <input
                  type="image"
                  alt="Search Button"
                  id="search-button"
                  onClick={onSearch}
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
        <div className="body-fave">
          <div className="card-display">
            <Loading load={loadingSearch} />
            <h2 className="top-heading">Favorites</h2>
            {faveSongs?.map((track) => (
              <FaveTrack track={track} />
            ))}
          </div>
        </div>
        <footer>
          <p>
            Made using{" "}
            <a href="https://www.last.fm/api#getting-started">
              Last.fm database
            </a>
          </p>
          <p>Developed by Maxim Untilov</p>
        </footer>
      </div>
    );
  }
}
