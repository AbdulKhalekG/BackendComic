const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const passport=require('passport')
const { passportAuth } = require('../middleware')
const comentario = require('../controllers/comentario')




//Rutas para los users
router.post('/register', usuario.register) //
router.post('/login', passportAuth) //
router.put('/modify/:id', usuario.modify) //

//busqueda de usuarios por id
router.get('/search-user/:id_usuario',usuario.searchiduser) //

//busqueda de username
router.get('/search-username/:username',usuario.searchuser) //


//Rutas para los comentarios
router.post('/create-comentario', comentario.create) //
router.put('/edit-post',comentario.edit) //


//busqueda de comentario por id
router.get('/search-comentario/:id_comentario',comentario.searchid)

//busqueda de comentario por username
router.get('/search-usernamecomentario/:username', comentario.searchusernamecomentario)

router.delete('/delete-comentario/:id_comentario', comentario.deletecomentario)





router.get('/perfil',(req,res)=>{
    res.send('perfil')
})


module.exports = router