const express = require('express');
//const { route } = require('..');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', userCtrl.signup);
//router.get('/', userCtrl.user);



module.exports = router;