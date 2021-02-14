const { users, schedules } = require('../../models');

module.exports = async (req, res) => {
  console.log(req.body)

  const user = await users.findOne({
    where: {
      userEmail: req.body.userEmail
    }
  })

  schedules.findAll({
    where: {
      userId: user.dataValues.id
    }
  })
  .then(datas => {
    let treatedDatas = [];
    datas.forEach(el => {
      treatedDatas.push(el.dataValues)
    })
    res.status(201).send({data : treatedDatas, message: 'ok'})
  })
}