const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/gestión-comunidad', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Rutas
app.get('/', (req, res) => {
  res.send('API de Gestión de Comunidad');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
