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
import { clearErrors, deleteJobs, getAdminJobs } from "../../actions/jobAction";
import { DELETE_JOBS_RESET } from "../../constants/jobConstant";


const JobList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, jobs } = useSelector((state) => state.jobs);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.job
  );

  const deleteJobHandler = (id) => {
    dispatch(deleteJobs(id));
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
      alert.success("Content Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_JOBS_RESET });
    }

    dispatch(getAdminJobs());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Content ID", minWidth: 200, flex: 0.5 },

    {
      field: "title",
      headerName: "Title",
      minWidth: 350,
      flex: 1,
    },
    
    {
        field: "company",
        headerName: "Company",
        type: "string",
        minWidth: 150,
        flex: 0.3,
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
            <Link to={`/admin/job/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteJobHandler(params.getValue(params.id, "id"))
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

  jobs &&
  jobs.forEach((job) => {
      rows.push({
        id: job._id,
        title: job.title,
        company: job.company,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL JOBS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL JOBS</h1>

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

export default JobList;
