const PORT = process.env.PORT;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// Express settings
app.set("view engine", "ejs");

//Static resource rooting
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "public")));

// Dynamic resource rooting
app.use("/", require("./routes/index.js"));

//Execute web application
app.listen(PORT, () => {
  console.log(`Application Listening at ${PORT}`);
});
