   const mongoose = require("mongoose")

   const volcanoSchema = mongoose.Schema({
     volcano_name: String,
     volcano_type: String,
     height_m: Number
   })

   module.exports = mongoose.model("Volcano", volcanoSchema)