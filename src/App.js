import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Search } from "./Search";
import {
  search,
  loadTopTracks,
  loadTopArtists,
  startLoadingFaves,
} from "./actions";
import { Link, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Liked } from "./components/Liked";
import { TrackInfo } from "./components/TrackInfo";
import TopArtists from "./components/TopArtists";
import ArtistInfo from "./components/ArtistInfo";
import Loading from "./components/LoadingSpinner";
import TopTracks from "./components/TopTracks";

function App() {
  // const topTags = useSelector((state) => state.topTags);
  const [title, setTitle] = useState("");
  const topArtists = useSelector((state) => state.topArtists);
  const topTracks = useSelector((state) => state.topTracks);
  const s = useSelector((state) => state.search);
  const faves = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopTracks());
    dispatch(loadTopArtists());
    // dispatch(loadTopTags());
    dispatch(startLoadingFaves());
    dispatch(search(title));
  }, [dispatch, title]);
  const onSearch = (ev) => {
    // ev.preventDefault();
    // ev.stopPropagation();
    dispatch(search(title));
  };

  //For Loading Purposes
  const loadingTop = useSelector((state) => state.loadingTop);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/search" element={<Search search={s} />} />
        <Route exact path="/favorites" element={<Liked liked={faves} />} />
        <Route exact path="/search/:title/" element={<TrackInfo />} />
        <Route exact path="/artists/:name/" element={<ArtistInfo />} />
        <Route
          exact
          path="/artists"
          element={<TopArtists artist={topArtists} />}
        />

        <Route
          exact
          path="/"
          element={
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
              <div className="sub-bar">
                <Link to={"/artists"}>
                  <button className="popular-artists">Popular Artists</button>
                </Link>
                <button>Music By Genre</button>
                <button>Top songs by Country</button>
              </div>
              <Loading load={loadingTop} />
              <TopTracks tracks={topTracks} />
              <footer>
                <p>
                  Made using{" "}
                  <a href="https://www.last.fm/api#getting-started">
                    Last.fm database
                  </a>
                </p>
                <p>Developed by Maxim Untilov</p>
              </footer>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
