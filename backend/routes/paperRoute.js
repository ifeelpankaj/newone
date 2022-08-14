const express = require("express");
const { createPaper, getAdminPaper, updatePaper, deletePaper, getAllPaper } = require("../controllers/paperController");

const router = express.Router();

router
    .route("/admin/paper/new")
    .post(createPaper);

router.route("/admin/papers")
    .get(getAdminPaper);

router
    .route("/admin/paper/:id")
    .put(updatePaper)
    .delete(deletePaper);

router.route("/papers")
    .get(getAllPaper);

module.exports = router;