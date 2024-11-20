const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const {urlencoded} = require("body-parser"); // Asegúrate de que mysql2 esté instalado
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes (si es necesario para POST/PUT)
app.use(cors());
app.use(express.json()); // Para recibir JSON
app.use(urlencoded({ extended: true })); // Para procesar formularios si es necesario

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Farma100.',
  port: 3306,
  database: 'tarea',
});

// Verificamos la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Obtener todas las tareas de la base de datos
app.get('/lista', (req, res) => {
  connection.query('SELECT * FROM lista', function (error, results, fields) {
    if (error) {
      console.error('Error en la consulta:', error);
      return res.status(500).send('Error en la consulta');
    }

    // Verifica los resultados en la consola
    console.log('Resultados de la consulta:', results);

    // Enviar respuesta en formato JSON
    res.json(results);
  });
});

// Obtener todas las tareas de la base de datos
app.post('/crearLista', (req, res) => {
  const { nombre, descripcion, categoria, fecha } = req.body;
  // Verifica si la fecha está en el formato adecuado
  const fechaFormateada = fecha ? fecha : new Date().toISOString().split('T')[0]; // Usa la fecha actual si no se recibe

  connection.query('INSERT INTO  lista(nombre, categoria, descripcion, fecha) values (?,?,?,?) ', [nombre,descripcion,categoria,fecha], function (error, results, fields) {
    if (error) {
      console.error('Error en la consulta:', error);
      return res.status(500).send('Error en la consulta');
    }

    // Verifica los resultados en la consola
    console.log('Resultados de la consulta:', results);

    // Enviar respuesta en formato JSON
    res.json({
      message: 'Evento creada correctamente',
      tareaId: results.insertId
    });
  });
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
