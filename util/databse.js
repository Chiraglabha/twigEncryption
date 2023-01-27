const Sequelize = require('sequelize');

const sequelize = new Sequelize('adddata','root','',{
    dialect : 'mysql',
    host : "localhost",
})

sequelize
        .authenticate()
        .then(function(err) {
            if (!!err) {
                console.log('Unable to connect to the database:', err)
            } else {
                console.log('Connection has been established successfully.')
            }
        });

module.exports = sequelize;