const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');

const group = postgres.define(
    "group",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
                isAlphanumeric: true,
                notNull: true,
                len: [2, 22]
            }
        },
        description: {
            type: seq.TEXT,
            null: true,
        },
        members: {
            type: seq.INTEGER,
            null: false,
            require: true,
            validate: {
                notNull: true,
                isNumeric: true,
                min: 1
            }
        },
        reference: {
            type: seq.INTEGER,
            null: false,
            require: true,
            validate: {
                isNumeric: true,
                notNull: true,
                len: [10, 12]
            }
        },
        active: {
            type: seq.BOOLEAN,
            notNull: true,
            validate: {
                notNull: true,
                isIn: [['true', 'false']]
            }
        }
    }
    ,{
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    },
);
postgres.sync()
    .then(() => {
        console.log("friend table is synced")
    })
    .catch((error) => {
        console.log("caught error with friend:  " + error)
    });

group.hasMany(user, {as: 'creator'});

module.exports.group = group;
