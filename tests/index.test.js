require('dotenv').config()
const faker = require('faker')
const expect = require('expect')
const request = require('supertest')
const { db } = require('../server/db')
const app = require('../server')
const { seed, campuses: seedCampuses, students: seedStudents } = require('../seed')
const campusSchema = {
    name: expect.any(String),
    imageUrl: expect.any(String),
    address: expect.any(String),
    description: expect.any(String)
}
const studentSchema = {
    firstName: expect.any(String),
    lastName: expect.any(String),
    imageUrl: expect.any(String),
    email: expect.any(String),
    gpa: expect.any(Number)
}

const PORT = process.env.NODE_ENV === 'test' ? 3001 : 3000
console.log('NODE_ENV: ', process.env.NODE_ENV);

before(() => db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
    .then(() => {
        console.log('db synced')
        app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
    }))
beforeEach(async () => {
    await seed().catch(e => console.log('ERROR'))
})
describe('/', () => {
    it('Should return 200', done => {
        request(app)
            .get('/api/')
            .expect(200)
            .end(done)
    })
})
describe('GET /campuses', () => {
    const cursor = 2
    it('Should get all campuses', done => {
        request(app)
            .get('/api/campuses')
            .expect(200)
            .expect(({ body: { offset, campuses } }) => {
                expect(offset).toBe(seedCampuses.length)
                expect(campuses.length).toBe(3)
                for (let campus of campuses) {
                    expect(campus).toMatchObject(campusSchema)
                }
            }).end(done)
    })
    it('Should get campuses from offset', done => {
        request(app)
            .get('/api/campuses')
            .query({
                offset: cursor
            })
            .expect(200)
            .expect(({ body: { offset, campuses } }) => {
                expect(offset).toBe(seedCampuses.length)
                expect(campuses.length).toBe(1)
            }).end(done)
    })
})
describe('GET /students', () => {
    const cursor = 2
    it('Should get all students', done => {
        request(app)
            .get('/api/students')
            .expect(200)
            .expect(({ body: { offset, students } }) => {
                expect(offset).toBe(5)
                expect(students.length).toBe(5)
                for (let student of students) {
                    expect(student).toMatchObject(studentSchema)
                }
            }).end(done)
    })
    it('Should get students from offset', done => {
        request(app)
            .get('/api/students')
            .query({
                offset: cursor
            })
            .expect(200)
            .expect(({ body: { offset, students } }) => {
                expect(offset).toBe(cursor + 5)
                expect(students.length).toBe(5)
            }).end(done)
    })
})
describe('GET /campuses/:id', () => {

    it('Should get campus with students', done => {
        const id = 2
        const seedCampus = seedCampuses[id - 1]
        request(app)
            .get('/api/campuses/' + id)
            .expect(200)
            .expect(({ body: campus }) => {
                expect(campus).toMatchObject({
                    ...seedCampus,
                    id,
                    students: expect.any(Array)
                })
                for (let student of campus.students) {
                    expect(student).toMatchObject(studentSchema)
                }
            }).end(done)
    })
    it('Should return 404 for campus that does not exist', done => {
        const id = 6
        request(app)
            .get('/api/campuses' + id)
            .expect(404)
            .end(done)
    })
})
describe('GET /students:id', () => {
    it('Should get student and their campus', done => {
        const id = 5
        const seedStudent = seedStudents[id - 1]
        request(app)
            .get('/api/students/' + id)
            .expect(200)
            .expect(({ body: student }) => {
                expect(student).toMatchObject({
                    ...seedStudent,
                    id,
                    campus: campusSchema
                })
            }).end(done)
    })
    it('Should return 404 for student that does not exist', done => {
        const id = 21
        request(app)
            .get('/api/students' + id)
            .expect(404)
            .end(done)
    })
})
describe('POST /campuses', () => {
    it('Should create a campus with valid fields', done => {
        const newCampus = {
            name: 'UCLA',
            address: 'kt78r97to8guficuxt',
            description: 'blah '.repeat(100)
        }
        request(app)
            .post('/api/campuses')
            .send(newCampus)
            .expect(201)
            .expect(({ body: createdCampus }) => {
                expect(createdCampus).toMatchObject({
                    ...newCampus,
                    imageUrl: expect.any(String),
                    id: seedCampuses.length + 1
                })
            }).end(done)
    })
    it('Should not create an invalid campus', done => {
        const newCampus = {
            name: '87io8yup9'
        }
        request(app)
            .post('/api/campuses')
            .send(newCampus)
            .expect(400)
            .end(done)
    })
    it('Should not create a campus with a duplicate name', done => {
        const newCampus = seedCampuses[0]
        request(app)
            .post('/api/campuses')
            .send(newCampus)
            .expect(400)
            .end(done)
    })
})
describe('POST /students', () => {
    it('Should create a new student', done => {
        const newStudent = {
            firstName: 'Omar',
            lastName: 'Juice',
            email: 'omar.juice@gmail.com',
            imageUrl: faker.image.avatar(),
            gpa: 3.9,
            campusId: 1
        }
        request(app)
            .post('/api/students')
            .send(newStudent)
            .expect(201)
            .expect(({ body: createdStudent }) => {
                expect(createdStudent).toMatchObject({
                    ...newStudent,
                    id: seedStudents.length + 1,
                })
            }).end(done)
    })
    it('Should not create a new student with invalid fields', done => {
        const newStudent = {
            firstName: 'Omar',
            imageUrl: faker.image.avatar(),
            gpa: 3.9,
            campusId: 1
        }
        request(app)
            .post('/api/students')
            .send(newStudent)
            .expect(400)
            .end(done)
    })
})
describe('DELETE campus', () => {
    it('Should delete a campus', done => {
        const id = 2
        request(app)
            .delete('/api/campuses/' + id)
            .expect(204)
            .end(done)
    })
})
describe('DELETE student', () => {
    it('should delete a student', done => {
        const id = 3
        request(app)
            .delete('/api/students/' + id)
            .expect(204)
            .end(done)
    })
})
