const larkcloud = require('@byted/larkcloud-api')

const todoTable = larkcloud.db.table('todo')

module.exports = todoTable
