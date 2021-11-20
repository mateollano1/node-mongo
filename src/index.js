//  importaciones a librerias
const express = require('express')
const mongoose = require('mongoose')

// importaciones a servicios propios
const user = require('./services/user')
const routes = require('./endpoints')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)


mongoose.connect('mongodb+srv://root:root@cluster0.cpoyt.mongodb.net/test').then(
    ()=>{
        console.log("conexión a base de datos exitosa");
        app.listen(5010,()=>{
            console.log("Server listening on port 5010");
            // user.createUser()
        })

    }
).catch(err=>console.log(err))


