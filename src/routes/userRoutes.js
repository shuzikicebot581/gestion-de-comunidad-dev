const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Crear usuario
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;