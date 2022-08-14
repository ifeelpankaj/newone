import React, { Fragment, useEffect } from "react";
import PaperCard from "../solvedPaper/PaperCard";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { getContent } from "../../actions/contentAction";
import PrepareCard from "../PrepareZone/Preparecard";
import { getPapers } from "../../actions/paperAction";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const { contents } = useSelector((state) => state.contents);
  const { papers } = useSelector((state) => state.papers);





  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    dispatch(getContent());
    dispatch(getPapers());

  }, [dispatch, error, alert]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Acedemic Asset's" />

          <div className="banner">
            {/* <p>Welcome </p> */}
            <h1> <br></br></h1>
            <h1> Plan 💯%</h1>
            <h1> Prepare 💯%</h1>
            <h1>Preform 💯%</h1>
            <div className="banner1-1">

            </div>
          </div  >



          <h2 className="homeHeading">Featured Books</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <h2 className="homeHeading">Featured Papers</h2>
          <div className="products">
            {papers &&
              papers.map((paper) => (
                <PaperCard key={paper._id} paper={paper} />
              ))}
          </div>

          <h2 className="homeHeading">Featured Contents</h2>

          <div className="content" >
            {contents &&
              contents.map((content) => (
                <PrepareCard key={content._id} content={content} />
              ))}
          </div>
          <h2 className="homeHeading">Hiring News About</h2>

          <div className="downSideImage">

            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Capgemini_nsnsmt.png" alt=" Capgemine. logo" />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Google_ctmhyv.png" alt="IBM.logo" />

            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Amazon_twpett.png" alt="Amazon.logo" />
            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Hexaware_Technologies-Logo.wine-removebg-preview_utcljf.png" alt="Hexaware.logo" />

            <img src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Microsoft_India-Logo.wine-removebg-preview_l7ahy3.png" alt="Microsoft.logo" />


          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
