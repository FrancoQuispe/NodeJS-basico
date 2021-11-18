const { response, request } = require("express");


const usuariosGet = (req = request, res = response) =>  {

    const {nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre, apikey
    })
};

const usuarioPut = (req, res = response) =>  {

    const id = req.params.id

    res.json({
        msg: 'put API - controlador',
        id
    })
};

const usuarioPost = (req, res = response) =>  {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
};

const usuarioDelete = (req, res = response) =>  {
    res.json({
        msg: 'delete API - controlador'
    })
};

const usuarioPatch = (req, res = response) =>  {
    res.json({
        msg: 'patch API - controlador'
    })
};

module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}