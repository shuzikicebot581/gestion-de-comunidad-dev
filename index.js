const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Habilitar CORS para todas las solicitudes
app.use(express.json()); // Analizar solicitudes JSON

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/gestión-comunidad', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Rutas
app.get('/', (req, res) => {
  res.send('API de Gestión de Comunidad'); // Respuesta a la ruta raíz
});

// Manejo de errores para todas las rutas
app.use((err, req, res, next) => {
  console.error(err.stack); // Registrar el error en la consola
  res.status(500).send('Error interno del servidor'); // Enviar respuesta de error
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje de inicio del servidor
});