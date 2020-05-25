import React from "react";
import { useSelector } from "react-redux";
import ShortID from "shortid"

import Preview from "./NewsComponents/Preview";
import SearchForm from "./NewsComponents/SearchForm";

const NewsContainer = () => {
  const list = useSelector((state) => state.content.list);
  const error = useSelector((state) => state.content.error);

  return (
    <>
      <p>Project 2: The news API</p>
      <SearchForm />
      <div>
        {list &&
          list.map((el) => {
            return <Preview key={ShortID.generate()}news={el} />;
          })}
        <p>{(list && list.length === 0) && "No result"}</p>
        <p>{error && error}</p>
      </div>
    </>
  );
};

export default NewsContainer;
