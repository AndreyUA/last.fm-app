import axios from "axios";

import { GET_ARTIST, GET_TOP, LOADING_TRIGGER, SERCH_TRACK } from "./types";

export const getTop = () => async (dispatch) => {
  dispatch({
    type: LOADING_TRIGGER,
  });

  try {
    const response = await axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a7667689fed02d1a1b0379974aa95536&format=json"
    );

    dispatch({
      type: GET_TOP,
      payload: response.data.tracks.track,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = (artistName) => async (dispatch) => {
  dispatch({
    type: LOADING_TRIGGER,
  });

  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=a7667689fed02d1a1b0379974aa95536&format=json`
    );

    dispatch({
      type: GET_ARTIST,
      payload: response.data.artist,
    });
  } catch (error) {
    console.log(error);
  }
};

export const serchTrack = (track) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=a7667689fed02d1a1b0379974aa95536&format=json`
    );

    dispatch({
      type: SERCH_TRACK,
      payload: response.data.results.trackmatches.track,
    });
  } catch (error) {
    console.log(error);
  }
};
