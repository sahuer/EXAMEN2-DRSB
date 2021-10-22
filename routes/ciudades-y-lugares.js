// Bibliotecas
const router = require("express").Router();
const ciudadesyLugaresController = require('../controllers/ciudades-y-lugares');

// Procesamiento de datos
router.post('/agregarCiudadesyLugares',ciudadesyLugaresController.postAgregarCiudadesyLugares)

//Visualización de los datos
router.post('/obtenerCiudadesyLugares',ciudadesyLugaresController.postObtenerCiudadesyLugares)

module.exports = router