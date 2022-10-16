const fs = require("fs");
let waiver = JSON.parse(
  fs.readFileSync(`${__dirname}/waiverAuthority.json`, "utf-8")
);
exports.getAllWaiver = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      data: waiver,
    },
  });
};
exports.addWaiver = async (req, res) => {
  console.log(req.body);
  waiver.push(req.body);
  var newData2 = JSON.stringify(waiver);
  fs.writeFile(`${__dirname}/waiverAuthority.json`, newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.status(200).json({
    status: "success",
    data: {
      data: waiver,
    },
  });
};

exports.editWaiver = async (req, res) => {
  console.log(req.body);
  waiver[req.params.id] = req.body;

  var newData2 = JSON.stringify(waiver);
  fs.writeFile(`${__dirname}/waiverAuthority.json`, newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.status(200).json({
    status: "success",
    data: {
      data: waiver,
    },
  });
};

exports.deleteWaiver = async (req, res) => {
  console.log(req.params.id);

  waiver.splice(req.params.id, 1);
  var newData2 = JSON.stringify(waiver);
  fs.writeFile(`${__dirname}/waiverAuthority.json`, newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.status(200).json({
    status: "success",
    data: {
      data: waiver,
    },
  });
};
