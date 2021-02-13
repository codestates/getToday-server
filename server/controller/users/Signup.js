const { users } = require("../../models");

module.exports = async (req,res)=>{
    const { email, password, userName, mobile } = req.body;
    console.log(email);
    const result = await users.findOne({
      where: { userEmail: email },
    })
    .then(data => {
      if (data) {
        res.status(409).send({message : 'Already exist!'});
      } else {
        users.create({
          userEmail : email,
          password,
          userName,
          mobile,
        })
        .then(
          res.status(200).json({message:'ok'}))
        }
    })
 }
  