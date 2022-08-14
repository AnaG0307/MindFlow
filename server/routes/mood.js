const express = require("express");
const router = express.Router();
const moodCtrl = require("../controllers/mood");

router.post('/', moodCtrl.logmood);
router.get('/', moodCtrl.showmood);



module.exports = router;