require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser =require('cookie-parser');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      userNewUrlParser: true,
      userUnifiedTopology: true
    }
      )
    app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start()