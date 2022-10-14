var app = require("./app");
// var app = require("http");
// app.createServer().listen(8080, () => {
//   console.log("App running on port 3005");
// });
const server = app.listen(3005, () => {
  console.log("App running on port 3005");
});
