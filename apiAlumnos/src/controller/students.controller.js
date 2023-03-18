const connection = require("../dataBase")

let alumno = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
}

function getStudent(request, response) {
    let sql;
    if (request.params.id == null) { 
      sql = "SELECT * FROM students";
    } else {
      sql = "SELECT * FROM students WHERE student_id =" + request.params.id; 
    }
    connection.query(sql, function(err, result) {
      if (err) {
        console.log(err);
        response.status(500).send("Error retrieving students");
      } else {
        response.send(result);
      }
    });
  }



  function postStudent(request, response) {
    const { first_name, last_name, group_id, Ingreso } = request.body;
    const sql = `INSERT INTO students (first_name, last_name, group_id, Ingreso) VALUES (?, ?, ?, ?)`;
    const params = [first_name, last_name, group_id, Ingreso];
    
    connection.query(sql, params, function (err, result) {
      if (err) {
        console.log(err);
        response.status(500).send("Error al agregar estudiante");
      } else {
        console.log(result);
        if (result.insertId) {
          response.status(201).json({ message: "Estudiante agregado", id: result.insertId });
        } else {
          response.status(500).send("Error al agregar estudiante");
        }
      }
    });
  }
  

  function putStudent(request, response) {
    console.log(request.body);
    let id = request.params.id; // Se obtiene el id desde la query
    let params = [
      request.body.first_name,
      request.body.last_name,
      request.body.group_id,
      request.body.ingreso,
      id
    ];
  
    let sql =
      "UPDATE students SET first_name = COALESCE(?, first_name), " +
      "last_name = COALESCE(?, last_name), " +
      "group_id = COALESCE(?, group_id), " +
      "ingreso = COALESCE(?, ingreso) " +
      "WHERE student_id = ?";
  
    console.log(sql);
    connection.query(sql, params, function (err, result) {
      if (err) {
        console.log(err);
        response.status(500).send("Error al actualizar al alumno.");
      } else {
        response.send(
          `Alumno actualizado con éxito: ${result.changedRows} filas actualizadas.`
        );
      }
    });
  }
  

  function deleteStudent(request, response) {
    let id = request.params.id;
    let sql = "DELETE FROM students WHERE student_id = ?";
    connection.query(sql, [id], function (err, result) {
      if (err) {
        console.log(err);
        response.status(500).send("Error al eliminar al alumno.");
      } else {
        console.log("Alumno eliminado");
        console.log(result);
        response.send(`Alumno eliminado con éxito: ${result.affectedRows} filas eliminadas.`);
      }
    });
  }
  


module.exports = {getStart, getStudent, postStudent, putStudent, deleteStudent}