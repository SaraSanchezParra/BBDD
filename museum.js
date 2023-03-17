let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Ghanalove20*",
        database : "dia3"
    }
);


connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta.")
    }
});


//Además, una vez construido, se piden las siguientes consultas:

//- Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
//de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
//email) de la persona que los ha prestado.
// let params =['Prestamo'];
// let sql = "SELECT Piezas.NombrePieza, Localizacion.nombreLocalizacion, Prestamos.FechaDevolucion, PropietarioPiezas.Nombre, PropietarioPiezas.Apellidos, PropietarioPiezas.Email, Prestamos.TipoPrestamo FROM Piezas JOIN Prestamos ON (Piezas.idPrestamo = Prestamos.idPrestamos) JOIN PropietarioPiezas ON (Prestamos.idPropietario = PropietarioPiezas.idPropietarioPiezas) JOIN Localizacion ON (Piezas.idLocalizacion = Localizacion.idLocalizacion) WHERE Prestamos.TipoPrestamo = ?";
// connection.query(sql,params, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Listado de objetos:');
//                 console.log(result);

//             }
//         });



//- Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
//por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
//itinerancia y cuántos almacenados.

//• Las consultas se deben realizar en Workbench y en Node.js con sentencias preparadas.

let params =[];
let sql = "SELECT Colecciones.Tipoexposicion, COUNT(*) AS totalCuadros FROM Piezas JOIN Colecciones ON (Piezas.idColeccion = Colecciones.idColecciones) GROUP BY Tipoexposicion ORDER BY totalCuadros DESC";
connection.query(sql, params, function (err, result){
            if(err) {
                console.log(err);
            }
            else {
                console.log('Total de piezas:');
                console.log(result);

            }
        });
