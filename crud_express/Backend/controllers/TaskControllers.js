const taskModel=require('../models/TaskModel')
const mongoose =require('mongoose')

const CreateTask=async(req,res)=>{
    const {title,description}=req.body;

    try{
        const task=await taskModel.create({title,description});
        res.status(200).json(task)
    }catch(e){
         res.status(400).json({error:e.message})
    }
}

//to get all data
const GetTask=async(req,res)=>{

    try{
        const tasks=await taskModel.find({});
        res.status(200).json(tasks)
    }catch(e){
         res.status(400).json({error:e.message})
    }
}


const GetSingletask=async(req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task not found"})
    }
    
    try{
      const singletask=await taskModel.findById(id)
      return res.status(200).json(singletask)
     }catch(e){
        res.status(400).json({error:e.message})
     }
}

const UpdateTask=async(req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task not found"})
    }
    
    try{
      const task=await taskModel.findByIdAndUpdate({
        _id:id
      },{
        ...req.body
      })
      res.status(200).json(task)
     }catch(e){
        res.status(400).json({error:e.message})
     }
}

const DeleteTask=async(req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task not found"})
    }
    
    try{
      const task=await taskModel.findByIdAndDelete(id)
      res.status(200).json(task)
     }catch(e){
        res.status(400).json({error:e.message})
     }
}
module.exports={CreateTask,GetTask,GetSingletask,UpdateTask,DeleteTask}