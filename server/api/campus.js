const router = require('express').Router()
const { Campus, Student } = require('../db')
router.get('/', ({ query: { offset = 0, limit = 5 } }, res, next) => {
    Campus.findAll({
        offset,
        limit
    }).then(campuses => {
        res.send({
            offset: Number(offset) + campuses.length,
            campuses
        })
    }).catch(e => next(e))
})
router.get('/:id', ({ params: { id } }, res, next) => {
    Campus.findById(Number(id), {
        include: [{
            model: Student
        }]
    }).then(({ dataValues }) => {
        res.send({ ...dataValues })
    }).catch(e => next(e))
})
router.post('/', ({ body }, res, next) => {
    Campus.create(body, {
        returning: true
    }).then(campus => {
        res.send(campus)
    }).catch(() => {
        const err = new Error('Invalid submission')
        err.status = 400
        next(err)
    })
})
module.exports = router