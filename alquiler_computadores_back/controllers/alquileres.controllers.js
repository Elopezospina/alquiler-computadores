const alquiler = require("../models/alquileres.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let alquiler = new Alquiler({
        marca: req.body.marca,
        tipo: req.body.tipo,
        dir_entrega: req.body.dir_entrega,
        tel_contacto: req.body.tel_contacto,
        met_pago: req.body.met_pago,
        precio: req.body.precio
    })

    alquiler.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el alquiler"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El alquiler se guardo con exito"
        res.json(response)
    })
}
exports.find = function(req,res){
    Alquiler.find(function(err, alquileres){
        res.json(alquileres)
    })
}

exports.findOne = function(req,res){
    Alquiler.findOne({_id: req.params.id},function(err, alquiler){
        res.json(alquiler)
    })
}
exports.update = function(req,res){
    let alquiler = {
        marca: req.body.marca,
        tipo: req.body.tipo,
        dir_entrega: req.body.dir_entrega,
        tel_contacto: req.body.tel_contacto,
        met_pago: req.body.met_pago,
        precio: req.body.precio
    }

    Alquiler.findByIdAndUpdate(req.params.id, {$set: alquiler}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el alquiler"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El alquiler se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Alquiler.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el alquiler"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El elquiler fue eliminado correctamente"
        res.json(response)
    })
}