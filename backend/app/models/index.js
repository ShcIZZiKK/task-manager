const Comment = require('./comment');
const NewsItem = require('./newsItem');
const Permission = require('./permission');
const Project = require('./project');
const Status = require('./status');
const Tag = require('./tag');
const User = require('./user');
const UserRole = require('./user-role');
const WorkTime = require('./workTime');

const models = {
    Comment,
    NewsItem,
    Permission,
    Project,
    Status,
    Tag,
    User,
    UserRole,
    WorkTime,
};

module.exports = models;
