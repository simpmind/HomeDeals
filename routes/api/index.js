const router = require('express').Router();

const accountRoutes = require('./accountRoutes.js');

const propertyRoutes = require('./propertyRoutes.js');

router.use('/property', propertyRoutes);
router.use('/account', accountRoutes);


module.exports = router;