const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        image: {
            type: String,
        },
        imageFull: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Status',
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        team: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
        ],
        royalties: {
            type: Number,
            required: true,
        },
        timeSpent: {
            type: Number,
            required: true,
            default: 0,
        },
        dateEnd: {
            type: Date,
            required: true,
            default: new Date(),
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        purpose: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
