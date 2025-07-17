const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 3000;

const app = express();

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // if using cookies or tokens
}));

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))

app.get('/',(req,res)=>{
     res.json({msg : "this is an example"});
})

//routes
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))


app.listen(PORT ,()=>{
    console.log("Server is running  on PORT 3000");
})



// ************** COnnect MongoDb ******************

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
    useCreateIndex : true,
    useFindAndModify : false ,
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(( ) => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log(err)
});