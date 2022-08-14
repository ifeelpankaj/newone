import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_JOBS_RESET } from "../../constants/jobConstant";
import { clearErrors, createJob } from "../../actions/jobAction";

const NewJob = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newJob);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [aboutjob, setAboutjob] = useState("");
  const [post, setPost] = useState("");
  const [impdatesfrom, setDate] = useState("");
  const [impdatesto, setDates] = useState("");
  const [agelimit, setAge] = useState("");
  const [fee, setFee] = useState("");
  const [procedure, setProcedure] = useState("");
  const [eligibliity, setEligible] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [vacancies, setVacency] = useState("");
  const [joblocation, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [postedby, setPostedby] = useState("");


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Job Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_JOBS_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createJobsSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("company", company);
    myForm.set("aboutjob", aboutjob);
    myForm.set("post", post);
    myForm.set("impdatesfrom", impdatesfrom);
    myForm.set("impdatesto", impdatesto);
    myForm.set("agelimit", agelimit);
    myForm.set("fee", fee);
    myForm.set("procedure", procedure);
    myForm.set("skills", skills);
    myForm.set("vacancies", vacancies);
    myForm.set("eligibliity", eligibliity);
    myForm.set("joblocation", joblocation);
    myForm.set("salary", salary);
    myForm.set("link", link);
    myForm.set("postedby", postedby);


    dispatch(createJob(myForm));

  };



  return (
    <Fragment>
      <MetaData title="New Paper" />
      <div className="dashboard">
        <SideBar />
        <div className="newJobContainer">
          <form
            className="createJobsForm"
            encType="multipart/form-data"
            onSubmit={createJobsSubmitHandler}
          >
            <h1>Create Job</h1>


            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Organization Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            
            
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="About Job"
                value={aboutjob}
                onChange={(e) => setAboutjob(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
           

            
            
            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Post"
                required
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </div>
            
            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Starting Dates"
                required
                value={impdatesfrom}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            
            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Closing Dates"
                required
                value={impdatesto}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            
            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Age Limit"
                required
                value={agelimit}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            
            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Fess"
                required
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
            
          

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Procedure"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            
            <div>
              <DescriptionIcon />
              <textarea
                type="string"
                placeholder="Eligibility"
                required
                value={eligibliity}
                onChange={(e) => setEligible(e.target.value)}
              ></textarea>
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <SpellcheckIcon />

              <input
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                cols="30"
                rows="1"
              />
            </div>

            <div>
              <SpellcheckIcon />

              <input
                placeholder="Vacancy"
                value={vacancies}
                onChange={(e) => setVacency(e.target.value)}
                cols="30"
                rows="1"
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Set Location"
                value={joblocation}
                onChange={(e) => setLocation(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Link"
                required
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="Author"
                required
                onChange={(e) => setPostedby(e.target.value)}
              />
            </div>

            <Button
              id="createJobBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewJob;
