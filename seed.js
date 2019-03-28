const { db, Campus, Student } = require('./server/db')
// eslint-disable-next-line no-unused-vars
const { green, red } = require('chalk')
const faker = require('faker')
const fs = require('fs')
const test = process.env.NODE_ENV === 'test'
const campuses = [
  {
    name: 'Baruch',
    imageUrl: faker.image.city(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
    description: faker.lorem.paragraph(),
  },
  {
    name: 'Harvard',
    imageUrl: faker.image.city(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
    description: faker.lorem.paragraph(),
  },
  {
    name: 'NYU',
    imageUrl: faker.image.city(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
    description: faker.lorem.paragraph(),
  },
]
const students = Array(test ? 9 : 1000).fill('x').map((_, i) => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    imageUrl: faker.image.avatar(),
    gpa: Number(String(Math.random() * 4).slice(0, 3)),
    campusId: i % (test ? 3 : 130) + 1
  }
})



const seed = async () => {
  await db.sync({ force: true })
  if (!test) {
    const data = JSON.parse(fs.readFileSync('campuses.json'))
    const realCampuses = Array(130).fill('x').map((_, i) => {
      return {
        name: data.names[i],
        imageUrl: data.images[i],
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
        description: faker.lorem.paragraph(),
      }
    })
    await Campus.bulkCreate(realCampuses)
    await Student.bulkCreate(students)
  } else {
    await Campus.bulkCreate(campuses)
    await Student.bulkCreate(students)
  }

  console.log('SEEDING DONE')
}

if (!test) {
  seed()
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
      process.exit()
    })
}

module.exports = { seed, campuses, students }

