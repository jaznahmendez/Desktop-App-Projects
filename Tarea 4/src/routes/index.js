const express = require('express');
const router = express.Router();

const newsRoutes = require('./news.js');

router.use('/', newsRoutes);


module.exports = router;