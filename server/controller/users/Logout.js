module.exports = (req, res) => {
  return req.cookies("Authorization", "").json({
    logoutSuccess : true,
  })
};