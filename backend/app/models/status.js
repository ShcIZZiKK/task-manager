const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    title: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    color: {
        type: String,
        required: true,
    },
    percent: {
        type: Number,
        required: true
    }
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
