import { MAKE_REQUEST, REQUEST_FAIL, REQUEST_SUCCESS } from "./ContentTypes";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
}

export const requestSuccess = (list) => {
  return {
    type: REQUEST_SUCCESS,
    list,
  };
};

export const requestFail = (error) => {
  return {
    type: REQUEST_FAIL,
    error,
  };
};

export const fetchNews = (keyword, source) => {
  const keywordPart = keyword ? `q=${keyword}&` : "";
  const sourcePart = source ? `sources=${source}&` : "";
  const queryPart = (keywordPart || sourcePart)?`${keywordPart}${sourcePart}`:`language=en&`
    return (dispatch) => {
      dispatch(makeRequest());
      fetch(
        `http://newsapi.org/v2/top-headlines?${queryPart}sortBy=publishedAt&apiKey=53a074c5b1bd43e0b20288faebec78ac`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "error") {
            dispatch(requestFail());
          } else {
            dispatch(requestSuccess(response.articles));
          }
        });
    };
  };