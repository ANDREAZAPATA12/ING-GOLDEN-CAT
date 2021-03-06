'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    typeUser: {
      type: Sequelize.ENUM('administrador', 'cliente'),
      allowNull: false,
      defaultValue:'cliente'
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    lastName: {
      type: Sequelize.TEXT,
      allowNull: false

    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    phone: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    identification: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    city: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    images: {
      type: Sequelize.JSON
    }
  })
}
