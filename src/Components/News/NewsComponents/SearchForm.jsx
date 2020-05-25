import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  updateKeyword,
  clearKeyword,
  updateSource,
  clearSource,
  makeRequest,
  requestSuccess,
  requestFail,
  fetchNews,
} from "../../../Redux/News";


const SearchForm = (props) => {
  const keyword = useSelector((state) => state.keyword);
  const source = useSelector((state) => state.source);

  const dispatch = useDispatch();

  return (
    <form>
      <div>
        <label htmlFor="keyword">Type your keyword here: </label>
        <input
          name="keyword"
          placeholder="ex: Coronavirus"
          value={keyword}
          onChange={(e) => {
            let value = e.target.value.toLowerCase().replace(/\W/gi, "");
            dispatch(updateKeyword(value));
          }}
        />
      </div>
      <div>
        <label htmlFor="source">
          Choose your favorite source: {props.source}{" "}
        </label>
        <select
          onChange={(e) => {
            dispatch(updateSource(e.target.value));
          }}
        >

          <option selected disabled value="">--Choose one--</option>
          <option value="abc-news">ABC News</option>
          <option value="abc-news-au">ABC News (AU)</option>
          <option value="aftenposten">Aftenposten</option>
        </select>
      </div>
      <div>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchNews(keyword, source));
          }}
          value="This is the future launching btn for search"
        />
        <button
          type="button"
          onClick={() => {
            dispatch(clearKeyword());
            dispatch(clearSource());
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );


}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
    source: state.source,
    loading: state.content.loading,
    list: state.content.list,
    error: state.content.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateKeyword: (value) => dispatch(updateKeyword(value)),
    clearKeyword: () => dispatch(clearKeyword()),
    updateSource: () => dispatch(updateSource()),
    clearSource: () => dispatch(clearSource()),
    makeRequest: () => dispatch(makeRequest()),
    requestFail: () => dispatch(requestFail()),
    requestSuccess: () => dispatch(requestSuccess()),
    fetchNews: () => dispatch(fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
