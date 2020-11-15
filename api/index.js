module.exports = (req, res) => {
    const {
      username
    } = req.query
    return res.send(username)
  }  