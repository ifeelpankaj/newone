import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
// import "./Search.css";

const SearchPaper = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/papers/${keyword}`);
    } else {
      history.push("/paper");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Paper -- Acedemic Asset's" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search for Paper ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default SearchPaper;
  