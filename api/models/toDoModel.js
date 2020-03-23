const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    task: {
        type: String,
        required: [true, 'se debe agregar una tarea']
    }
}, {
    timestamps:true
});

module.exports= model('ToDo', todoSchema )