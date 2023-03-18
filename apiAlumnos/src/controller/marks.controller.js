const connection = require("../dataBase")


function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
}


//GET /media?id=5, o /media:5. Obtiene la nota media del id del alumno pasado por parámetro,
//elegir cualquiera de los dos formatos.

function getMarksAvg(request, response) {
  let sql;
  if (request.query.is == null) sql = "SELECT * FROM marks";
  else
    sql =
      "SELECT AVG (mark), subject_id FROM marks WHERE student_id = " +
      request.query.id;
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
}



 //GET /apuntadas?id=5 o /apuntadas:5. La lista de las asignaturas a la que están apuntadas el
//alumno del id pasado por parámetro, elegir cualquiera de los dos formatos.

function getMarksTitle(request, response){
    let sql;
     if(request.query.is == null)
       sql = "SELECT * FROM marks";
     else
       sql = "SELECT title, student_id FROM marks" + request.query.id;
         connection.query(sql, function (err, result)
     {
         if (err)
         console.log(err);
         else{
             response.send(result)
         }
     })
 }
 


//GET /apuntadas. Devuelve los nombres y apellidos de todos los alumnos y los nombres de las
//asignaturas a la que están apuntadas.


function getMarksNameLast(request, response){
    let sql;
     if(request.query.is == null)
       sql = "SELECT * FROM marks";
     else
       sql = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.student_id = marks.student_id) JOIN subjects ON(marks.subject_id = subjects.subject_id)" + request.query.id;
         connection.query(sql, function (err, result)
     {
         if (err)
         console.log(err);
         else{
             response.send(result)
         }
     })
 }
 


// GET /impartidas?id=5 o /impartidas:5. La lista de las asignaturas que imparte el profesor cuyo
// id es pasado por parámetro, elegir cualquiera de los dos formatos.

function getMarksTeacher(request, response){
    let sql;
     if(request.query.is == null)
       sql = "SELECT * FROM teachers";
     else
       sql = "SELECT subject_id, COUNT(*) AS teachers_subject FROM subject_teacher GROUP BY subject_id" + request.query.id;
         connection.query(sql, function (err, result)
     {
         if (err)
         console.log(err);
         else{
             response.send(result)
         }
     })
 }
 

// GET /impartidas. Devuelve los nombres y apellidos de todos los profesores y los nombres de las
// asignaturas que imparten.
function getMarksNameLastTeacher(request, response){
    let sql;
     if(request.query.is == null)
       sql = "SELECT * FROM teachers";
     else
       sql = "SELECT first_name, last_name, title FROM teachers AS t JOIN subjects AS s ON (t.teacher_id = s.subject_id)" + request.query.id;
         connection.query(sql, function (err, result)
     {
         if (err)
         console.log(err);
         else{
             response.send(result)
         }
     })
 }
 

module.exports = {getStart, getMarksAvg, getMarksTitle, getMarksNameLast, getMarksTeacher, getMarksNameLastTeacher}