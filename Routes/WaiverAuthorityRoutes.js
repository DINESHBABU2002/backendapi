const express = require("express");
const router = express.Router();
const WaiverAuthorityContoller = require("./../Controller/WaiverAuthoritycontroller");
router
  .route("/")
  .get(WaiverAuthorityContoller.getAllWaiver)
  .post(WaiverAuthorityContoller.addWaiver);

router
  .route("/:id")
  .put(WaiverAuthorityContoller.editWaiver)
  .delete(WaiverAuthorityContoller.deleteWaiver);
module.exports = router;
