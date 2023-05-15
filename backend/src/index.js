const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const upload = require('multer');
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use('/api',userRouter);

mongoose.connect('mongodb://localhost:27017/leeyet')
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err));

app.listen(PORT,()=> console.log(`Server is running on port ${PORT} `))