const Registro = require("../models/registros.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let registro = new Registro({
        pc_id: req.pc_id,
        tipo: req.body.tipo,
        memoria_Ram: req.body.memoria_Ram,
        procesador: req.body.procesador,
        capacidad: req.body.capacidad,
        precio: req.body.precios,
        envio: req.body.envio
    })

    registro.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el novio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El novio se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    registro.find(function(err, registros){
        res.json(registros)
    })
}

exports.findOne = function(req,res){
    registro.findOne({_id: req.params.id},function(err, registro){
        res.json(registro)
    })
}

exports.update = function(req,res){
    let registro = {
        pc_id: req.body.pc_id,
        tipo: req.body.tipo,
        memoria_Ram: req.body.memoria_Ram,
        procesador: req.body.procesador,
        capacidad: req.body.capacidad,
        precio : req.body.precio,
        envio: req.body.envio
    }

    registro.findByIdAndUpdate(req.params.id, {$set: registro}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el registro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El registro modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    registro.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el registro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El registro fue eliminado correctamente"
        res.json(response)
    })
}