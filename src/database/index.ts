const dbConfig = require('../config/database');
const Person = require('../person/Person');

const connection = new (dbConfig);

Person.init(connection);

module.exports = connection;