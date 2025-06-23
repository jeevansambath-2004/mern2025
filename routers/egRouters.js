const express = require('express');
const { getRoute, putRoute, postRoute,deleteRoute } = require('../controllers/egControllers');
const router = express.Router();
router.get('/get', getRoute);
router.put('/put/:id', putRoute);
router.post('/post',postRoute);
router.delete('/delete/:id',deleteRoute);
module.exports = router;