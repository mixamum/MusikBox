// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Search } from "./Search";
import { search, loadTopTracks, loadTopArtists, loadTopTags } from "./actions";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Track } from "./components/Track";
import React, { useEffect } from "react";
import { Artist } from "./components/Artist";
import { Tag } from "./components/Tag";

function App() {
  // const song = useSelector((state) => state.songs);
  const topTracks = useSelector((state) => state.topTracks);
  const topArtists = useSelector((state) => state.topArtists);
  const topTags = useSelector((state) => state.topTags);
  // console.log(topArtists);
  // console.log(topTracks);
  const s = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopTracks());
    dispatch(loadTopArtists());
    dispatch(loadTopTags());
    dispatch(search(document.getElementById("textbox").value));
  }, [dispatch]);
  const onSearch = () => {
    dispatch(search(document.getElementById("textbox").value));
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/search" element={<Search search={s} />} />
        <Route
          exact
          path="/search/:title"
          children={(props) => {
            const name = props.match.params.name;
            const track = s.find((t) => t.name === name);
            return <Track track={track} />;
          }}
        />
        <Route
          exact
          path=""
          element={
            <>
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
                <div className="card-display">
                  <h2 className="top-heading">Top Tracks</h2>
                  <div className="card-list">
                    {topTracks.map((track) => (
                      <Track track={track} />
                    ))}
                  </div>
                </div>
                {/* <div className="card-display">
                  <h2 className="top-heading">Top Artists</h2>
                  <div className="card-list">
                    {topArtists.map((artist) => (
                      <Artist artist={artist} />
                    ))}
                  </div>
                </div> */}
                {/* <div className="songDisplay">
                  <h2>Top Tags</h2>
                  <div className="card-list">
                    {topTags.map((tag) => (
                      <Tag tag={tag} />
                    ))}
                  </div>
                </div> */}
              </div>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
