const express = require("express");
const router = express.Router();
const ServiceContoller = require("../Controller/Servicecontroller");
router
  .route("/")
  .get(ServiceContoller.getAllService)
  .post(ServiceContoller.addServices);

module.exports = router;
