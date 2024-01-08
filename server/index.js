require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const clientRouter = require("./routes/client");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/", clientRouter);


mongoose.connect(process.env.REACT_APP_MONGODB_URI, { dbName: "NetClone" });


app.listen(process.env.PORT, () => { console.log(`Server running on port 3000`) });
