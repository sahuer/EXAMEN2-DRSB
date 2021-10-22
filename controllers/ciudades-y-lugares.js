const CiudadesyLugares = require('../models/ciudades-y-lugares')
const mongoose = require("mongoose")

exports.postAgregarCiudadesyLugares = async (req,res)=>{
    const CyL = new CiudadesyLugares(req.body)
    CyL._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento
        const ExisteCoL = await CiudadesyLugares.exists({ ciudad: req.body.ciudad, lugar: req.body.lugar })
        
        if (req.body.ciudad==undefined && ExisteCoL){   // Verifica si se registró un lugar y se repite
            await CyL.save()
            await CiudadesyLugares.updateMany({ lugar: req.body.lugar },{ $inc:{contador: 1 } }) // Incrementa el contador
            const lug = await CiudadesyLugares.findOne({ lugar: req.body.lugar })
            await CiudadesyLugares.findByIdAndUpdate(CyL._id, {contador: lug.contador}) // Se actualiza el contador al nuevo registro

            console.log("lugar registrado")
            res.send({operacion:"correcta y lugar repetido"})

        } else if (req.body.lugar==undefined && ExisteCoL){ // Verifica si se registró una ciudad y se repite
            await CyL.save()
            await CiudadesyLugares.updateMany({ ciudad: req.body.ciudad },{ $inc:{contador: 1 } }) // Incrementa el contador
            const ciu = await CiudadesyLugares.findOne({ ciudad: req.body.ciudad })
            await CiudadesyLugares.findByIdAndUpdate(CyL._id, {contador: ciu.contador}) // Se actualiza el contador al nuevo registro

            console.log("ciudad registrada")
            res.send({operacion:"correcta y ciudad repetida"})

        } else { // Ciudad y lugar aún no registrados
            await CyL.save()
            console.log(CyL)
            console.log("ciudad y/o lugar registrado")
            res.send({operacion:"correcta"})
        }
        
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.postObtenerCiudadesyLugares = async (req,res)=>{
    const CyL = await CiudadesyLugares.find(req.body)
    console.log(CyL)
    res.json(CyL)
}