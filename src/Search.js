import React from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { search } from "./actions";
import { Link } from "react-router-dom";
import { Track } from "./components/Track";

export function Search(props) {
  const dispatch = useDispatch();
  var searc = props.search;
  const onSearch = () => {
    dispatch(search());
  };
  if (searc === undefined) {
    searc = JSON.parse(localStorage.getItem("search"));
  } else {
    localStorage.setItem("search", JSON.stringify(searc));
  }
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
          <h2 id="search-title">Search Results</h2>
          {searc?.map((song) => (
            <Track track={song} />
          ))}
        </div>
      </div>
    </>
  );
}
