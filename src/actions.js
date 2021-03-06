const API_KEY = "fc5224d11277010e2fd758dd37ad3150";

export const Action = Object.freeze({
  //   LoadTrendingByName: "LoadTrendingByName",
  LoadTrendingByArtist: "LoadTrendingByArtist",
  //   LoadTrendingByGenre: "LoadTrendingByGenre",
  //   LoadLatest: "LoadLatest",
  LoadTopTracks: "LoadTopTracks",
  LoadSearch: "LoadSearch",
  LoadTopArtists: "LoadTopArtists",
  LoadTopTags: "LoadTopTags",
  GetTrackInfo: "GetTrackInfo",
  FinishAddingFavorites: "FinishAddingFavorites",
  RemoveFave: "RemoveFave",
  StartedWaiting: "StartedWaiting",
  StoppedWaiting: "StoppedWaiting",

  // StartLoadingFaves: "StartLoadingFaves",
});

export function search(keyword) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyword}&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    dispatch(showProgress());
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadSearch(data.results.trackmatches.track));
        dispatch(hideProgress());
      })
      .catch((e) => console.error(e));
  };
}

export function loadSearch(search) {
  return {
    type: Action.LoadSearch,
    payload: search,
  };
}

export function loadTopTracks() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    dispatch(showProgress());
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadTopAction(data.tracks.track));
        dispatch(hideProgress());
      })
      .catch((e) => console.error(e));
  };
}

export function loadTopAction(topTracks) {
  return {
    type: Action.LoadTopTracks,
    payload: topTracks,
  };
}

export function loadTopArtists() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    dispatch(showProgress());
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadTopArtistsAction(data.artists.artist));
        dispatch(hideProgress());
      })
      .catch((e) => console.error(e));
  };
}

export function loadTopArtistsAction(topArtists) {
  return {
    type: Action.LoadTopArtists,
    payload: topArtists,
  };
}

// export function loadTopTags() {
//   const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;

//   return (dispatch) => {
//     fetch(url, {
//       "content-type": "application/json",
//     })
//       .then(assertResponse)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(loadTopTagsAction(data.tags.tag));
//       })
//       .catch((e) => console.error(e));
//   };
// }

// export function loadTopTagsAction(topTags) {
//   return {
//     type: Action.LoadTopTags,
//     payload: topTags,
//   };
// }

export function getTrackInfo(name, artist) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${artist}&track=${name}&format=json`;
  return (dispatch) => {
    fetch(url, {
      "content-type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadGetTrackInfo(data.track));
      })
      .catch((e) => console.error(e));
  };
}

export function loadGetTrackInfo(album) {
  return {
    type: Action.GetTrackInfo,
    payload: album,
  };
}

export function startAddingFavorites(name, artist) {
  const track = {
    song_name: name,
    artist_name: artist,
  };

  // console.log(JSON.stringify(track));

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(track),
  };

  return (dispatch) => {
    fetch(`https://project2.mixamum.me:8443/songs/`, options)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishAddingFavorites(track));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishAddingFavorites(track) {
  return {
    type: Action.FinishAddingFavorites,
    payload: track,
  };
}

export function startLoadingFaves() {
  const url = `https://project2.mixamum.me:8443/songs/`;

  const options = {
    method: "GET",
  };

  return (dispatch) => {
    // dispatch(showProgress());
    fetch(url, options)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishAddingFavorites(data));
          // dispatch(hideProgress());
        }
      })
      .catch((e) => console.error(e));
  };
}

export function startDeleteFave(id) {
  const url = `https://project2.mixamum.me:8443/songs/${id}`;
  const options = {
    method: "DELETE",
  };

  return (dispatch) => {
    dispatch(showProgress());
    fetch(url, options)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(removeItem(id));
          dispatch(hideProgress());
        }
      })
      .catch((e) => console.error(e));
  };
}

export const removeItem = (id) => {
  return {
    type: Action.RemoveFave,
    id: id,
  };
};

export function getTopSongsByArtist(artist) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    dispatch(showProgress());
    fetch(url, {
      "content-type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(finishTopSongArtist(data.toptracks.track));
        dispatch(hideProgress());
      })
      .catch((e) => console.error(e));
  };
}

export function finishTopSongArtist(songs) {
  return {
    type: Action.LoadTrendingByArtist,
    payload: songs,
  };
}

export function showProgress() {
  return { type: Action.StartedWaiting };
}

export function hideProgress() {
  return { type: Action.StoppedWaiting };
}

function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
