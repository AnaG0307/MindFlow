const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', userCtrl.signup);
router.get('/', userCtrl.authen);


module.exports = router;