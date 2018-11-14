const mongoose = require('mongoose');

const ReitorSchema = new mongoose.Schema({
    Nome:{
        type: String,
        required: true
    },
    Cargo:{
        type: String,
        required: true
    },
    Titulo:{
        type: String,
        required: true
    },
});

mongoose.model('Reitor', ReitorSchema);