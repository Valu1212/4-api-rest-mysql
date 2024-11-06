const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tienda"
});
conexion.connect((err)=>{
    if(err){
        console.error("error de conexion ");
        return;
    }
    console.log("conectados")
})
module.exports = conexion;