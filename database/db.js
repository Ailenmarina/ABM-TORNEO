const mysql = require('mysql2');


const conexion = mysql.createConnection({
   host:'89.116.225.68',
   database:'proyecto1_bd1',
   user:'proyecto1_admin',
   password:'passbd1+-*',
   insecureAuth :true
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
        console.log('CONEXION EXITOSA');
    })

module.exports = conexion;