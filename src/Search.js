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
    dispatch(search(document.getElementById("textbox").value));
  };
  if (searc === undefined) {
    searc = JSON.parse(localStorage.getItem("search"));
  } else {
    localStorage.setItem("search", JSON.stringify(searc));
  }
  return (
    <div className="searchResults">
      <div className="top">
        <img
          src="https://fontmeme.com/permalink/211201/bd015b696b227484ae3a61754921fef7.png"
          alt="MusikBox"
          border="0"
          width="15%"
        />
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
      </div>
      <div className="body">
        <h1 id="search-title">Search Results</h1>
        <div className="search-list">
          {searc.map((song) => (
            <Link to={`/search/${song.name}`}>
              <Track track={song} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
