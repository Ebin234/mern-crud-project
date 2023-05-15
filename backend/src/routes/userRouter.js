const {Router} = require('express');
const router = Router();
const {registerUser,getUsers} = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        // console.log('file',req.body.name)
        cb(null,req.body.name + path.extname(file.originalname));
    }
});

const fileFilter = (req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

let upload = multer({storage,fileFilter})


router.post('/register',upload.single('image'), registerUser);
router.get('/users', getUsers);

module.exports = router; 