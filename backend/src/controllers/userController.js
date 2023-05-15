const User = require('../../models/userModel');
module.exports = {
    registerUser: (req,res)=>{
        const newUserData = {
            name:req.body.name,
            password:req.body.password,
            image: req.file.filename,
            address:req.body.address
        }
        const newUser = new User(newUserData);
        newUser.save().then(()=>res.json('User added'))
        .catch(err=>res.status(400).json('Error:'+ err))
        // res.send(req.body)
    },
    getUsers : async(req,res)=>{
        const users = await User.find();
        // console.log(users)
        res.json(users);
    }
}