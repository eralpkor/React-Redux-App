import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const getQuote = () => dispatch => {
  dispatch({
    type: FETCHING_QUOTE_START
  });
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(res => console.log(res.data));
};
