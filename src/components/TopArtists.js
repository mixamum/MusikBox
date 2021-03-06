import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../actions";
import { Artist } from "./Artist";

function TopArtists(props) {
  let artists = props.artist;
  console.log(artists);
  const dispatch = useDispatch();
  //   const onSearch = () => {
  //     dispatch(search(document.getElementById("textbox").value));
  //   };

  //   useEffect(() => {
  //     dispatch(startLoadingFaves());
  //   });
  const onSearch = () => {
    dispatch(search(document.getElementById("textbox").value));
  };
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
      <div className="sub-bar">
        <Link to={"/artists"}>
          <button className="popular-artists">Popular Artists</button>
        </Link>
        <button>Music By Genre</button>
      </div>
      <div className="body">
        <div className="card-display">
          <h2 className="top-heading">Top Artists</h2>
          {/* <div className="card-list"> */}
          {artists.map((artist) => (
            <Artist artist={artist} />
          ))}
          {/* </div> */}
        </div>
        {/* <div className="songDisplay">
                  <h2>Top Tags</h2>
                  <div className="card-list">
                    {topTags.map((tag) => (
                      <Tag tag={tag} />
                    ))}
                  </div>
                </div> */}
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

export default TopArtists;
