const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    // res.send("Welcome from node server!");
});

app.post("/", (req, res)=>{

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;

    res.send("The result is:" + result );
});

app.listen(3000, function(){
    console.log("Server Started");
});