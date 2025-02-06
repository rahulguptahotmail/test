import os from 'os'
import express from 'express'


const app = express()

app.get('/home',(req,res)=>{
    res.end(os.homedir())
})

app.listen(3000)