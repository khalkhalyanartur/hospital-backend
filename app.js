const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser =require("cookie-parser");
const { PORT,  DB_URL } = require("./config");
const apiRoutes = require("./src/routes/index");
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Server start on PORT = ${PORT}`)
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

loadApp();