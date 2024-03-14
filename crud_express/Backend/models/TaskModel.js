const mongoose =require('mongoose')
const Schema=mongoose.Schema


//mongo DB generate ID automatically 
const TaskSchema= new Schema(
    {
        title:{
            type:String,
            require:true
        },  description:{
            type:String,
        }
    },
    {
        timestamps:true
    }
)

module.exports =mongoose.model('Task',TaskSchema)