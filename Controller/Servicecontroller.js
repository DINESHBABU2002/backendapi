const fs = require("fs");
var service = JSON.parse(fs.readFileSync(`${__dirname}/Service.json`, "utf-8"));
exports.getAllService = async (req, res) => {
  var service = JSON.parse(
    fs.readFileSync(`${__dirname}/Service.json`, "utf-8")
  );
  console.log(service.len);
  query = req.query;
  if ("RequestedFrom" in query || "RequestedTo" in query) {
    if (query["RequestedFrom"] != "" && query["RequestedTo"] != "") {
      query["RequestedFrom"] = new Date(query["RequestedFrom"]);
      console.log("sdvdsd", query["RequestedFrom"]);
      query["RequestedTo"] = new Date(query["RequestedTo"]);
      service = service.filter((el) => {
        console.log(
          "sdvdsd",
          query["RequestedFrom"],
          el.RequestedDate,
          new Date(el.RequestedDate)
        );
        const waiveDate = new Date(el.RequestedDate);
        return (
          waiveDate >= query["RequestedFrom"] &&
          waiveDate <= query["RequestedTo"]
        );
      });
    } else if (query["RequestedFrom"] != "" && query["RequestedTo"] == "") {
      query["RequestedFrom"] = new Date(query["RequestedFrom"]);
      service = service.filter((el) => {
        const waiveDate = new Date(el.RequestedDate);
        return waiveDate >= query["RequestedFrom"];
      });
    } else if (query["RequestedFrom"] == "" && query["RequestedTo"] != "") {
      query["RequestedTo"] = new Date(query["RequestedTo"]);
      service = service.filter((el) => {
        const waiveDate = new Date(el.RequestedDate);
        return waiveDate <= query["RequestedTo"];
      });
    }
  }

  if ("Status" in query) {
    service = service.filter((el) => {
      return el.Status.toLowerCase().startsWith(query["Status"].toLowerCase());
    });
  }

  if ("ServiceRequested" in query) {
    service = service.filter((el) => {
      return el.Servicerequested.toLowerCase().startsWith(
        query["ServiceRequested"].toLowerCase()
      );
    });
  }

  if ("Customer" in query) {
    service = service.filter((el) => {
      return el.Customer.toLowerCase().startsWith(
        query["Customer"].toLowerCase()
      );
    });
  }

  if ("AWBNumber" in query) {
    service = service.filter((el) => {
      return el.AWBNumber.toLowerCase().startsWith(
        query["AWBNumber"].toLowerCase()
      );
    });
  }

  if ("ULDNumber" in query) {
    service = service.filter((el) => {
      return el.ULDNumber.toLowerCase().startsWith(
        query["ULDNumber"].toLowerCase()
      );
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      data: service,
    },
  });
};

exports.addServices = async (req, res) => {
  // console.log(req.body);
  service.push(req.body);
  var newData2 = JSON.stringify(service);
  fs.writeFile(`${__dirname}/Service.json`, newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.status(200).json({
    status: "success",
    data: {
      data: service,
    },
  });
};

exports.getOneService = async (req, res) => {
  let count = 0;
  let flag = 0;
  // console.log("fgdfg", req.params.id);
  for (i in service) {
    // console.log("fgd", service[i].id);
    if (service[i].id == req.params.id) {
      flag = 1;
      break;
    } else {
      count++;
    }
  }

  if (flag == 1) {
    res.status(200).json({
      status: "Success",
      data: service[count],
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.deleteServices = async (req, res) => {
  let count = 0;
  let flag = 0;
  // console.log("fgdfg", req.params.id);
  for (i in service) {
    // console.log("fgd", service[i].id);
    if (service[i].id == req.params.id) {
      flag = 1;
      break;
    } else {
      count++;
    }
  }

  // console.log(count);
  if (flag == 1) {
    service.splice(count, 1);
    var newData2 = JSON.stringify(service);
    fs.writeFile(`${__dirname}/Service.json`, newData2, (err) => {
      // Error checking
      if (err) throw err;
      // console.log(service);
    });
    res.status(200).json({
      status: "Success",
      data: service,
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.updateService = (req, res) => {
  // console.log(req.body);
  let count = 0;
  let flag = 0;
  // console.log("fgdfg", req.params.id);
  for (i in service) {
    // console.log("fgd", service[i].id);
    if (service[i].id == req.params.id) {
      flag = 1;
      break;
    } else {
      count++;
    }
  }

  // console.log(count);
  if (flag == 1) {
    // service.splice(count, 1);
    service[count] = req.body;
    var newData2 = JSON.stringify(service);
    fs.writeFile(`${__dirname}/Service.json`, newData2, (err) => {
      // Error checking
      if (err) throw err;
      // console.log(service);
    });
    res.status(200).json({
      status: "Success",
      data: service,
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};
