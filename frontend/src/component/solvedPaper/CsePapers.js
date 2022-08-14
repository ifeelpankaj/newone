import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPapers } from "../../actions/paperAction";
import PaperCard from "../solvedPaper/PaperCard.js";
import { Link } from "react-router-dom";
import "./csepapers.css";



// import "./PaperSection.css";




const CsePapers = ({match}) => {


  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  



  const {
    papers,
    loading,
    error,
    papersCount,
    resultPerPage,
    filteredPapersCount,
  } = useSelector((state) => state.papers);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

 
  let count = filteredPapersCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getPapers(keyword, currentPage));
  }, [dispatch, keyword, currentPage,alert, error]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Papers -- Acedemic Asset's" />
          <h2 className="productsHeading">Paper</h2>

          <div className="body">
          <Link to="/searchPaper">
            <div className="a">Search</div>
          </Link>
          </div>

          <div className="products">
          {papers &&
              papers.map((paper) => (
                <PaperCard key={paper._id} paper={paper} />
              ))}
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={papersCount}
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
      )}
    </Fragment>

  );
};

export default CsePapers;