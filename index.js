const express = require("express")
const mongoose = require("mongoose")
const ciudadesyLugaresRoutes = require("./routes/ciudades-y-lugares")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ciudades-y-lugares",ciudadesyLugaresRoutes)

mongoose.connect('mongodb://user13:root@54.198.161.35:27017/base13?authSource=admin')
.then(()=>{
    app.listen(8084,()=>console.log("Servidor online en puerto 8084\n"))
})
.catch(err=>console.log(err))