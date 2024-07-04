module.exports = (sequelize, Sequelize) => {
    const task = sequelize.define('tes', {
        id: {
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        completed: {
            type: Sequelize.BOOLEAN,
        },
    });
    return task;
}
