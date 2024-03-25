import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    phone:{
        type:String,
        required:true,
        unique:true
    }, 
    nationalId:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    }
},{timestamps:true})
const studentModel = mongoose.model('student',studentSchema)
export default studentModel