const express = require("express");
const app = express();
const port = process.env.PORT || 5000

// app.use(express.static("public"));

// app.listen(aPortNumber, aCallBackFunction);

app.use(express.json());


const myFunc = (req, res, next) => {
    console.log("logged first");
    req.body.first = "first";
    next();
};


const myFunc2 = (req, res, next) => {
    console.log("logged second");
    req.body.second = "second";
    next();
};







app.post("/", [myFunc, myFunc2], (req, res) => {
    console.log(req.body);
    res.send("Hi my name is Nathan");
});

// http://localhost5000

app.get("/Hello", (req, res) => {
    res.send({name: "Nathan"})
});

// http://localhost5000/Hello

app.get("/info", (req, res) => {
    console.log(req.query.name);

    res.send({name: "Nathan", age:"22"})
});

// http://localhost5000/info

app.get("/info2", (req, res) => {
    res.send("Welcome !!!")
});

// http://localhost5000/info2


app.get("/user/:id", (req, res) => {
    console.log(req.params.id)

    res.send({id: req.params.id})
});

app.get("/person/:id", (req, res) => {
    console.log(req.params.id)
    res.send({id: req.params.id})
});

app.post("/home", (req, res) => {
    console.log(req.body)
    res.status(201).send({ message: "Welcome" })
}) ;







app.listen(5000, () => {
    console.log(`listening on port ${port}`)
} );

