const express =require('express')
const router=express.Router()


const {CreateTask,GetTask,GetSingletask,UpdateTask,DeleteTask}=require('../controllers/TaskControllers')

router.post('/',CreateTask)
router.get('/',GetTask)
router.get('/:id',GetSingletask)
router.patch('/:id',UpdateTask)
router.delete('/:id',DeleteTask)



module.exports=router