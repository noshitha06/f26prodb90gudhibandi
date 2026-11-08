var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('volcanoes', { title: 'Search Results Volcanoes' });
});

module.exports = router;
