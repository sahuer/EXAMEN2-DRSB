const mongoose = require('mongoose')

// Definir Schema
const CiudadesyLugaresSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pais:{
        type: String,
        required: true
    },
    lugar:{
        type: String,
        required: false
    },
    ciudad:{
        type: String,
        required: false
    },
    atractivo:{
        type: String,
        required: false
    },
    contador:{
        type: Number,
        required: false
    },
},{collection:'Ciudades-y-Lugares'})

// Compilar modelo de schema
module.exports = mongoose.model('Ciudades-y-Lugares',CiudadesyLugaresSchema)