import express from 'express'
import mongoose from 'mongoose';
const app = express()
import router from './routes/student.routes.js';
import facilatorroute from './routes/facilitator.routes.js'

app.use(express.json())
app.use(router)
app.use(facilatorroute)

const port = 3000;
mongoose.connect('mongodb://localhost:27017/SMS')
app.listen(port,()=>{
    console.log(`the server is running on port${port}.....`)
})

