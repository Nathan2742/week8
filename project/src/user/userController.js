const User = require ("./userModel");
const userRouter = require("./userRoutes");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        const token = await newUser.function1();
        await newUser.save()
        res.status(201).send({ user: newUser.name, token})
    } catch (error) {
        res.status(500).send({ error: "oops"});
    };
};

exports.login =async (req, res) => {
    const {email, password } = req.body;

    try{
        const user = await User.findByCred(req.body.email, req.body.password);
        const token = user.function1();
        res.status(200).send({user: user.name, token});
    } catch (error){
        res.status(400).send ({error: error.message});
    };
};