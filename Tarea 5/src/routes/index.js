const express = require('express');
const router = express.Router();

const tareasRoutes = require('./tareas.js');

router.use('/', express.json());

router.use('/tareas', tareasRoutes);

module.exports = router;