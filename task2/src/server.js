const express = require ("express");
require("./db/connection");
const userRouter = require("./users/userRoutes");


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);
app.get("/", (req, res) => {
    res.status(200).send({message: "message"})
})


app.listen(port,  () => {
    console.log(`Now listening on port ${port}`);
});

