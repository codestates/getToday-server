const { users, schedules } = require('../../models');

module.exports = (req, res) => {
  const userId = users.findOne({
    where: {
      userEmail
    }
  }).id

  schedules.findOne

}