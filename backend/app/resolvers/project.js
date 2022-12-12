module.exports = {
    client: async (project, args, { models }) => {
        return models.User.findById({ _id: project.client });
    },
    author: async (project, args, { models }) => {
        return models.User.findById({ _id: project.author });
    },
    team: async (project, args, { models }) => {
        return models.User.find({ _id: { $in: project.team } }).sort({ _id: -1 });
    },
    status: async (project, args, { models }) => {
        return models.Status.findById({ _id: project.status });
    },
    timeSpent: async (project, args, { models }) => {
        return models.WorkTime.find({ project: project._id }).sort({ _id: -1 });
    },
    comments: async (project, args, { models }) => {
        return models.Comment.find({ project: project._id }).sort({ _id: -1 });
    },
};
