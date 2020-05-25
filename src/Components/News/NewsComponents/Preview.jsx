import React from "react";

const Preview = (news) => {
  let result = news.news;
  return (
    <div>
      <p>
        <a href={result.url} rel="noopener noreferrer" target="_blank">
          <strong>{result.title}</strong>
        </a>
      </p>
      <p>{result.description}</p>
    </div>
  );
};

export default Preview;
