const { Pool } = require('pg')
const  helpers  = require('./helpers')

const config={
    connectionString: process.env.DATABASE_URL,
    max:500,
    min:100,
    ssl:{rejectUnauthorized:false}
};
//funciones
const pool = new Pool(config);



//


//funcion create user
const createuser= async (req,res) =>{

    const{ nombre, username, correo,clave} = req.body;
    const passwordencriptado = await helpers.encryptPassword(clave)
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo,clave) VALUES($1, $2, $3, $4)', [
        nombre, username, correo,passwordencriptado])
    console.log(response);
    res.json(response.rows)
}

//funcion modify user
const modifyuser=async (req,res)=>{

    const{ nombre, username, correo ,clave,id_usuario} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre= $1 username= $2, correo=$3, clave=$4 WHERE id_usuario=$5', [nombre, username, correo,clave,id_usuario])
    console.log(response);
    res.json(response.rows)

}

//funcion searchusername
const searchusername=async(req,res)=>{
    const username = req.params.username
    const response= await pool.query('SELECT * FROM usuarios WHERE username=$1 ', [username])
    console.log(response.rows);
    res.json(response.rows)
}


//funcion searchuserid
const searchuserid=async(req,res)=>{
    const id_usuario =req.params.id_usuario
    const response=await pool.query('SELECT * FROM usuarios WHERE id_usuario=$1', [id_usuario])
    console.log(response.rows);
    res.json(response.rows)
}

const createcomentario=async (req,res)=> {
    const{username, descripcion, title} = req.body
    const response = await pool.query('INSERT INTO comentario(username, descripcion, title) VALUES($1,$2,$3)',[username,descripcion,title])
    console.log(response);
}

const editcomentario=async(req,res)=>{

    const{id_comentario, username, descripcion, title} = req.body
    const response = await pool.query('UPDATE comentario SET username=$1, descripcion=$2, title=$3, WHERE id_comentario=$4', [username, descripcion, title, id_comentario])
    console.log(response)
}

const searchidcomentario=async(req,res)=>{
    const id_comentario =req.params.id_comentario
    const response=await pool.query('SELECT *FROM comentario WHERE id_comentario=$1', [id_comentario])
    console.log(response.rows);
}

const searchusernamecomentario=async(req,res)=>{
    const username=req.params.username
    const response=await pool.query('SELECT* FROM comentario WHERE username=$1', [username])
    console.log(response.rows);

}

const deletecomentario=async(req,res)=>{
    const id_comentario =req.params.id_comentario
    const response = await pool.query('DELETE * FROM comentario WHERE id_comentario=$1', [id_comentario])
    console.log(response)
    res.json(response.rows);

}

const createcomic=async (req,res)=> {
    const{title, descripcion, capitulos, contenido, categoria, fecha, paginas, autor} = req.body
    const response = await pool.query('INSERT INTO comic(title, descripcion, capitulos, contenido, categoria, fecha, paginas, autor) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[title, descripcion, capitulos, contenido, categoria, fecha, paginas, autor])
    console.log(response);
}

const editcomic=async(req,res)=>{

    const{id_comic, title, descripcion, capitulos, contenido, categoria, fecha, id_capitulos, paginas, autor} = req.body
    const response = await pool.query('UPDATE comic SET title=$1, descripcion=$2, capitulos=$3, contenido=$4, categoria=$5, fecha=$6, WHERE id_comic=$7, WHERE id_capitulos=$8', [id_comic, title, descripcion, capitulos, contenido, categoria, fecha, id_capitulos, paginas, autor])
    console.log(response)
}

const deletecomic=async(req,res)=>{
    const id_comic =req.params.id_comic
    const response = await pool.query('DELETE * FROM comic WHERE id_comic=$1', [id_comic])
    console.log(response)
    res.json(response.rows);

}

const deletecomicc=async(req,res)=>{
    const id_capitulos =req.params.id_capitulos
    const response = await pool.query('DELETE * FROM comic WHERE id_capitulos=$1', [id_capitulos])
    console.log(response)
    res.json(response.rows);

}

const searchusernamecomic=async(req,res)=>{
    const username=req.params.username
    const response=await pool.query('SELECT* FROM comic WHERE username=$1', [username])
    console.log(response.rows);

}

const searchidcomic=async(req,res)=>{
    const id_comic =req.params.id_comic
    const response=await pool.query('SELECT *FROM comic WHERE id_comic=$1', [id_comic])
    console.log(response.rows);
}



module.exports = {
    createuser,
    modifyuser,
    searchuserid,
    searchusername,
    createcomentario,
    editcomentario,
    searchidcomentario,
    searchusernamecomentario,
    deletecomentario,
    createcomic,
    editcomic,
    deletecomic,
    deletecomicc,
    searchusernamecomic,
    searchidcomic

}