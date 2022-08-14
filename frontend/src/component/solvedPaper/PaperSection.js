import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PaperSection.css";




const PaperSection = () => {
    return (
        <Fragment>
       <h2 className="paperHeading">Branches</h2>
        <div className="body2">
            <div class="container d-flex justify-content-center">

              <ul class="list-group mt-5 text-white">
                <li class="list-group-item d-flex justify-content-between align-content-center">
                  <Link to="/CSEPaperS" style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" alt="Folder"  width="40" />

                      <div class="ml-2">
                        <h6 class="mb-0">COMPUTER SCIENCE AND ENGINEERING </h6>
                        <div class="about">
                          <span>All papers for CSE student</span>
                         
                        </div>
                      </div>
                    </div>
                  </Link>

                </li>

                <li class="list-group-item d-flex justify-content-between align-content-center">
                  <Link to="/prepare" style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" alt="Folder" width="40" />
                      <div class="ml-2">
                        <h6 class="mb-0">MECHINICAL ENGINEERING</h6>
                        <div class="about">
                          <span>All papers for ME sudent</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                </li>

                <li class="list-group-item d-flex justify-content-between align-content-center">
                  <Link to="/papers" style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" alt="Folder" width="40" />
                      <div class="ml-2">
                        <h6 class="mb-0">CIVIL ENGINEERING</h6>
                        <div class="about">
                          <span>All papers for CE sudent</span>
                        </div>
                      </div>
                    </div>
                  </Link>


                </li>

                <li class="list-group-item d-flex justify-content-between align-content-center">
                <Link to="#" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <div class="d-flex flex-row">
                    <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" alt="Folder" width="40" />
                    <div class="ml-2">
                      <h6 class="mb-0">ELECTRICAL ENGINEERING</h6>
                      <div class="about">
                        <span>All papers for EE sudent</span>
                        <span> </span>
                      </div>
                    </div>
                  </div>
                  </Link> 

                </li>


              </ul>

            </div>
          </div>

          <div className="body3">
          <p className="notice">Papers are avaliable only for CSE brances <br/> Sorry for inconvenience!!
          </p>
          </div>
          </Fragment>
    );
};

export default PaperSection;