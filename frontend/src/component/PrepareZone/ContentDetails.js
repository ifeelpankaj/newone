import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

import "./ContentDetails.css";
import { getContentDetails, clearErrors } from "../../actions/contentAction";
import { Link } from "react-router-dom";

const ContentDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { content, loading, error } = useSelector(
    (state) => state.contentDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getContentDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${content.title} -- Acedemic Asset'ss`} />
          <div className="Contents">
            <div className="c-1">
              <h2>{content.title}</h2>
            </div>

           <div className="c-2">
           {content.subject}
           </div>

            <div className="c-3-1">
                <p className="c-1-1"> Info</p>
                <div className="c-3">{content.contentInfo}</div>
            </div>
            
            <Link  to ={{ pathname:content.links}} target="_blank" className="c-4-1"> Read More</Link>

            <div className="c-4">
                <p className="c-1-1"> by</p>{content.author}
            </div>
            </div>
           
        </Fragment>
      )}
    </Fragment>
  );
};

export default ContentDetails;
