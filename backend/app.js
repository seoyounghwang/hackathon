const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const port = 8080;

app.get("/",(req,res)=>{
    res.send("hey what's up from express");
})
app.listen(8080);