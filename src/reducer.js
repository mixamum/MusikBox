import { Action } from "./actions";

export const initialState = {
  topTracks: [],
  topArtists: [],
  latests: [],
  search: [],
  // loadingSearch: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.LoadSearch:
      return {
        ...state,
        search: action.payload,
        // loadingSearch: false,
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

    default:
      return state;
  }
}

export default reducer;
