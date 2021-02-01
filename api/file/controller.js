const fs = require('fs')
const rimraf = require('rimraf')
const {path_origin} = require('../../config')
const {format_file} = require('./service')


const get_files = (req,res)=>{

    const route = path_origin + "/public/uploads" + req.query.route
    
    fs.readdir(route,(error,all_files)=>{
        if(error){
            res.status(500).json({mesage:"error:"+error})
            return 0;
        }
      
        res.status(200).json({files:format_file(all_files,route)})
    })

}

const post_file = (req,res)=>{
    res.status(200).json({mesage:'ok'})
}

const new_folder = (req,res)=>{
   
    const path_folder = path_origin+"/public/uploads"+req.body.route
   
    fs.mkdir(path_folder,(error,result)=>{
        if(error){
            res.status(500).json({mesage:error})
            return 0;
        }
        res.status(201).json({mesage:result})
    })
}


const put_file = (req,res)=>{
    
}
const delete_file = (req,res)=>{
    const path_content = path_origin+"/public/uploads"+req.query.route
 

    if(req.query.directory=="true"){

        rimraf(path_content,(error)=>{
            if(error){
                res.status(500).json({mensage:error})
                return 0
            }
            res.status(204).json({mensage:''})
        })

    }else{
       
        fs.unlink(path_content,(error)=>{
            if(error){
                
                res.status(500).json({"mensage":error})
                return 0;
            }
            res.status(204).send()
        })
    }
    
}


module.exports = {
    get_files,
    post_file,
    new_folder,
    put_file,
    delete_file
}