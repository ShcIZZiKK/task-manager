// const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./resolvers');

const typeDefs = `
    scalar DateTime
    type Project {
        id: ID!
        image: String
        imageFull: String
        name: String!
        description: String!
        status: Status
        client: User
        author: User!
        team: [User!]
        royalties: Float!
        timeSpent: [WorkTime]
        dateEnd: DateTime!
        comments: [Comment]
        createdAt: DateTime!
        updatedAt: DateTime!
        purpose: String!
    }
    type User {
        id: ID!
        username: String!
        email: String!
        role: UserRole!
        telegram: String
        avatar: String
        workTimes: [WorkTime]
        projects: [Project]
        createdAt: DateTime!
        post: String
        projectsCount: Int
    }
    type Status {
        id: ID!
        name: String!
        title: String!
        color: String!
        percent: Float!
    }
    type WorkTime {
        id: ID!
        project: Project!
        author: User!
        duration: Float!
    }
    type UserRole {
        id: ID!
        type: String!
        name: String!
        permissions: [Permission]!
    }
    type Permission {
        id: ID!
        name: String!
    }
    type Comment {
        id: ID!
        author: User!
        project: Project!
        text: String!
        createdAt: DateTime!
    }
    type NewsItem {
        id: ID!
        slug: String
        image: String
        title: String!
        preview: String!
        text: String!
        author: User!
        tags: [Tag]
        createdAt: DateTime!
    }
    type Tag {
        id: ID!
        name: String!
    }
    type Query {
        projects: [Project]!
        project(id: ID!): Project!
        statuses: [Status]!
        user(id: ID!): User!
        users: [User!]!
        me: User!
        news: [NewsItem]!
        newsItem(slug: String!): NewsItem!
        comments(id: ID!): [Comment]!
        roles: [UserRole!]!
        workTimes: [WorkTime]!
    }
    type Mutation {
        createProject(name: String!, description: String!, royalties: Float!): Project!
        updateProject(id: ID!, name: String, description: String, royalties: Float): Project!
        deleteProject(id: ID!): Boolean!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
        createWorkTimes(project: String! duration: Float!): Boolean!
        createComment(project: String!, text: String! ): Comment!
        updateComment(id: ID!, text: String): Comment!
        deleteComment(id: ID!): Boolean!
        createNewsItem(slug: String, image: String, title: String!, text: String!): NewsItem!
        updateNewsItem(id: ID!, slug: String, image: String, title: String, text: String): NewsItem!
        deleteNewsItem(id: ID!): Boolean!
    }
`;
// updateProject(id: ID!, title: String!, text: String!): Project!
//     deleteProject(id: ID!): Boolean!

module.exports = makeExecutableSchema({ typeDefs, resolvers });
