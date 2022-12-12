const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const CyrillicToTranslit = require('cyrillic-to-translit-js');
require('dotenv').config();

const gravatar = require('../utils/gravatar');
const cyrillicToTranslit = new CyrillicToTranslit();

/**
 * Проверяет может ли пользователь выполнить действие
 * @param models - бд
 * @param userId - id пользователя
 * @param action - действие
 */
const checkUserPermissions = async (models, userId, action) => {
    const { role } = await models.User.findById(userId);
    const { permissions: permissionsUser } = await models.UserRole.findOne(
        { _id: role },
        'permissions'
    );
    const permissions = await models.Permission.find({ _id: { $in: permissionsUser } });

    return Boolean(permissions.find((item) => item.name === 'write'));
};

module.exports = {
    createProject: async (parent, args, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (!isUserHasPermission) {
            throw new Error('У вас нет прав создавать проекты');
        }

        const { name, description, client: clientId, royalties, dateEnd } = args;
        const author = mongoose.Types.ObjectId(user.id);
        const client = mongoose.Types.ObjectId(clientId);
        const team = [author];

        const status = await models.Status.findOne({ name: 'new' });

        return await models.Project.create({
            name,
            description,
            royalties,
            dateEnd,
            author,
            client,
            team,
            status,
        });
    },
    updateProject: async (parent, { id, ...content }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим проект
        const project = await models.Project.findById(id);
        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (project && !isUserHasPermission) {
            throw new Error('У вас нет прав редактировать проект');
        }

        return models.Project.findOneAndUpdate(
            {
                _id: id,
            },
            {
                $set: {
                    ...content,
                },
            },
            {
                new: true,
            }
        );
    },
    deleteProject: async (parent, { id }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим проект и разрешения пользователя
        const project = await models.Project.findById(id);
        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'delete');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (project && !isUserHasPermission) {
            throw new Error('У вас нет прав удалять проекты');
        }

        try {
            await project.remove();

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    },
    signUp: async (parent, { username, email, password }, { models }) => {
        const salt = 10;
        // Хешируем пароль
        const hashed = await bcrypt.hash(password, salt);

        // Нормализуем email
        email = email.trim().toLowerCase();

        // Создаём url аватара
        const avatar = gravatar(email);

        // Получаем дефолтную роль пользователя
        const defaultRole = await models.UserRole.findOne({ type: 'public' });

        try {
            const user = await models.User.create({
                username,
                email,
                avatar,
                password: hashed,
                role: defaultRole,
            });

            // Создаем и возвращаем json web token
            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error(`Error create account: ${error}`);
        }
    },
    signIn: async (parent, { username, email, password }, { models }) => {
        if (email) {
            // Нормализуем email
            email = email.trim().toLowerCase();
        }

        const user = await models.User.findOne({
            $or: [{ email }, { username }],
        });

        // Если пользователь не найден, выбрасываем ошибку аутентификации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Если пароли не совпадают, выбрасываем ошибку аутентификации
        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new Error('Error signing in');
        }

        // Создаем и возвращаем json web token
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    },
    createWorkTimes: async (parent, args, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (!isUserHasPermission) {
            throw new Error('У вас нет прав создавать рабочие часы');
        }

        const { project: projectId, duration } = args;
        const author = mongoose.Types.ObjectId(user.id);
        const project = mongoose.Types.ObjectId(projectId);

        try {
            await models.WorkTime.create({
                project,
                duration,
                author,
            });

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    },
    createComment: async (parent, args, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (!isUserHasPermission) {
            throw new Error('У вас нет прав создавать комментарии');
        }

        const { project: projectId, text } = args;
        const author = mongoose.Types.ObjectId(user.id);
        const project = mongoose.Types.ObjectId(projectId);

        return await models.Comment.create({
            project,
            text,
            author,
        });
    },
    updateComment: async (parent, { id, text }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим комментарий
        const comment = await models.Comment.findById(id);

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (comment && String(comment.user) !== user.id) {
            throw new Error('У вас нет прав обновить это комментарий');
        }

        return models.Comment.findOneAndUpdate(
            {
                _id: id,
            },
            {
                $set: {
                    text,
                },
            },
            {
                new: true,
            }
        );
    },
    deleteComment: async (parent, { id }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим комментарий
        const comment = await models.Comment.findById(id);

        // Если владелец комментария и текущий пользователь не совпадают, выбрасываем запрет на действие
        if (comment && String(comment.user) !== user.id) {
            throw new Error('У вас нет прав удалить этот комментарий');
        }

        try {
            await comment.remove();

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    },
    createNewsItem: async (parent, args, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (!isUserHasPermission) {
            throw new Error('У вас нет прав создавать новости');
        }

        const author = mongoose.Types.ObjectId(user.id);
        let { slug, title } = args;

        if (!slug) {
            slug = cyrillicToTranslit.transform(title, '_').toLowerCase();
        }

        return await models.NewsItem.create({
            author,
            slug,
            ...args,
        });
    },
    updateNewsItem: async (parent, { id, ...content }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим новости
        const newsItem = await models.NewsItem.findById(id);
        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'write');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (newsItem && !isUserHasPermission) {
            throw new Error('У вас нет прав обновить эту новость');
        }

        return models.NewsItem.findOneAndUpdate(
            {
                _id: id,
            },
            {
                $set: {
                    ...content,
                },
            },
            {
                new: true,
            }
        );
    },
    deleteNewsItem: async (parent, { id }, { models, user }) => {
        // Если пользователь не авторизован, выбрасываем ошибку авторизации
        if (!user) {
            throw new Error('Вы не авторизованы');
        }

        // Находим комментарий
        const newsItem = await models.NewsItem.findById(id);
        // Проверяем разрешение пользователя
        const isUserHasPermission = checkUserPermissions(models, user.id, 'delete');

        // Если текущего пользователь нет достаточных прав, выбрасываем ошибку
        if (newsItem && !isUserHasPermission) {
            throw new Error('У вас нет прав удалить новость');
        }

        try {
            await newsItem.remove();

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    },
};
