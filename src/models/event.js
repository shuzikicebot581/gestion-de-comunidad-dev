const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  resources: [{ type: String }],
  comments: [{ user: String, message: String }]
});

module.exports = mongoose.model('Event', EventSchema);