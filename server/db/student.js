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
        type: Sequelize.STRING,
        defaultValue: 'image'
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
