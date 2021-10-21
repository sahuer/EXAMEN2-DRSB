const CiudadesyLugares = require('../models/ciudades-y-lugares')
const mongoose = require("mongoose")

exports.postAgregarCiudadesyLugares = async (req,res)=>{
    const CyL = new CiudadesyLugares(req.body)
    CyL._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento a la coleccion
        const cylExiste = await CiudadesyLugares.findOne({ numero: req.body.numero, nombre: req.body.nombre })
        if (!cylExiste){
            await CyL.save()
            console.log(CyL)
            console.log("CiudadesyLugares registrado")
            res.send({operacion:"correcta"})
        }else{
            res.send({operacion:"incorrecta repetido"})
        }
        
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.getObtenerCiudadesyLugares = async (req,res)=>{
    const CyL = await CiudadesyLugares.find()
    console.log(CyL)
    res.json(CyL)
}


exports.postBorrarCiudadesyLugares = async (req,res)=>{
    try{
        await CiudadesyLugares.findOneAndRemove(req.body)
        console.log("CiudadesyLugares eliminado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}