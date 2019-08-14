const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('../user/User');
const { profile } = require('../user/Profile');
const { friend } = require('../user/Friend');
const { group } = require('../group/Group');
const { member } = require('../group/Member');
const { expense } = require('../expense/Expenses');
const { item } = require('../expense/Items');
const { account } = require('../account/Account');
const { transaction } = require('../account/Transaction');

const activity = postgres.define(
    "activity",
    {
        id: {
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: seq.TEXT,
            null: false,
            require: true,
            validate: {
                isAlphanumeric: false,
                isNull: false
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
        seen: {
            type: seq.BOOLEAN,
            null: false,
            require: true,
            validate: {
                notNull: true,
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

activity.hasOne(user, {as: 'user', foreignKey: {allowNull: true}});
activity.hasOne(profile, {as: 'profile', foreignKey: {allowNull: true}});
activity.hasOne(friend, {as: 'friend', foreignKey: {allowNull: true}});
activity.hasOne(group, {as: 'group', foreignKey: {allowNull: true}});
activity.hasOne(member, {as: 'member', foreignKey: {allowNull: true}});
activity.hasOne(expense, {as: 'expense', foreignKey: {allowNull: true}});
activity.hasOne(item, {as: 'item', foreignKey: {allowNull: true}});
activity.hasOne(account, {as: 'account', foreignKey: {allowNull: true}});
activity.hasOne(transaction, {as: 'transaction', foreignKey: {allowNull: true}});

module.exports.activity = activity;
