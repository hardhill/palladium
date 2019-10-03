var express = require('express')
const config = require('./configs').config
const pathhtml = config.wwwroot
const hostname = config.hostname
const port = config.port
const app = express()
app.use('/',express.static(pathhtml))

app.get('/',(req,res)=>{
    res.sendFile(pathhtml+'/index.html')
})
app.post('/srv',(req,res)=>{

})
app.listen(port, hostname, ()=>{
    var timestart = Date(Date.now()).toString()
    console.log(`Server PALLADIUM started on port ${port} and ${hostname} hostname at ${timestart}`)
})