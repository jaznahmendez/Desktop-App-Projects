const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.js');
const familyRoutes = require('./family.js');
const hobbiesRoutes = require('./hobbies.js');

const middlewares = require('./../middlewares');

router.use('/contact', middlewares.auth, contactRoutes);
router.use('/family', middlewares.auth, familyRoutes);
router.use('/hobbies', middlewares.auth, hobbiesRoutes);

module.exports = router;