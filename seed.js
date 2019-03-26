const { db, Campus, Student } = require('./server/db')
// eslint-disable-next-line no-unused-vars
const { green, red } = require('chalk')
const faker = require('faker')
const test = process.env.NODE_ENV === 'test'
const campuses = [
  {
    name: 'Baruch',
    imageUrl: faker.image.city(),
    address: '46576857968op90[9',
    description: 'LONG TEXT',
  },
  {
    name: 'Harvard',
    imageUrl: faker.image.city(),
    address: 'orhwp;fe[9',
    description: 'LONG TEXT',
  },
  {
    name: 'NYU',
    imageUrl: faker.image.city(),
    address: '4657685o280p9ufwkne;c7968op90[9',
    description: 'LONG TEXT',
  },
]
const students = Array(9).fill('x').map((_, i) => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    imageUrl: faker.image.avatar(),
    gpa: faker.random.number({ min: 0.0, max: 4.0 }),
    campusId: i % 3 + 1
  }
})

const seed = async () => {

  await db.sync({ force: true })
  await Campus.bulkCreate(campuses)
  await Student.bulkCreate(students)
  if (!test) db.close()
  console.log('SEEDING DONE')
}

if (!test) {
  seed()
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}

module.exports = { seed, campuses, students }
