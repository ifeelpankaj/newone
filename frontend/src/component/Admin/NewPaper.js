import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
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
import { NEW_PAPER_RESET } from "../../constants/paperConstant";
import { createPaper, clearErrors } from "../../actions/paperAction";

const NewPaper = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newPaper);

  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [solvedPaper, setSolvedPaper] = useState("");
  const [link, setLink] = useState("");
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
      alert.success("Paper Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PAPER_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createPaperSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("year", year);
    myForm.set("subject", subject);
    myForm.set("solvedPaper", solvedPaper);
    myForm.set("link", link);
    myForm.set("author", author);

    dispatch(createPaper(myForm));

  };



  return (
    <Fragment>
      <MetaData title="New Paper" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createPaperSubmitHandler}
          >
            <h1>Create Paper</h1>




            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setSubject(e.target.value)}>
                <option value="">Choose Subject</option>
                {subjects.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <SpellcheckIcon />
              <input
                type="string"
                placeholder="Paper year"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Solved Paper"
                value={solvedPaper}
                onChange={(e) => setSolvedPaper(e.target.value)}
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
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>

            <Button
              id="createPaperBtn"
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

export default NewPaper;
