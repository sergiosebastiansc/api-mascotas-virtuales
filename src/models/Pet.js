const mongoose = require('mongoose');

// Definición del esquema para las mascotas virtuales
const petSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  especie: {
    type: String,
    required: [true, 'La especie es obligatoria'],
    trim: true
  },
  animo: {
    type: String,
    default: 'Feliz'
  },
  edad: {
    type: Number,
    min: [0, 'La edad no puede ser negativa'],
    default: 0
  }
});

module.exports = mongoose.model('Pet', petSchema);
