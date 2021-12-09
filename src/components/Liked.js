import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaveTrack } from "./FaveTrack";
import { useDispatch } from "react-redux";
import { search, startLoadingFaves } from "../actions";

export function Liked(props) {
  let faveSongs = props.liked.results;
  console.log(faveSongs);

  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(search(document.getElementById("textbox").value));
  };

  useEffect(() => {
    dispatch(startLoadingFaves());
  });
  // if (faveSongs.length === 0) {
  //   return (
  //     <div className="searchResults">
  //       <div className="top">
  //         <div className="musicImg">
  //           <a href="/home">
  //             <img
  //               src="https://fontmeme.com/permalink/211201/bd015b696b227484ae3a61754921fef7.png"
  //               alt="MusikBox"
  //               border="0"
  //               width="15%"
  //               className="musikBoxLogo"
  //             />
  //           </a>
  //         </div>
  //         <div className="searchbar">
  //           <form action="/search">
  //             <input
  //               type="text"
  //               id="textbox"
  //               placeholder="Search..."
  //               name="search"
  //             ></input>
  //             <Link to={`/search/`}>
  //               <input
  //                 type="image"
  //                 alt="Search Button"
  //                 id="search-button"
  //                 onClick={onSearch}
  //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmiHfL1W75k3vCuOSfQh-hL4y6M-D3__C_A&usqp=CAU"
  //               />
  //             </Link>
  //           </form>
  //         </div>
  //         <div className="favorites">
  //           <Link to={`/favorites`}>
  //             <button>Favorites</button>
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="body">
  //         <div className="card-display">
  //           <h2 id="search-title">Search Results</h2>
  //           {/* {faveSongs?.map((track) => (
  //             <FaveTrack track={track} />
  //           ))} */}
  //           <p>ARRAY IS 0</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="searchResults">
      <div className="top">
        <div className="musicImg">
          <a href="/home">
            <img
              src="https://fontmeme.com/permalink/211201/bd015b696b227484ae3a61754921fef7.png"
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
          {faveSongs?.map((track) => (
            <FaveTrack track={track} />
          ))}
        </div>
      </div>
    </div>
  );
  //}
}
