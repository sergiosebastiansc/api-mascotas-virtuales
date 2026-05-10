
const Pet = require('../models/Pet');

// Obtener todas las mascotas
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las mascotas', error: error.message });
  }
};

// Obtener una mascota por su ID
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar la mascota', error: error.message });
  }
};

// Crear una nueva mascota
const createPet = async (req, res) => {
  try {
    const { nombre, especie, animo, edad } = req.body;
    
    // Creamos la instancia y la guardamos
    const newPet = new Pet({ nombre, especie, animo, edad });
    const savedPet = await newPet.save();
    
    res.status(201).json({mensaje: 'Mascota creada correctamente',  mascota:savedPet});
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la mascota', error: error.message });
  }
};

// Actualizar una mascota existente
const updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true, // Devuelve el documento actualizado
        runValidators: true // Ejecuta las validaciones del esquema
      }
    );

    if (!updatedPet) {
      return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }

    res.status(200).json({ mensaje: 'Mascota actualizada correctamente', mascota: updatedPet });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar la mascota', error: error.message });
  }
};

// Eliminar una mascota
const deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    
    if (!deletedPet) {
      return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }

    res.status(200).json({ 
      mensaje: 'Mascota eliminada correctamente',
      mascota: deletedPet 
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la mascota', error: error.message });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet
};