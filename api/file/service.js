const path = require('path')
const fs = require('fs')
const  {path_origin}= require('../../config')
const multer = require('multer')

const format_file = (all_files,route)=>{
    let files = []
    let directories = []
    let all_content = []
    for (let index = 0; index < all_files.length; index++) {
        const route_file = path.join(route,all_files[index])
        try {
            let file = fs.lstatSync(route_file)
       
            if(file.isDirectory()){
                directories.push({
                    name:all_files[index],
                    directory:true,
                    size:bytesToSize(file.size)
                })
            }else{
                files.push({
                    name:all_files[index],
                    directory:false,
                    size:bytesToSize(file.size)
                })
            }
        } catch (error) {
            console.log(error)
            data_file.push({
                name:'',
                directory:'',
                size:''
            })
        }
    }
    for (let index = 0; index<directories.length; index++) {
        all_content.push(directories[index])
    }
    
    for (let index = 0; index<files.length; index++) {
        all_content.push(files[index])
    }
   
   
    return all_content
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       
        cb(null, path.join(path_origin,'public/uploads',req.query.route));
    },
    filename:function (req, file, cb) {
      cb(null,file.originalname);
    },
  
  })
const upload = multer ( {
    storage,
    dest:(req,file,cb)=>{
        cb(null, path.join(path_origin,'public/uploads',req.query.route));
    }
  })
  

module.exports = {
    format_file,
    storage,
    upload
}