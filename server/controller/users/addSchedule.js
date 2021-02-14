const { users, schedules } = require('../../models');
const {
  isValidSchedule
} = require('../DBfun');

module.exports = async (req, res) => {
  const {title, startTime, endTime, date, userEmail} = req.body

  const userId = await users.findOne({
    where: {
      userEmail
    }
  })

  // await schedules.findAll({
  //   where : {
  //     userId: userId.dataValues.id
  //   }
  // })
  // .then(datas => {
  //   console.log(datas)
  //   for(let data of datas) {
  //     if(!isValidScheDule(data.dataValues, req.body)) {
  //       res.status(302).send({message : '기존 시간표와 시간이 겹칩니다!'})
  //       return;
  //     }
  //   }
  // })

  await schedules.create({
    title : title,
    startTime: startTime,
    endTime: endTime,
    userEmail: userEmail,
    date: date,
    userId: userId.dataValues.id
  })
  .then(
    res.status(200).json({message:'Add new schedule!'})
  )
  console.log(title, startTime);

    
  
}