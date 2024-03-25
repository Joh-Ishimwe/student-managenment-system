import facilitatorModel from "../model/facilitator.model.js";
const facilitatorController = {
    createfacilitator:async(req,res)=>{
        try{
            const addfacilitator = await facilitatorModel.create(req.body)
            res.status(201).json({
                message:'facilitator added successfully',
                facilitator:addfacilitator

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }
    },
    listfacilitator:async(req,res)=>{
        try{
            const listfacilitator = await facilitatorModel.find()
            res.status(201).json({
                message:'facilitator added successfully',
                facilitator:listfacilitator

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }
    },
    facilitatorbyId:async(req,res)=>{
        try{
            const facilitatorbyid = await facilitatorModel.findById(req.params.id)
            res.status(201).json({
                message:'facilitator ',
                facilitator:facilitatorbyid

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    facilitatorbyEmail: async(req,res)=>{
        try{
            const facilitatorbyemail = await facilitatorModel.findOne({email:req.params.email})
            res.status(200).json({
                message:'facilitator',
                facilitator:facilitatorbyemail

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    updatefacilitator:async(req,res)=>{
        try{
            const updatedfacilitator= await facilitatorModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({
                message:'facilitator updated',
                facilitator:updatedfacilitator

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    },
    removingfacilitator:async(req,res)=>{
        try{
            const id =req.params.id
            const updatedfacilitator= await facilitatorModel.findByIdAndDelete(id)
            res.status(200).json({
                message:'facilitator deleted',
                facilitator:updatedfacilitator

            })
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"server error"})
        }

    }
    
}
export default facilitatorController;