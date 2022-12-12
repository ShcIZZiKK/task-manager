module.exports = {
    permissions: async (role, args, { models }) => {
        return models.Permission.find({ _id: { $in: role.permissions } }).sort({ _id: -1 });
    },
};
