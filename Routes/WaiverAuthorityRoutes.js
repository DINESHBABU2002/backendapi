const express = require("express");
const router = express.Router();
const WaiverAuthorityContoller = require("./../Controller/WaiverAuthoritycontroller");
router
  .route("/")
  .get(WaiverAuthorityContoller.getAllWaiver)
  .post(WaiverAuthorityContoller.addWaiver);
module.exports = router;
