var Volcano = require('../models/volcano');

exports.volcano_list = async function(req, res) {
    try{
        theVolcanoes = await Volcano.find();
        res.send(theVolcanoes);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.volcano_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Volcano detail: ' + req.params.id);
};

exports.volcano_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Volcano create POST');
};


exports.volcano_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Volcano delete DELETE ' + req.params.id);
};


exports.volcano_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Volcano update PUT ' + req.params.id);
};
  
exports.volcano_view_all_Page = async function(req, res) {
    try{
        theVolcanoes = await Volcano.find();
        res.render('volcanoes', { title: 'Volcano Search Results', results: theVolcanoes });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};