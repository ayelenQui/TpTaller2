const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json()); // Permite que el cuerpo de la solicitud sea JSON

// Datos de ejemplo (en un caso real usarías una base de datos)
let tasks = [
  { id: 1, title: 'Estudiar Angular', completed: false },
  { id: 2, title: 'Comprar víveres', completed: false },
  { id: 3, title: 'Hacer ejercicio', completed: true },
];

// Endpoints

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title } = req.body;

  let task = tasks.find(t => t.id === taskId);
  if (task) {
    task.title = title;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

// Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.status(204).end(); // Devuelve un estado vacío para indicar éxito
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
