const express = require('express');

const cors = require("cors")
const chefsData = require('./data.json');
const app = express()

app.use(cors());
app.get('/', (req, res) =>{
    res.send(chefsData);
})

app.get('/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectChef = chefsData.find(n => n.id === id);
    res.send(selectChef)
})

app.listen(5000, () =>{
    console.log("server is running port 5000")
})