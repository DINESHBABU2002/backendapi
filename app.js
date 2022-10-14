const express = require("express");
const app = express();
app.use(express.json());
const ServiceRoutes = require("./Routes/ServiceRoutes");
const WaiverAuthorityRoutes = require("./Routes/WaiverAuthorityRoutes");
app.use("/api/v1/ListOfServices", ServiceRoutes);
app.use("/api/v1/WaiverAuthority", WaiverAuthorityRoutes);
module.exports = app;
