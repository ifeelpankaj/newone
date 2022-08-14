import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { deletePaper, clearErrors, getPapers, } from "../../actions/paperAction";
import { DELETE_PAPER_RESET } from "../../constants/paperConstant";


const PaperList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, papers } = useSelector((state) => state.papers);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.paper
  );

  const deletePaperHandler = (id) => {
    dispatch(deletePaper(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Paper Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_PAPER_RESET });
    }

    dispatch(getPapers());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Paper ID", minWidth: 200, flex: 0.5 },

    {
      field: "subject",
      headerName: "Subject",
      minWidth: 350,
      flex: 1,
    },
    
    {
        field: "year",
        headerName: "Year",
        type: "string",
        minWidth: 5,
        flex: 0.4,
      },

 

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/paper/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deletePaperHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  papers &&
  papers.forEach((item) => {
      rows.push({
        id: item._id,
        subject: item.subject,
        year: item.year,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PAPER - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PAPER</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PaperList;
