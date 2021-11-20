const router = require('express').Router();
const endpointUser = require('./user')

router.use('/user',endpointUser);


module.exports = router;