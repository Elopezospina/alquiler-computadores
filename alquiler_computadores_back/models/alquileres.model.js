const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlquileresSchema = new Schema({
    marca:{type: String, required: true, max:60},
    tipo:{type: String, required: true, max:40},
    dir_entrega:{type: String, required: true, max:40},
    tel_contacto:{type: String, required: true, max:15},
    met_pago:{type: String, required: false, max:70},
    precio:{type: Boolean, required: false, max:150}
});

module.exports = mongoose.model("alquileres", AlquileresSchema); 
