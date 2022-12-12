module.exports = {
    role: async (user, args, { models }) => {
        return models.UserRole.findOne({ _id: user.role });
    },
    workTimes: async (user, args, { models }) => {
        return models.WorkTime.find({ author: user._id });
    },
    projects: async (user, args, { models }) => {
        return models.Project.find({ team: { $in: user._id } }).sort({ _id: -1 });
    },
    projectsCount: async (user, args, { models }) => {
        const projects = await models.Project.find({ team: { $in: user._id } });

        return projects ? projects.length : 0;
    },
};
