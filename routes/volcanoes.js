var express = require('express');
const volcano_controller = require('../controllers/volcano');
var router = express.Router();


router.get('/', volcano_controller.volcano_view_all_Page );

module.exports = router;
