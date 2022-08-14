import React, { Fragment, useEffect, useState } from "react";
import "./newContent.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { createContent, clearErrors } from "../../actions/contentAction";
import { NEW_CONTENT_RESET } from "../../constants/prepareConstant";

const NewContent = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newContent);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [contentInfo, setDescription] = useState("");
  const [links, setLinks] = useState("");
  const [author, setauthor] = useState("");



  const subjects = [
"Applied Mathematics",
"Engineering Physics",
"Engineering Physics",
"Engineering Chemistry",
"Engineering Chemistry",
"Engineering Graphics ",
"Advanced Physics ",
"Materials Chemistry ",
"Materials Chemistry ",
"Engineering Mechanics ",
"Engineering Mechanics ",
"Ethical Sciences ",
"Advance C Programming and Logic Design",
"Digital Circuits & Fundamental of Microprocessor",
"Computer Architecture and Organization",
"Social Science and Ethics in IT",
"Discrete Maths and Graph Theory",
"Data Structure and Program Design",
"perating Systems",
"Theoritical Foundations of Computer Science",
"System Programming",
"Data Communication",
"Object Oriented Programming",
"Object Oriented Programming Lab",
"Database Management System",
"Computer Graphics and GUI",
"Design and Analysis of Algorithms",
"Artificial Intelligence",
"Design Patterns",
"Software Engineering and Project Management",
"Data Warehousing and Mining",
"Language Processor",
"ELECTIVE-II",
"ELECTIVE-I",
"Distributed Operating System",
"Information and Cyber Security",

  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Content Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_CONTENT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createContentSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("subject", subject);
    myForm.set("contentInfo", contentInfo);
    myForm.set("links", links);
    myForm.set("author", author);

    dispatch(createContent(myForm));

  };



  return (
    <Fragment>
      <MetaData title="Create Content" />
      <div className="dashboard">
        <SideBar />
        <div className="newContentContainer">
          <form
            className="createContentForm"
            encType="multipart/form-data"
            onSubmit={createContentSubmitHandler}
          >
            <h1>Create Content</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Content Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>



            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setSubject(e.target.value)}>
                <option value="">Choose Category</option>
                {subjects.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>


            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Content Description"
                value={contentInfo}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>



            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Links"
                required
                onChange={(e) => setLinks(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="Author"
                required
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>

            <Button
              id="createContentBtn"
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

export default NewContent;
