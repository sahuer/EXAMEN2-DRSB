const CiudadesyLugares = require('../models/ciudades-y-lugares')
const mongoose = require("mongoose")

exports.postAgregarCiudadesyLugares = async (req,res)=>{
    const CyL = new CiudadesyLugares(req.body)
    CyL._id = new mongoose.Types.ObjectId()
    try{
        // Agregar documento
        const ExisteCoL = await CiudadesyLugares.exists({ ciudad: req.body.ciudad, lugar: req.body.lugar })
        if (ExisteCoL) res.send({operacion:"repetido"})
        
        await CyL.save()
        console.log(CyL)
        console.log("CiudadesyLugares registrado")
        res.send({operacion:"correcta"})
        
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

/*
exports.postBorrarCiudadesyLugares = async (req,res)=>{
    try{
        await CiudadesyLugares.findByIdAndRemove(req.body)
        console.log("CiudadesyLugares eliminado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}*/