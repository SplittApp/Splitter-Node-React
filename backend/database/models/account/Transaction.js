const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');
const { account } = require('./Account');

const transaction = postgres.define(
    "transaction",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        description: {
            type: seq.TEXT,
            null: false            ,
            require: true,
            validate: {
                notNull: true,
                isAlphanumeric: true,
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

transaction.belongsTo(user, {as: 'user_from'});
transaction.belongsTo(user, {as: 'user_to'});

transaction.belongsTo(account, {as: 'acct_from'});
transaction.belongsTo(account, {as: 'acct_to'});

module.exports.transaction = transaction;
