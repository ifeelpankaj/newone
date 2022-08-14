import React from "react";
import { Link } from "react-router-dom";

import "./JobCard.css";



const JobCard = ({ job }) => {
 
  return (
    <Link className="jobCard-1" to={`/job/${job._id}`}>
    <div className="jobCard" >
      
      <h1 className="title">{job.title}</h1>
    
      <div>
        <p className="company">{job.company}</p>
      </div>
     
     
    </div>
  </Link>
  );
};

export default JobCard;
