const { users } = require("../../models");

module.exports = async (req,res)=>{
    const { userEmail, passWord, userName } = req.body;
    const result = await users.findOne({
      where: { userEmail: userEmail },
    })
    .then(data => {
      if (data) {
        res.status(409).send('Already exist!');
      } else {
        users.create({
          userEmail,
          passWord,
          userName,
        })
        .then(
          res.status(200).json({message:'success'}))
        }
    })
 }
    