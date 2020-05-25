import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import KeywordReducer from "./Keyword/KeywordReducer";
import SourceReducer from "./Source/SourceReducer";
import ContentReducer from "./Content/ContentReducer";

const rootReducer = combineReducers({
  keyword: KeywordReducer,
  source: SourceReducer,
  content: ContentReducer,
});


const NewsStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default NewsStore;
