# LOCAL-STORAGE-FOLDER

Con este proyecto podrás compartir cualquier tipo de archivo entre dispositivos en una red local, esta construido mediante una api rest con express la cual entrega una aplicacion que permite la manipulación de archivos y directorios.

una de las aplicaciones que se le puede dar a este proyecto  es  crear un sistema tipo NAS "Network-attached storage" subiendo este proyecto en una Raspberry Pi con una unidad de almacenamiento.
o simplemente podemos ejecutarlo desde nuestro ordenador.
### Requisitos 🔧
 1) NodeJS https://nodejs.org/en/


### Instalación 🚀
1) primero debes comprabar si tienes los comandos de nodejs en  tus sistema puedes usar ```` node -v ```` si no se reconoce como comando probablemente no tienes node en tus variables de entorno puedes configurarlas o usar la consola que nos proporciona node al instalar
2) descarga el proyecto 
2) ubícate en la carpeta del proyecto desde la consola 
3) ejecuta
 ````
 node index.js
 ````
 4) automáticamente se selecciona la interfaz de red asociada a la conexión inalámbrica "wifi" por medio de esta red es donde podrás ingresar desde otros dispositivos
 
 

## configuración extra
   automáticamente se selecciona la interfaz de red asociada a la conexión inalámbrica si tu tarjeta inalámbrica no se llama como las siguientes
   <ul><li>wlp3s0</li><li>wlan0</li><li>Wi-Fi</li><li>eth0</li></ul>
   podras agregar el nombre que identifica tu conexion inalambrica en el archivo  <strong> config.js </strong> 
   
   
  

## api 
por ahora la api solo responde en formato JSON.

## Vistas 

<img src="https://i.ibb.co/M7sj63Y/Screenshot-2021-02-01-12-10-22-934-com-android-chrome.jpg" width="20%">

<img src="https://i.ibb.co/Kz1tVL9/Captura-de-pantalla-de-2021-02-01-12-09-56.png" width="50%">

