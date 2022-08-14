import React, { Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import "./SearchContent.css";

const SearchContent = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/contents/${keyword}`);
    } else {
      history.push("/content");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Content -- Acedemic Asset's" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Content ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
 



     

    </Fragment>
  );
};

export default SearchContent;
