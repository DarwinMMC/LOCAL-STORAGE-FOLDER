const express = require('express')
const routes = express.Router()
const {get_files,post_file,new_folder,put_file,delete_file} = require('./controller')
const {upload} = require('./service')

routes.get('/',get_files)
routes.post('/',upload.single('documento'),post_file)
routes.post('/new_folder',new_folder)
routes.put('/',put_file)
routes.delete('/',delete_file)


module.exports = routes