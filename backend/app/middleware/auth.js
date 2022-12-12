const jwt = require('jsonwebtoken');

// Пытаемся извлечь пользователя с помощью токена
module.exports = (token) => {
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
