const Sequelize = require('sequelize')
const db = require('./database')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.pinimg.com/originals/33/2b/3f/332b3fe64e5d6d2d9812a09fc0267f2d.jpg',
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
    }
})
module.exports = Campus
