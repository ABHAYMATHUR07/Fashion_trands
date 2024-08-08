const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const port =process.env.PORT || 6000 || 7000;
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const rootroute = require("./routes/rootroute");
app.use(morgan("dev"));
const Productroute = require('./routes/productroute');
connectDB();

// app.get("/" ,(req , res) => {
//     res.send("api is working")
// });


app.get("/", rootroute);
// app.use("/server", rootroute);

app.use("/fashiontrends", Productroute);

app.listen(port,()=>{
    console.log(`Server is running on http://127.0.0.1:${port}`.bgCyan.blue);
})