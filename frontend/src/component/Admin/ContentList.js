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
import { deleteContent, getAdminContent ,clearErrors} from "../../actions/contentAction";
import { DELETE_CONTENT_RESET } from "../../constants/prepareConstant";


const ContentList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, contents } = useSelector((state) => state.contents);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.content
  );

  const deleteContentHandler = (id) => {
    dispatch(deleteContent(id));
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
      dispatch({ type: DELETE_CONTENT_RESET });
    }

    dispatch(getAdminContent());
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
        field: "subject",
        headerName: "Subject",
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
            <Link to={`/admin/content/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteContentHandler(params.getValue(params.id, "id"))
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

  contents &&
  contents.forEach((content) => {
      rows.push({
        id: content._id,
        title: content.title,
        subject: content.subject,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL CONTENT - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL CONTENTS</h1>

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

export default ContentList;
