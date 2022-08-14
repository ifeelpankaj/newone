import React from "react";
import { Link } from "react-router-dom";
import "./Papercard.css"
const PrepareCard = ({ paper }) => {
 
  return (
    <div className="PaperCard" >
      
      <h1>{paper.subject}</h1>
      <p className="year">{paper.year}</p>
      <div className="flex-container-1">
        <p className="paperInfo">Question Paper</p>  
      <Link to ={{ pathname:paper.solvedPaper}} target="_blank" className="paperLinks">Download</Link>
      <p className="paperInfo">Solved Paper</p>  
      <Link to ={{ pathname:paper.link}} target="_blank" className="paperLinks">Download</Link>

      </div>

      {/* <p className="author">by:{paper.author}</p> */}
    </div>
  );
};

export default PrepareCard;
