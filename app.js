var express = require('express')
const config = require('./configs').config
const pathhtml = config.wwwroot
const hostname = config.hostname
const port = config.port
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(pathhtml+'/index.html')
})
app.listen(port, hostname, ()=>{
    var timestart = Date.now()
    console.log(`Server PALLADIUM started on ${port} and ${hostname} hostname at ${timestart}`)
})