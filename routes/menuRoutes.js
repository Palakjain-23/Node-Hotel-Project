import express from 'express'
import MenuItem from './../models/menuItem.js'
const router = express.Router()
router.post('/',async(req,resp)=>{
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data)
        const savedData = await newMenuItem.save()
        console.log('Data fetched');
        resp.status(200).json(savedData) 

    }catch(err){
        console.log(err);
        resp.status(500).json({err:"Internal Server Error"})
    }
})
router.get('/',async(req,resp)=>{
    try{
       const data = await MenuItem.find()
       console.log('Data Saved');
       resp.status(200).json(data)
    }catch(err){
        console.log(err);
        resp.status(500).json({err:'Internal Server Error'})
    }
})
export default router
