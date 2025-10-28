import mongoose from 'mongoose'
const MenuSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "price":{
        type:Number,
        required:true
    },
    "taste":{
        type:String,
        enum:['sweet','sour','salty'],
        required:true
    },
    "is_drink":{
        type:Boolean,
        default:false,
        required:true
    },
    "ingredients":{
        type:[String],
        default:[],
        required:true
    },
    "num_sales":{
        type:Number,
        default:0,
        required:true
    }
})
const Menu = mongoose.model('MenuItem',MenuSchema)
export default Menu
