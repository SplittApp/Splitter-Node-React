const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');

const account = postgres.define(
    "account",
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
        bank: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
               isAlphanumeric: true,
               notNull: true
            }
        },
        type: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
                isAlpha: true,
                notNull: true
            }
        },
        amount: {
            type: seq.FLOAT,
            null: false,
            require: true,
            validate: {
                isNumeric: true,
                notNull: true
            }
        },
        primary: {
            type: seq.BOOLEAN,
            default: true,
            null: false            ,
            require: true,
            validate: {
                notNull: true
            }
        },
        acct_id: {
            type: seq.STRING,
            null: false,
            require: true,
            validate: {
                notNull: true,
                len: [ 10, 16 ]
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

group.hasOne(user, {as: 'user'});

module.exports.account = account;
