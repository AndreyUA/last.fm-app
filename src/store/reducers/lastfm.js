import {
  GET_ARTIST,
  GET_TOP,
  LOADING_TRIGGER,
  SERCH_TRACK,
} from "../action/types";

const initialState = {
  top: [],
  artist: {},
  serchResult: [],
  loading: true,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP:
      return {
        ...state,
        top: payload,
        loading: false,
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: payload,
        loading: false,
      };
    case SERCH_TRACK:
      return {
        ...state,
        serchResult: payload,
        loading: false,
      };
    case LOADING_TRIGGER: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
