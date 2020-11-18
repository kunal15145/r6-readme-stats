var urllib = require('urllib');

function userData(username) {
  return new Promise((resolve, reject) => {
    urllib.request(`https://r6stats.com/api/player-search/${username}/pc`).then(function (result) {
      resolve(result)
    }).catch(function (err) {
      reject(err)
    });
  });
}

module.exports = (req, res) => {
    const {
      username
    } = req.query;
    userData(username).then(ret => {
      return res.send(JSON.parse(ret.data.toString()))
    })
  }