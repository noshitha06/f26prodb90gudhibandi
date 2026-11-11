   var express = require('express');
   var router = express.Router();


   var api_controller = require('../controllers/api');
   var volcano_controller = require('../controllers/volcano');

   router.get('/', api_controller.api);

   router.post('/volcanoes', volcano_controller.volcano_create_post);

   router.delete('/volcanoes/:id', volcano_controller.volcano_delete);

   router.put('/volcanoes/:id', volcano_controller.volcano_update_put);

   router.get('/volcanoes/:id', volcano_controller.volcano_detail);
   router.get('/volcanoes', volcano_controller.volcano_list);

   module.exports = router;