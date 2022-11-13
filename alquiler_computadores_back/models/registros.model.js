const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrosSchema = new Schema({
    pc_id:{type: String, required: true, max:60},
    tipo:{type: String, required: true, max:60},
    memoria_Ram:{type: Number, required: true, max:100},
    procesador:{type: Number, required: true, max:250},
    capacidad:{type: String, required: true, max:15},
    precio:{type: Boolean, required: false, max:70},
    envio:{type: String, required: false, max:150}
});

module.exports = mongoose.model("registros", RegistrosSchema); 

