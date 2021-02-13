const { users } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports =  (req, res) => {
  const { email, password } = req.body;
  users.findOne({
    where: {
      userEmail : email,
      password,
    },
  })
    .then((data) => {
      if (!data) {
        return res.json({ data: null, message: '회원아님' });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      const refreshToken = generateRefreshToken(data.dataValues);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken, data);
    })
    .catch((err) => {
      console.log(err);
    });
};
