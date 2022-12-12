module.exports = {
    author: async (comment, args, { models }) => {
        return models.User.findOne({ _id: comment.author });
    },
};
