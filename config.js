const { networkInterfaces } = require('os');
const fs = require('fs')
const chalk = require('chalk');
const port=3000
let address_server = '';

function informacion(){
  console.log(chalk.yellow("LOCAL STORAGE FOLDER"))
  console.log(chalk.yellow("GITHUB[DarwinMMC]"))
}

informacion()


function config_file(address){

    fs.writeFile("public/ip.js",`var address = '${address_server}',port = '${port}';`,(error)=>{
      if(error){
        console.log("error al configurar ip: "+error);
        return 0;
      }
    });
  }
  
  function config_ip(){
    const nets = networkInterfaces();
    const results = Object.create(null);
    var cont=1;
    var ip_wireless = ''
    for (const name of Object.keys(nets)) {
        
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                
                if((name == "wlp3s0") || (name=="wlan0")||(name=="Wi-Fi") || (name=="eth0")){
                    ip_wireless = net.address;
                    console.log(chalk.greenBright("["+cont+"]  "+name+" : "+net.address))
                    
                }else{
                    console.log(chalk.red("["+cont+"]  "+name+" : "+net.address))
                }
                cont +=1;
            }
        }
        
    }    
    address_server = ip_wireless
    config_file(address_server)
  }
config_ip()
  


module.exports = {
    port:port,
    address:address_server,
    path_origin:require('path').resolve(__dirname)
}