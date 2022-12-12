const mongoose = require('mongoose');

const newsItemSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        preview: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tag',
            }
        ]
    },
    {
        timestamps: true,
    }
);

const NewsItem = mongoose.model('NewsItem', newsItemSchema);

module.exports = NewsItem;
