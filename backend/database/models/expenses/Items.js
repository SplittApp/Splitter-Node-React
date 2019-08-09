const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('../user');
const { group } = require('../group/Group')
const { expense } = require('./Expenses');

const item = postgres.define(
    "item",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
                isAlphanumeric: true,
                notNull: true
            }
        },
        amount: {
            type: seq.FLOAT,
            null: false,
            require: true,
            validate: {
                isFloat: true,
                notNull: true,
            }
        },
        verified: {
            type: seq.BOOLEAN,
            null: false,
            require: true,
            validate: {
                notNull: true,
            }
        },
        paid: {
            type: seq.BOOLEAN,
            null: false,
            require: true,
            validate: {
                notNull: true,
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

item.hasOne(expense);
item.hasOne(group);
item.belongsTo(user, {as: 'payer'});
item.belongsTo(user, {as: 'payee'});

module.exports.item = item;
