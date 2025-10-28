import express from 'express'
import db from './db.js'
import personRoutes from './routes/personRoutes.js'
import menuRoutes from './routes/menuRoutes.js'

const app = express()
app.use(express.json())

app.get('/',(req,resp)=>{
    resp.send('<h1>welcome to express js </h1>')
    resp.end()
})

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)
app.listen(3200)
