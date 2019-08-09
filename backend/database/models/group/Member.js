const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');
const { group } = require('./Group');

const member = postgres.define(
    "member",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        balance: {
            type: seq.FLOAT,
            null: false,
            required: true,
            validate: {
                isFloat: true,
                notNull: true
            }
        },
        open_tabs: {
            type: seq.INTEGER,
            null: false,
            validate: {
                notNull: true,
                isNumeric: true,
                min: 0
            }
        },
        admin: {
            type: seq.BOOLEAN,
            null: ture,
            validate: {
                notNull: true,
            }
        },
        active: {
            type: seq.BOOLEAN,
            null: ture,
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

member.hasOne(user);
member.hasOne(group);

module.exports.member = member;
