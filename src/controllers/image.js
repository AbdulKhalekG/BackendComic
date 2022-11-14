const cloud = require('../cloud/upload')
const sharp = require('sharp')
const {Pool} = require('pg');
const config = {
    connectionString: process.env.DATABASE_URL,
    max:500,
    min:100,
    ssl:{rejectUnauthorized:false}
};

const pool = new Pool(config);

exports.image = async (req,res) => {

    const{title, descripcion, capitulos, paginas, autor} = req.body

    try{
        const result = await cloud.uploader.upload(req.file.path, {
            public_id: `${new Date().getTime()}_comic`, crop: 'fill'
    })
    console.log('url: ' + result.url + ', tittle: ' + title + 'descripcion: ' + descripcion + 'capitulos: ' + capitulos + 'paginas: ' + paginas + 'autor: ' + autor)
    const resultdb = await pool.query('INSERT INTO comic(url, comic, title, descripcion, capitulos, id_imagen, paginas) VALUES($1,$2,$3,$4,$5,$6)', [result.url, comic, title, descripcion, capitulos, id_imagen, paginas])
    console.log('exito')
    res.json('exito')

} catch(error){

    res.status(500).json({success: false, message: 'la foto no carga'})
    console.log('error de la imagen', error.message)
}

}