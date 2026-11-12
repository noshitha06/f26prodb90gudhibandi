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

   
  
exports.volcano_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Volcano();
    document.volcano_name = req.body.volcano_name;
    document.volcano_type = req.body.volcano_type;
    document.height_m = req.body.height_m;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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