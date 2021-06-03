const express = require("express");
const app = express();
const dbConnect = require("./config/db");

var http = require('http');
var cors = require('cors');

require('dotenv').config();

app.use(cors({origin: 'http://localhost:3000'}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//<---Mongo DB CONNECT--->
dbConnect();
//<---Mongo DB CONNECT--->

app.get("/", (req, res) => {
  res.send("Information API");
});

//<---ROUTES--->

app.use("/api/kullanici", require("./routes/kullaniciRoute"));
app.use("/api/kategori", require("./routes/kategoriRoute"));
app.use("/api/hesap", require("./routes/hesapRoute"));
app.use("/api/gelir", require("./routes/gelirRoute"));
app.use("/api/gider", require("./routes/giderRoute"));



//<---ROUTES--->


app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
});

