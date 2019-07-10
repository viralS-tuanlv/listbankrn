module.exports = function() {
  var faker = require('faker')
  var _ = require('lodash')
  return {
    people: _.times(100, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        voteNumber: faker.random.number(5),
        votePeople: faker.random.number(100),
        address: faker.address.streetAddress()
      }
    })
  }
}
