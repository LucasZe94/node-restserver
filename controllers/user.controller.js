const {response, request} = require('express')

const usuariosGet = (req = request, res = response) =>{

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: "get API - controller",
        q, nombre, apikey
    });
}


const usuariosPost = (req, res = response) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: "post API - controller",
        nombre, edad
    });
};

const usuariosPut = (req, res = response) =>{
    const id = req.params.id;

    res.json({
        msg: "put Api - controller",
        id
    });
};

const usuariosPatch = (req, res = response) =>{
    res.json({
        msg: "patch API - controller"
    })
}
const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: "delete API - controller"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}