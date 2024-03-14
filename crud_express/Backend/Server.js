const express =require('express')
const app =express()
require('dotenv').config()
const mongoose =require('mongoose')
const Taskroute=require('./routes/TaskRoute')
//port is a sensitive information it need to be add in environment file.

//middleware

app.use((req,res,next)=>{
  console.log('path = '+req.path+' method = '+req.method);
  next()
})


app.use(express.json())
//getting response

// app.get('/',(req,res)=>{
//   res.send('hello ')
// })



//DB connection using mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`DB connected successfully listening to ${process.env.PORT}`)
})
}).catch((error)=>{
  console.log(error)
})

app.use('/a',Taskroute)
