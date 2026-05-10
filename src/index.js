const express = require('express');
const mongoose = require('mongoose');
const petRoutes = require('./routes/petRoutes');

const app = express();
const PORT = 3000;

// Middleware para trabajar con JSON
app.use(express.json());

// Conexión a la base de datos MongoDB local

mongoose.connect('mongodb://localhost:27017/mascotasdb')
  .then(() => {
    console.log('Conexión exitosa a MongoDB local');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

  

// Ruta inicial (GET /)
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de Mascotas Virtuales'
  });
});

// Registrar las rutas de la API
app.use('/pets', petRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});