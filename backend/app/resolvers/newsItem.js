module.exports = {
    author: async (newsItem, args, { models }) => {
        return models.User.findOne({ _id: newsItem.author });
    },
    tags: async (newsItem, args, { models }) => {
        return models.Tag.find({ _id: { $in: newsItem.tags } }).sort({ _id: -1 });
    },
};
