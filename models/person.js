import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const personSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "age":{
        type:Number,
        required:true
    },
    "work":{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    "mobile":{
        type:String,
        required:true
    },
    "email":{
        type:String,
    },
    "address":{
        type:String,
        required:true
    },
    "salary":{
        type:Number,
        required:true
    },
    "username":{
        type:String,
        required:true
    },"password":{
        type:String,
        required:true
    }
})
personSchema.pre('save',async(next)=>{
    const person = this
    if(!person.isModified('password')){return next();}
    try{
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(person.password,salt)
        person.password = hashPassword;
        next()
    }catch(err){
        return next(err)
    }
})
personSchema.methods.comparePassword = async function(candidatePassword){
    try{
       const isMatch = await bcrypt.compare(candidatePassword,this.password) 
       return isMatch
    }catch(err){
        throw err
    }
}
const Person = mongoose.model('Person',personSchema)
export default Person
