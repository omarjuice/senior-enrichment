require('dotenv').config()
const expect = require('expect')
const request = require('supertest')
const { db } = require('../server/db')
const app = require('../server')

const PORT = process.env.NODE_ENV === 'test' ? 3001 : 3000
console.log('NODE_ENV: ', process.env.NODE_ENV);

before(() => db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
    .then(() => {
        console.log('db synced')
        app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
    }))

describe('/', () => {
    it('Should return 200', done => {
        request(app)
            .get('/api/')
            .expect(200)
            .end(done)
    })
})
