
const { Schema, model } = require('mongoose');

const tareaSchema = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    status: { type: String, default: 'New'},
    date: { type: Date, default: new Date() }
});

module.exports = model('tareas', tareaSchema);