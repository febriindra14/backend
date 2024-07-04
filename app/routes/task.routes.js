const express = require('express');
const router = express.Router();
const tesController = require('../controllers/tes.controller');

router.post('/tasks', tesController.create);
router.get('/tasks', tesController.findAll);
router.put('/tasks/:id', tesController.update);
router.delete('/tasks/:id', tesController.delete);
router.get('/tasks/:id', tesController.findOne);

module.exports = router;
