const { users } = require("../models");

module.exports = async (req,res)=>{
    const { userEmail, passWord, userName } = req.body;
    const result = await users.findAll({
      where: { email: userEmail, password: passWord, username: userName },
    });

    if (result.length >= 1) {
      res.status(409).send("Already exists user");
    } else {
      const userCreate = await users.create({
        email: userEmail,
        password: passWord,
        username: userName,
      });
      res.json({data : userCreate, message:'success'});
    }

}