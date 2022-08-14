import React, { useState, useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./PreprationZon.css";
import { getContent, clearErrors } from "../../actions/contentAction";
import PrepareCard from "./Preparecard";
import Loader from "../layout/Loader/Loader";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";



// const subjects = [
//   // 8th Sem
//   "Information  Cyber Security",
//   "Wireless Sensor Network",
//   "Cloud Computer & Clustring",
//   "Distributed Operating System",
//   // 7th Sem
//   "Internet Programming",
//   "Data Warehouse & Mining",
//   "Language Processor",
//   // 6th Sem
//   "Artificial Intelligence",
//   "Design Pattern",
//   "Computer Network",
//   "Software Engineering & Prroject Management",
//   // 5th Sem
//   "Data Communication",
//   "Object Oriented Programming",
//   "Database Management System",
//   "Computer Graphics",
//   "Design & Analysis of Algorithm",
//   //4th Sem
//   "Discrete Math and Graph Theory",
//   "Data Structure & Program Design",
//   "Operating System",
//   "Theotitical Foundation of Computer Science",
//   "System Programming",
//   // 3rd Sem 
//   "Applied MAths",
//   "Digital Circuits & Fundamental of Micro Processor",
//   "Computer Architecture & Organization ",
//   "Ethics In IT",
//   //General Topics 
//   "Introduction to Programming",
//   "Data Structure & Algorithm",
//   " C & C++",
//   "Java Programming",
// ];


const PreprationZone = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);





  let {
    contents,
    loading,
    error,
    contentsCount,
    resultPerPage,
    filteredContentsCount,
  } = useSelector((state) => state.contents);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  let count = filteredContentsCount
    ;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getContent(keyword, currentPage));
  }, [dispatch, keyword, currentPage, alert, error]);


  return (





    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Prepare -- Acedemic Asset's" />
          <h2 className="contentsHeading">Contents</h2>
          <div className="body">
          <Link to="/searchContent">
            <div className="a">Search</div>
          </Link>
          </div>
          
          <div className="content">
            {contents &&
              contents.map((content) => (
                <PrepareCard key={content._id} content={content} />
              ))}
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={contentsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )
      }
    </Fragment >

  );

};

export default PreprationZone;
