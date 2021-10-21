// Bibliotecas
const router = require("express").Router();
const ciudadesyLugaresController = require('../controllers/ciudades-y-lugares');

// Procesamiento de datos
router.post('/agregarCiudadesyLugares',ciudadesyLugaresController.postAgregarCiudadesyLugares)

//Visualización de los datos
router.get('/obtenerCiudadesyLugares',ciudadesyLugaresController.getObtenerCiudadesyLugares)
router.post('/borrarCiudadesyLugares',ciudadesyLugaresController.postBorrarCiudadesyLugares)

module.exports = router