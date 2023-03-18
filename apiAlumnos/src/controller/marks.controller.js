const connection = require("../dataBase")


function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
}


//GET /media?id=5, o /media:5. Obtiene la nota media del id del alumno pasado por parámetro,
//elegir cualquiera de los dos formatos.

function getMarksAvg(request, response) {

     let sql = "SELECT AVG(mark) AS average_mark FROM marks WHERE student_id = ?";
     let id = request.params.id;
    connection.query(sql, [id], function (err, result) {
      if (err) console.log(err);
      else {
        response.send(result);
      }
    });
  }
  



 //GET /apuntadas?id=5 o /apuntadas:5. La lista de las asignaturas a la que están apuntadas el
//alumno del id pasado por parámetro, elegir cualquiera de los dos formatos.

function getMarksTitle(request, response) {
  let sql;
  if (request.params.id == null) {
    // Si no se especifica id, se obtiene la lista de todas las asignaturas y los estudiantes a los que están apuntadas
    sql =
      "SELECT students.first_name, students.last_name, subjects.title " +
      "FROM students " +
      "INNER JOIN marks ON students.id = marks.student_id " +
      "INNER JOIN subjects ON marks.subject_id = subjects.id";
  } else {
    // Si se especifica id, se obtiene la lista de asignaturas a las que está apuntado el alumno con ese id
    sql =
      "SELECT DISTINCT subjects.title " +
      "FROM marks " +
      "INNER JOIN subjects ON marks.subject_id = subjects.subject_id " +
      "WHERE marks.student_id = " +
      request.params.id;
  }
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
}



//GET /apuntadas. Devuelve los nombres y apellidos de todos los alumnos y los nombres de las
//asignaturas a la que están apuntadas.


function getMarksNameLast(request, response){
        let responseArray=[];
        sqlSubjects= "SELECT * FROM subjects";
        connection.query(sqlSubjects, function(err, result){
            for(let i = 0; i< result.length; i++){
                console.log(result[i].title);
                let studentsSql = "SELECT students.first_name, students.last_name FROM students JOIN marks ON (students.student_id = marks.student_id) WHERE marks.subject_id = " +  result[i].subject_id;
                connection.query(studentsSql, function(err, result2){
                    responseArray.push({title: result[i].title, students: result2});
                    if(i==result.length-1){
                        response.send(responseArray);
                    }
                });
            }
        });
 }



// GET /impartidas?id=5 o /impartidas:5. La lista de las asignaturas que imparte el profesor cuyo
// id es pasado por parámetro, elegir cualquiera de los dos formatos.

function getMarksTeacher(request, response){
    let sql;
    if(request.params.id == null) {
        sql = "SELECT * FROM teachers";
    } else {
        sql = "SELECT subjects.title FROM subjects, subject_teacher, teachers WHERE teachers.teacher_id = subject_teacher.teacher_id AND subject_teacher.subject_id = subjects.subject_id AND teachers.teacher_id =" + request.params.id;
    }
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            response.send(result);
        }
    })
}

 

// GET /impartidas. Devuelve los nombres y apellidos de todos los profesores y los nombres de las
// asignaturas que imparten.
function getMarksNameLastTeacher(request, response){
    let sql= "SELECT first_name, last_name, title FROM teachers AS t JOIN subject_teacher AS st ON (t.teacher_id = st.teacher_id) JOIN subjects AS s ON(st.subject_id = s.subject_id)"
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