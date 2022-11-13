//rutas database
const createcomentario=require('../database')
const editcomentario=require('../database')
const searchidcomentario=require('../database')
const searchusernamecomentario=require('../database')
const deletecomentario=require('../database')
const comentario={}



//create comentario
comentario.create=(req,res)=>{
    try{
        createcomentario.createcomentario(req,res);
        res.send('create comentario')
    }catch(e){
        console.log(e)
    }  

}
//like

//edit comentario
comentario.edit=(req,res)=>{
try {
    editcomentario.editcomentario(req,res);
    res.send('edit comentario')
}catch(e){
    console.log(e)
}

}


//search comentario id
comentario.searchid=(req,res)=> {

    try{
        searchidcomentario.searchidcomentario(req,res);
        res.send('search comentario')
    }catch(e){
        console.log(e)
    }
}
//search usernamecomentario
comentario.searchusernamecomentario=(req,res)=> {
    try{
        searchusernamecomentario.searchusernamecomentario(req,res);
        res.send('search comentario for username')
    }catch(e){
        console.log(e)
    }

}

comentario.deletecomentario=(req,res)=>{
    try{
        deletecomentario.deletecomentario(req,res)
    }catch(e){
        console.log(e)
    }
}


module.exports= comentario