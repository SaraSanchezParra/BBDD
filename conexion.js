let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Ghanalove20*",
        database : "dia1"
    }
);


connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta.")
    }
});



//add column
// let column = "ALTER table dirección ADD COLUMN puerta INT;"
// connection.query(column, (err, res)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Columna añadida.');
//         console.log(res)
//     }
// })


//delete column

// let column = "ALTER TABLE dirección DROP COLUMN puerta"
// connection.query(column, (err, res)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Columna eliminada.');
//         console.log(res)
//     }
// })


//delete table
// let sql = "DROP TABLE dirección";
// connection.query(sql,  function (err, res) {
//     if(err) throw err;
//     console.log("Tabla eliminada.")
// })

//setear las notas a 0
// let sql ="UPDATE marks SET mark= 0";
// connection.query(sql, function (err, result){
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log('Dato actualizado.');
//             console.log(result)
//         }
//     })

//Obtener nombre y el primer apellido
// let sql ="SELECT first_name, last_name FROM students";
// connection.query(sql, function (err, result){
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log('Selección realizada.');
//             console.log(result);

//         }
//     })

//Obtener todos los datos de los profesores
// let sql ="SELECT first_name, last_name FROM teachers";
// connection.query(sql, function (err, result){
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log('Selección realizada.');
//             console.log(result);

//         }
//     });

//Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.

// let sql = "DELETE FROM marks WHERE date < '2013-01-01'";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Notas de hace más de 10 años borradas');
//                 console.log(result);

//             }
//         });



//Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5.

// let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Notas menores de 5 modificadas.');
//                 console.log(result);

//             }
//         });
