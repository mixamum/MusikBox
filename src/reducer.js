import { Action } from "./actions";

export const initialState = {
  topTracks: [],
  topArtists: [],
  topSongsByArtist: [],
  topTags: [],
  latests: [],
  search: [],
  trackInfo: [],
  favorites: {},
  isWaiting: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.LoadSearch:
      return {
        ...state,
        search: action.payload,
      };
    case Action.LoadTopTracks:
      return {
        ...state,
        topTracks: action.payload,
      };

    case Action.LoadTopArtists:
      return {
        ...state,
        topArtists: action.payload,
      };

    // case Action.LoadTopTags:
    //   return {
    //     ...state,
    //     topTags: action.payload,
    //   };

    case Action.GetTrackInfo:
      return {
        ...state,
        trackInfo: action.payload,
      };

    case Action.FinishAddingFavorites:
      return {
        ...state,
        favorites: action.payload,
      };

    case Action.LoadTrendingByArtist:
      console.log(action.payload);
      return {
        ...state,
        topSongsByArtist: action.payload,
      };

    case Action.StartedWaiting:
      return {
        ...state,
        isWaiting: true,
      };

    case Action.StoppedWaiting:
      return {
        ...state,
        isWaiting: false,
      };

    case Action.RemoveFave:
      return {
        ...state,
        favorites: state.favorites.results.filter((f) => f !== action.id),
      };

    default:
      return state;
  }
}

export default reducer;
