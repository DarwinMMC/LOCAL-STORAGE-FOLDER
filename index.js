const app = require('./app')
const {port,address} = require('./config')
const chalk = require('chalk')
const open = require('open')

app.listen(port,(error)=>{
    if(error){
        console.log(chalk.red("error: "+error))
        return 0;
    }
    console.log(chalk.greenBright("Running.."))
    console.log(chalk.yellow("http://"+address+":"+port))
    open(`http://${address}:${port}`)
})

