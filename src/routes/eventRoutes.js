const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Crear evento
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  try {
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtener todos los eventos
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

module.exports = router;