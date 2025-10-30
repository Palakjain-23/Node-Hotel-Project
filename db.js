// import mongoose from "mongoose";

// const mongoURL='mongodb://localhost:27017/hotels'
// mongoose.connect(mongoURL)
// .then(()=>console.log('connected succesfully'))
// .catch((err)=>console.log('not connected'))
// const db=mongoose.connection;
// db.on('disconnected', () => {
//   console.log('⚠️ MongoDB connection disconnected');
// });
// export default  db;
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL)
.then(()=>console.log('connected'))
.catch((err)=>console.log('something went wrong'))

const db = mongoose.connection
db.on('disconnected',()=>{
  console.log('disconnected');
}) 
export default db;
