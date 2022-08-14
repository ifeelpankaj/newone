import React, { Fragment, useEffect, useState } from "react";
import "./JobUpdate.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import JobCard from "./JobCard.js";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { getJobs, clearErrors } from "../../actions/jobAction";



const JobUpdate = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [title] = useState("");
  const [company] = useState("");



  const {
    jobs,
    loading,
    error,
    jobsCount,
    resultPerPage,
    filteredJobsCount,
  } = useSelector((state) => state.jobs);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  let count = filteredJobsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getJobs(keyword, currentPage, title, company,error));
  }, [dispatch,error,alert,keyword, currentPage, title, company]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment >
          <MetaData title="Hiring -- Acedemic Asset's" />


          <h2 className="productsHeading">Jobs</h2>

          <div className="downSideImage">

            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Capgemini_nsnsmt.png" alt=" Capgemine. logo" />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Google_ctmhyv.png" alt="IBM.logo" />
           
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Amazon_twpett.png" alt="Amazon.logo"  />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Hexaware_Technologies-Logo.wine-removebg-preview_utcljf.png" alt="Hexaware.logo"  />

            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Microsoft_India-Logo.wine-removebg-preview_l7ahy3.png" alt="Microsoft.logo"  />

           
          </div>
          <div className="jobs">
            {jobs &&
              jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>




          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={jobsCount}
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
          <div className="downSideImage">
          <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Accenture_ytzkgg.png" alt="Accenture.logo"  />
           
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Cognizant_fcca4g.png" alt="Cognizant.logo"  />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Deloitte-Logo.wine-removebg-preview_plspzi.png" alt="Deloitte.logo"  />
            
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/infosys_pcywwb.png" alt=" Infosys. logo" />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/HCL_Technologies-Logo.wine-removebg-preview_tp1n4o.png" alt=" HCL. logo" />
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default JobUpdate;
