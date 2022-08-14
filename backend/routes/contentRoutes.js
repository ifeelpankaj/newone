const express = require("express");
const { createContent, deleteContent, updateContent, getAllContent, getAdminContent, getContentDetails } = require("../controllers/contentController");



const router = express.Router();

router.route("/contents")
    .get(getAllContent);

    router
    .route("/admin/content/new")
    .post( createContent);
 router.
    route("/content/:id").get(getContentDetails);

router.route("/content/:id")
    .delete(deleteContent)
    .put(updateContent)

router
    .route("/admin/contents")
    .get(getAdminContent);

router
    .route("/admin/content/:id")
    .put( updateContent)
    .delete( deleteContent);


module.exports = router;


