const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Address = require("../models/Address");
const Tech = require("../models/Tech");

const database = new Sequelize(dbConfig);

User.init(database);
Address.init(database);
Tech.init(database);

User.associate(database.models);
Address.associate(database.models);
Tech.associate(database.models);

module.exports = database;
