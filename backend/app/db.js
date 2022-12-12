const mongoose = require('mongoose');

module.exports = {
    connect: (DB_HOST) => {
        // Подключаемся к БД
        mongoose.connect(DB_HOST);

        mongoose.connection.on('error', (error) => {
            console.error(error);
            console.log(`MongoDB connection error. Please make sure MongoDB is running.`);

            process.exit();
        });
    },

    close: () => {
        mongoose.connection.close();
    },
};
