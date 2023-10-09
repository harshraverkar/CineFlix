const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost8012"
})
app.get('/', (re, res)=> {
    return res.json("From BAckend side");
})

app.listen(8081, ()=> {
    console.log("listening");
})