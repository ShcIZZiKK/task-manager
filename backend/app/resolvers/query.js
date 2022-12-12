module.exports = {
    projects: async (parent, args, { models }) => {
        return models.Project.find({});
    },
    project: async (parent, args, { models }) => {
        return models.Project.findById(args.id);
    },
    statuses: async (parent, args, { models }) => {
        return models.Status.find();
    },
    user: async (parent, args, { models }) => {
        return models.User.findOne({ _id: args.id });
    },
    users: async (parent, args, { models }) => {
        return models.User.find({});
    },
    me: async (parent, args, { models, user }) => {
        return models.User.findById(user.id);
    },
    news: async (parent, args, { models }) => {
        return models.NewsItem.find();
    },
    newsItem: async (parent, args, { models }) => {
        return models.NewsItem.findOne({ slug: args.slug });
    },
    // поправить
    comments: async (parent, args, { models }) => {
        return models.NewsItem.find();
    },
    roles: async (parent, args, { models }) => {
        return models.UserRole.find();
    },
    // поправить
    workTimes: async (parent, args, { models }) => {
        return models.WorkTime.find();
    },
};
