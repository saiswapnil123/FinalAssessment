const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./Database/Database');
const routes = require('./Routes/Routes');
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000,()=>{
    console.log("Running on Port 3000.....");
})
db.connect(()=>{
    console.log("Database Connected....");
})


