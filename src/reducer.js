import { Action } from "./actions";

export const initialState = {
  topTracks: [],
  topArtists: [],
  topTags: [],
  latests: [],
  search: [],
  trackInfo: [],
  favorites: {},
  loadingSearch: true,
  loadingTop: true,
  loadingFave: true,
  loadingTrack: true,
  // loadingSearch: true,
};

function reducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case Action.LoadSearch:
      return {
        ...state,
        search: action.payload,
        loadingSearch: false,
      };
    case Action.LoadTopTracks:
      return {
        ...state,
        topTracks: action.payload,
        loadingTop: false,
      };

    case Action.LoadTopArtists:
      return {
        ...state,
        topArtists: action.payload,
      };

    case Action.LoadTopTags:
      return {
        ...state,
        topTags: action.payload,
      };

    case Action.GetTrackInfo:
      return {
        ...state,
        trackInfo: action.payload,
      };

    case Action.FinishAddingFavorites:
      return {
        ...state,
        favorites: action.payload,
        loadingFave: false,
      };

    case Action.RemoveFave:
      console.log(state.favorites.results);
      return {
        ...state,
        favorites: state.favorites.results.filter((f) => f !== action.id),
      };

    default:
      return state;
  }
}

export default reducer;
