const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('./db');
const schema = require('./schema');
const models = require('./models');

// Порт запуска сервера
const port = process.env.PORT || 8000;
// Хост для базы данных
const DB_HOST = process.env.DB_HOST;

const app = express();

// app.use(helmet());
app.use(cors());

const getUser = (token) => {
    if (token) {
        try {
            // Возвращаем информацию пользователя из токена
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            // Если с токеном возникла проблема, выбрасываем ошибку
            new Error('Session invalid');
        }
    }
};

// Получаем токен пользователя из заголовков
// const token = req.headers.authorization;
// Пытаемся извлечь пользователя с помощью токена
// const user = getUser(token);

app.use(
    '/graphql',
    graphqlHTTP((req) => {
        return {
            schema,
            graphiql: true,
            context: {
                user: getUser(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTIwYmIzZWJlMzBhNmQ2MWVmMmE3MSIsImlhdCI6MTY2MjEyODUzOX0.IsKyjAWtPnAvlTCV-BQ3-xyS-hJuGdiysGFRQ3WmEXo'
                ),
                // user: getUser(req.headers.authorization),
                models,
            },
        };
    })
);

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//     context: ({ req }) => {
//         // Получаем токен пользователя из заголовков
//         const token = req.headers.authorization;
//         // Пытаемся извлечь пользователя с помощью токена
//         const user = getUser(token);
//         // Пока что будем выводить информацию о пользователе в консоль:
//         console.log(user);
//
//         return { models, user };
//     },
// });

// const authenticateToken = (req, res, next) => {
//     const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//     console.log(ip, req.originalUrl, SECRET);
//     next();
// }

// Подключаем БД
db.connect(DB_HOST);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
