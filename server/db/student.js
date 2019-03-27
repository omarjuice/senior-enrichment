const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4JtwQsqBfhno8hJt4sa_PPCrJmarnS0RcL3QOZLTmCmJQihR',
        allowNull: false
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            max: 4.0,
            min: 0.0
        }
    }
})
module.exports = Student
