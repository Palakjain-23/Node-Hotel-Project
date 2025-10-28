import express from 'express'
import Person from './../models/person.js'
import mongoose from 'mongoose';
const router = express.Router()
router.post('/',async (req,resp)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const savedData = await newPerson.save(); 
        console.log('Data saved');
        resp.status(200).json(savedData)
    }catch(err){
        console.log(err)
        resp.status(500).json({err:'Internal Server Error'})
    }
})
router.get('/',async(req,resp)=>{
    try{
        const data = await Person.find()
        console.log('data fetched')
        resp.status(200).json(data)
    }catch(err){
        console.log(err);
        resp.status(500).json({err:'Internal Server Error'})
    }
})
router.get('/:workType',async(req,resp)=>{
    try{
        const workType = req.params.workType
        if( workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
            const response = await Person.find({work:workType});
            resp.status(200).json(response);
        }else{
            resp.status(404).json({err:"Invalid work Type"})
        }
    }catch(err){
        resp.status(500).json({err:"Internal server error"})
    }
})
router.put('/:id',async(req,resp)=>{
    try{
        const idUpdate = req.params.id;
        const updatedData = req.body;
        const response =  await Person.findByIdAndUpdate(idUpdate,updatedData,{
            new:true,
            runValidator:true
        })
        if(!response){
            resp.status(404).json({mess:'User not found'})
        }
        resp.status(200).json(response)
    }catch(err){
        resp.status(500).json({err:"internal server error"})
    }
})
router.delete('/:id',async(req,resp)=>{
    try{
        const deleteId = req.params.id
        const response = await Person.findByIdAndDelete(deleteId)
        if(!response){
            resp.status(404).json({mesg:'person not found'})
        }
        console.log('person deleted successfully')
        resp.status(200).json(response)
    }catch(err){
        resp.status(500).json({err:'Internal servere error'})
    }
})
export default router;
//  "_id": "68ffbe82b623bc61ad03a8a3",
//     "name": "kabadi biscuit",
//     "age": 1,
//     "work": "waiter",
//     "mobile": "222333",
//     "email": "biscuit@gmail.com",
//     "address": "barkot",
//     "salary": 1000,
//     "__v": 0
