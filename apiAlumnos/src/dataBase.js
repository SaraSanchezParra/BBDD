const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Ghanalove20*",
        database : "dia1"
    });

    connection.connect(function(error){
        if(error){
            console.log(error);
        }else{
            console.log('Conexión correcta.');
        }
    });

    module.exports = connection;