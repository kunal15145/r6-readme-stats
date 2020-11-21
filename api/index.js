var urllib = require('urllib');
const renderStatsCard = require("../src/card/renderR6statscard");

function userData(username, platform) {
    return new Promise((resolve, reject) => {
      urllib.request(`https://r6stats.com/api/player-search/${username}/${platform}`).then(function (result) {
        resolve(result)
      }).catch(function (err) {
        reject(err)
      });
    });
  }

module.exports = (req, res) => {
    const {
      username,
      platform
    } = req.query;
    res.setHeader("Content-Type","image/svg+xml");
    return res.send(renderStatsCard({
      username: username,
      platform: platform,
      avatar_url_146: undefined,
      level: undefined
    }, undefined))
    // userData(username, platform).then(ret => {
    //   const jsonUserData = JSON.parse(ret.data.toString());
    //   return res.send(renderStatsCard({
    //     username: username,
    //     platform: platform,
    //     avatar_url_146: jsonUserData.data[0].avatar_url_146,
    //     level: jsonUserData.data[0].progressionStats.level
    //   }, jsonUserData.data[0].genericStats))
    // })
  }