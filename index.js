import os from 'os'
import path from 'path'
import express from 'express'


const app = express()

app.get('/',(req,res)=>{
    res.end(path.resolve())
})

app.get('/home',(req,res)=>{
    res.end(os.homedir())
})

app.listen(3000)