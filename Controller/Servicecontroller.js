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
