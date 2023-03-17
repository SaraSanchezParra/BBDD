const connection = require("../dataBase")

let alumno = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
}

function getStudent(request, response){
   let sql;
    if(request.query.is == null)
      sql = "SELECT * FROM students";
    else
      sql = "SELECT * FROM students WHERE id =" + request.query.id;
        connection.query(sql, function (err, result)
    {
        if (err)
        console.log(err);
        else{
            response.send(result)
        }
    })
}


function postStudent(request, response){
    console.log(request.body);
    let sql = "INSERT INTO students(first_name, last_name, group_id, Ingreso)" +
            "VALUES ('" + request.body.first_name + "', '" +
                            request.body.last_name + "', '" +
                            request.body.group_id + "', '" +
                            request.body.Ingreso + "')";
    console.log(sql);
    connection.query(sql, function (err,result){
            if (err)
            console.log(err);
            else{
                console.log(result);
                if(result.insertId)
                response.send(String(result.insertId))
                else
                response.send("-1");
            }
    })
}

function putStudent(request, response){

    console.log(request.body);
    let params = [request.body.first_name,
        request.body.last_name,
        request.body.group_id,
        request.body.Ingreso]


    let sql = "UPDATE students SET first_name = COALESCE(?, first_name), " + "last_name = COALESCE (?, last_name)," + "group_id = COALLESCE(?, group_id)," + "Ingreso = COALLESCE(?, Ingreso) WHERE id =?";

console.log(sql);
connection.query(sql, params, function (err, result){
    if(err)
    console.log(err);
    else{
    response.send(result);
}
})
}

module.exports = {getStart, getStudent, postStudent, putStudent}