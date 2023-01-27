const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require('../util/databse');
const saltRounds = 10;

const Signup  =  sequelize.define('signup', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },

});
    //     hooks: {
    //      beforeCreate: async (user) => {
    //       if (user.password ) {
    //        const salt = await bcrypt.genSaltSync(10, 'a');
    //        user.password = bcrypt.hashSync(user.password, salt);
    //       }
    //     }
    // }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => { if (err) throw err; console.log(hashedPassword); })


    // const seq = 'INSERT INTO signup (password) VALUES (hashedPassword)';


    

module.exports = Signup;