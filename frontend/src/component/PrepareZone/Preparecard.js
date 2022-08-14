import React from "react";
import { Link } from "react-router-dom";

const PrepareCard = ({ content }) => {
 
  return (
    <Link className="contentCard" to={`/content/${content._id}`}>
 
      
      <h1>{content.title}</h1>
      <p>{content.subject}</p>
    
     
   
    </Link>
  );
};

export default PrepareCard;
