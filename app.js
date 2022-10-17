const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

const ServiceRoutes = require("./Routes/ServiceRoutes");
const WaiverAuthorityRoutes = require("./Routes/WaiverAuthorityRoutes");
app.use("/api/v1/ListOfServices", ServiceRoutes);
app.use("/api/v1/WaiverAuthority", WaiverAuthorityRoutes);
module.exports = app;
