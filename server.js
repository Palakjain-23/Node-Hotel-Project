import express from 'express'
import db from './db.js'
import personRoutes from './routes/personRoutes.js'
import menuRoutes from './routes/menuRoutes.js'
import dotenv from 'dotenv'
import passport from './auth.js'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(passport.initialize())
const logRequest = (req,resp,next)=>{
    console.log(`${new Date().toLocaleString()} Request to :${req.orignalUrl}`);
    next()
}

const localAuthMiddleware=passport.authenticate('local',{session:false})
app.get('/',localAuthMiddleware,(req,resp)=>{
    resp.send('<h1>welcome to express js </h1>')
    resp.end()
})

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)
app.listen(PORT)
