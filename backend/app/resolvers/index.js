const Comment = require('./comment');
const Query = require('./query');
const Mutation = require('./mutation');
const NewsItem = require('./newsItem');
const Project = require('./project');
const User = require('./user');
const UserRole = require('./user-role');
const { DateTimeResolver } = require('graphql-scalars');

module.exports = {
    Comment,
    Query,
    Mutation,
    NewsItem,
    Project,
    UserRole,
    User,
    DateTime: DateTimeResolver,
};
