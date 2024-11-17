const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const database = "form"
const user = "root"
const host = "localhost"
const password = ""
const port2 = 4013

const db = mysql.createConnection({
    host: host,
    port: port2,
    user: user,
    password: password,
    database: database
});

const PORT = 3001;

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado a la base de datos');
    }
});


app.use(cors());

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});




app.get('/getData', (req, res) => {
    db.query('SELECT * FROM alumno', (err, result) => {
        if (err) {
            res.send({
                status: 400,
                message: err
            })
        } else {
            res.send({
                status: 200,
                message: 'Datos obtenidos correctamente',
                data: result
            })
        }
    })
})

app.post('/postData', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const documento = req.body.documento;
    const telefono = req.body.telefono;
    db.query(`INSERT INTO alumno (nombre,correo,apellido,documento,telefono) VALUES (?, ?, ?, ?, ?)`, [nombre,apellido,correo,documento,telefono], 
        (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    message: err
                })
            } else {
                res.send({
                    status: 200,
                    message: 'Usuario ingresado correctamente correctamente',
                    data: result
                })
            }
        }
    )
})

app.put('/editData', (req, res) => {
    const {id, nombre, apellido, correo, documento, telefono} = req.body;
    db.query(`UPDATE alumno SET nombre = ?, apellido = ?, correo = ?, documento = ?, telefono = ? WHERE id = ?`, [nombre,apellido,correo,documento,telefono,id], 
        (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    message: err
                })
            } else {
                res.send({
                    status: 200,
                    message: 'Usuario actualizado correctamente',
                    data: result
                })
            }
        }
    )
})

app.delete('/deleteData', (req, res) => {
    const id = req.body.id;
    db.query(`DELETE FROM alumno WHERE id = ?`, [id], 
        (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    message: err
                })
            } else {
                res.send({
                    status: 200,
                    message: 'Usuario eliminado correctamente',
                    data: result
                })
            }
        }
    )
})