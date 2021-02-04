const { users } = require("../../models");

module.exports = (req,res)=>{
    const { userEmail, passWord, userName } = req.body;
    const result = users.findAll({
      where: { email: userEmail },
    });

    if (result.length === 0) {
      res.status(409).send('Already exist!');
    } else {
      const userCreate = users.create({
        userEmail,
        passWord,
        userName,
      });
      res.json({data : userCreate, message:'success'});
    }
  
}