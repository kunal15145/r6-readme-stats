const renderStatsCard = (userInfo = {}, userStats = {}) => {
    const {
      username,
      platform,
      avatar_url_146,
      level
    } = userInfo;
    const {
      genericStats
    } = userStats;

    console.log(userInfo, userStats);
    return `<div>Owner Here</div>`;
  };
  
  module.exports = renderStatsCard;