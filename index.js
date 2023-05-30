const mysql = require('mysql2');

const helper = 'localhost';
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error) => {
    (error) ? console.log("Error en Conexion con DB") : console.log("Conexion Exitosa a DB"); 
});

let query;

function obtenerUsuarios() {
    query = `SELECT * FROM usuario`;
    connection.query(query, (error, results) => {
        (error) ? console.log("Error de Consulta de DB") : console.log("Usuarios Registrados: ",results);
    });
}

function crearUsuario(usuario){
    query = `INSERT INTO usuario (nombre) VALUES ('${usuario}')`;
    connection.query(query,(error,results)=>{
        (error) ? console.log("Error de Insercion en DB") : console.log("Usuario Registrado");
    })
}

function actualizarUsuario(id,usuario){
    query = `UPDATE usuario SET nombre='${usuario}' WHERE id='${id}'`;
    connection.query(query,(error,results)=>{
        (error) ? console.log("Error al Actualizar DB") : console.log("Usuario Actualizado con Exito")
    })
}

function eliminarUsuario(usuario){
    query = `DELETE FROM  usuario WHERE nombre='${usuario}'`;
    connection.query(query,(error,results)=>{
        (error) ? console.log("Error al Eliminar Registro de DB") : console.log("Usuario Eliminado con Exito")
    })
}

obtenerUsuarios();
