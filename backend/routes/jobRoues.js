const express = require("express");
const { createJobs, getJobDetails, getAdminJobs, updateJobs, deleteJobs, getAllJobs } = require("../controllers/jobUpdateController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/jobs").get(getAllJobs);

router
    .route("/admin/job/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"),createJobs);

router.
    route("/job/:id").get(getJobDetails);

router
  .route("/admin/jobs")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminJobs);

router
  .route("/admin/job/:id")
  .put( isAuthenticatedUser, authorizeRoles("admin"),updateJobs)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteJobs);

module.exports = router;
