const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

//middleware
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Log the configuration

//route Imoprt
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

//route
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
