import studentModel from "../model/student.model.js";
const studentController = {
    createStudent:async(req,res)=>{
        try{
            const addstudent = await studentModel.create(req.body)
            res.status(201).json({
                message:'student added successfully',
                student:addstudent

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }
    },
    listStudent:async(req,res)=>{
        try{
            const liststudent = await studentModel.find()
            res.status(201).json({
                message:'student added successfully',
                student:liststudent

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }
    },
    studentbyId:async(req,res)=>{
        try{
            const studentbyid = await studentModel.findById(req.params.id)
            res.status(201).json({
                message:'student ',
                student:studentbyid

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    studentbyEmail: async(req,res)=>{
        try{
            const studentbyemail = await studentModel.findOne(req.params.email)
            res.status(201).json({
                message:'student ',
                student:studentbyemail

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    updatestudent:async(req,res)=>{
        try{
            const updatedstudent= await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({
                message:'student updated',
                student:updatedstudent

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    removingStudent:async(req,res)=>{
        try{
            const id =req.params.id
            const updatedstudent= await studentModel.findByIdAndDelete(id)
            res.status(200).json({
                message:'student deleted',
                student:updatedstudent

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    }
    
}
export default studentController;
