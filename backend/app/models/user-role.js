const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission',
        },
    ],
});

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;
