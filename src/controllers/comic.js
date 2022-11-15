const createcomic=require('../database')
const editcomic=require('../database')
const searchidcomic=require('../database')
const searchusernamecomic=require('../database')
const deletecomic=require('../database')
const deletecapitulo=require('../database')
const showmanga=require('../database')
const showmangaautor=require('../database')
const comic={}



//create comic
comic.createc=(req,res)=>{
    try{
        createcomic.createcomic(req,res);
        res.send('create comic')
    }catch(e){
        console.log(e)
    }  

}
//like

//edit comic
comic.editc=(req,res)=>{
try {
    editcomic.editcomic(req,res);
    res.send('edit comic')
}catch(e){
    console.log(e)
}

}


//search comic id
comic.searchidc=(req,res)=> {

    try{
        searchidcomic.searchidcomic(req,res);
        res.send('search comic')
    }catch(e){
        console.log(e)
    }
}
//search usernamecomic
comic.searchusernamecomicc=(req,res)=> {
    try{
        searchusernamecomic.searchusernamecomic(req,res);
        res.send('search comic for username')
    }catch(e){
        console.log(e)
    }

}

comic.deletecomic=(req,res)=>{
    try{
        deletecomic.deletecomic(req,res)
    }catch(e){
        console.log(e)
    }
}


comic.deletecomicc=(req,res)=>{
    try{
        deletecapitulo.deletecapitulo(req,res)
    }catch(e){
        console.log(e)
    }
}


comic.createcapitulo=(req,res)=>{
    try{
        createcapitulo.createcapitulo(req,res)
    }catch(e){
        console.log(e)
    }
}

comic.showmanga=(req,res)=>{
    try{
        showmanga.showmanga(req,res)
    }catch(e){
        console.log(e)
    }
}

comic.showmangaautor=(req,res)=>{
    try{
        showmangaautor.showmangaautor(req,res)
    }catch(e){
        console.log(e)
    }
}





module.exports = comic