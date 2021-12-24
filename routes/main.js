const mainController = require('../controllers/mainController')
const express = require('express')
const {createForm} = require('../middlewares/validationUser')
const {estaDespiertoLaCookie} = require('../middlewares/validationUser')
let router = express.Router();


router.get('/' , mainController.index)
router.post('/', createForm, mainController.processIndex)
router.get('/otraVista' ,mainController.otraVista);
router.get('/borrarColor', mainController.borrarColor);

//Si no queremos usar la forma globar que use en app.js tengo que usar 
//router.get('/' , estaDespiertoLaCookie , mainController.index)
//router.post('/', createForm, mainController.processIndex)
//router.get('/otraVista', estaDespiertoLaCookie ,mainController.otraVista);
//router.get('/borrarColor', mainController.borrarColor);

module.exports = router;