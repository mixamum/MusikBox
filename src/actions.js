const API_KEY = "fc5224d11277010e2fd758dd37ad3150";

export const Action = Object.freeze({
  //   LoadTrendingByName: "LoadTrendingByName",
  //   LoadTrendingByArtist: "LoadTrendingByArtist",
  //   LoadTrendingByGenre: "LoadTrendingByGenre",
  //   LoadLatest: "LoadLatest",
  LoadTopTracks: "LoadTopTracks",
  LoadSearch: "LoadSearch",
  LoadTopArtists: "LoadTopArtists",
  LoadTopTags: "LoadTopTags",
});

export function search(keyword) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyword}&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.trackmatches.track);
        dispatch(loadSearch(data.results.trackmatches.track));
      })
      .catch((e) => console.error(e));
  };
}

export function loadSearch(search) {
  console.log(search);
  return {
    type: Action.LoadSearch,
    payload: search,
  };
}

export function loadTopTracks() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.tracks.track);
        dispatch(loadTopAction(data.tracks.track));
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
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  return (dispatch) => {
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.artists.artist);
        dispatch(loadTopArtistsAction(data.artists.artist));
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

export function loadTopTags() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;

  return (dispatch) => {
    fetch(url, {
      "content-type": "application/json",
    })
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadTopTagsAction(data.tags.tag));
      })
      .catch((e) => console.error(e));
  };
}

export function loadTopTagsAction(topTags) {
  return {
    type: Action.LoadTopTags,
    payload: topTags,
  };
}

function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
