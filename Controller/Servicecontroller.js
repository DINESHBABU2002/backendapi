const fs = require("fs");
const service = JSON.parse(
  fs.readFileSync(`${__dirname}/Service.json`, "utf-8")
);
exports.getAllService = async (req, res) => {
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
