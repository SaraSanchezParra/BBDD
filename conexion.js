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
// let sql ="SELECT id_teacher, first_name, last_name FROM teachers";
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

//Día2


//Usando el ejemplo de base de datos que tenemos ya implementado desde unidades anteriores,
//calcular la nota media de los alumnos de la asignatura 1.

//SELECT AVG(mark) FROM marks WHERE subject_id = 1;

// let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Nota media de los alumnos de la asignatura 1.');
//                 console.log(result);

//             }
//         });

// Calcular el número total de alumnos que hay en el bootcamp.

// let sql = "SELECT COUNT(*) FROM students";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Número total de alumnos en el Bootcamp');
//                 console.log(result);

//             }
//         });


// Listar todos los campos de la tabla “groups”.

// let sql ="SELECT * FROM grupos";
// connection.query(sql, function (err, result){
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log('Selección realizada.');
//             console.log(result);

//         }
//     });

// Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año
// pasado (no utilices BETWEEN).

// let sql = "DELETE FROM marks WHERE mark >= 5 AND date > '2022-01-01'";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Notas del año pasado borradas');
//                 console.log(result);

//             }
//         });

// Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla
// de estudiantes debe tener un campo que sea el año de ingreso.

// let column = "ALTER table students ADD COLUMN Ingreso INT;"
// connection.query(column, (err, res)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Columna añadida.');
//         console.log(res)
//     }
// })


// let sql = "SELECT * FROM students WHERE ingreso > '2022-01-01'";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Estudiantes que están en el Bootcamp este año');
//                 console.log(result);

//             }
//         });

// Calcular el numero de profesores que hay por cada asignatura.

// let sql = "SELECT subject_id, COUNT(*) AS teachers_subject FROM subject_teacher GROUP BY subject_id";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Número de profesores por cada asignatura');
//                 console.log(result);

//             }
//         });

// El desarrollo de estas consultas se tiene que hacer tanto en Workbench como en Node.js

//RETO2
// Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
// mayor de 8 y la nota tenga fecha del año pasado.

// let sql = "SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date = '2022-01-01')";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Nota de los alumnos');
//                 console.log(result);

//             }
//         });



// Obtén la media de las notas que se han dado en el último año por asignatura.

// let sql = "SELECT AVG (mark), subject_id FROM marks WHERE DATE > 01-01-2022 GROUP BY subject_id" ;
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Valor promedio de las notas del último año');
//                 console.log(result);

//             }
//         });



// Obtén la media aritmética de las notas que se han dado en el último año por alumno.
// let sql = "SELECT AVG (mark), student_id FROM marks WHERE DATE > 01-01-2022 GROUP BY student_id";
// connection.query(sql, function (err, result){
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Media aritmética de las notas del último año');
//                 console.log(result);

//             }
//         });

// El desarrollo de estas consultas se tiene que hacer tanto en Workbench como en Node.js

