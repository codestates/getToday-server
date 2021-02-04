const { User } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports =  (req, res) => {
  const { userId, passWord } = req.body;
  User.findOne({
    where: {
      userId,
      passWord,
    },
  })
    .then((data) => {
      if (!data) {
        return res.json({ data: null, message: 'not authorized' });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      const refreshToken = generateRefreshToken(data.dataValues);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
