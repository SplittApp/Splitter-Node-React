const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');

const expense = postgres.define(
    "expense",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
                isAlphanumeric: true,
                notNull: true
            }
        },
        split: {
            type: seq.BOOLEAN,
            null: false,
            require: true,
            validate: {
                notNull: true,
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
        tax: {
            type: seq.FLOAT,
            null: false,
            require: true,
            validate: {
                isFloat: true,
                notNull: true,
            }
        },
        tip: {
            type: seq.FLOAT,
            null: false,
            require: true,
            validate: {
                isFloat: true,
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

expense.hasOne(user);
expense.hasOne(group, {foreignKey: {
        allowNull: true
        }
    }
);

module.exports.expense = expense;
